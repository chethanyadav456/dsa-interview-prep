import { buildSolution, insertLogRow, bumpProgress, toB64, fromB64 } from './lib.js';

const QUERY = `query q($slug: String!) { question(titleSlug: $slug) {
  questionFrontendId title titleSlug difficulty topicTags { slug } } }`;

async function fetchMeta(slug) {
  const res = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query: QUERY, variables: { slug } }),
  });
  const { data } = await res.json();
  if (!data || !data.question) throw new Error(`No LeetCode metadata for ${slug}`);
  return data.question;
}

function gh(cfg) {
  const base = `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/`;
  const headers = { Authorization: `Bearer ${cfg.token}`, Accept: 'application/vnd.github+json' };
  const url = (p) => base + p.split('/').map(encodeURIComponent).join('/');
  return {
    async get(path) {
      const res = await fetch(`${url(path)}?ref=${encodeURIComponent(cfg.branch)}`, { headers });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error(`GitHub GET ${path}: ${res.status}`);
      const j = await res.json();
      return { sha: j.sha, text: fromB64(j.content) };
    },
    async put(path, text, message, sha) {
      const res = await fetch(url(path), {
        method: 'PUT',
        headers,
        body: JSON.stringify({ message, content: toB64(text), branch: cfg.branch, sha }),
      });
      if (!res.ok) throw new Error(`GitHub PUT ${path}: ${res.status}`);
    },
  };
}

async function sync({ slug, lang, code }) {
  const cfg = await chrome.storage.local.get({ token: '', owner: '', repo: '', branch: 'main' });
  if (!cfg.token || !cfg.owner || !cfg.repo) throw new Error('Set token, owner and repo in the extension options');

  const meta = await fetchMeta(slug);
  const sol = buildSolution({ meta, lang, code });
  const api = gh(cfg);

  const existing = await api.get(sol.path);
  if (existing && existing.text === code) return 'unchanged';
  await api.put(sol.path, code, existing ? sol.message.replace('Add', 'Update') : sol.message, existing && existing.sha);
  if (existing) return 'updated';

  const readme = await api.get('README.md');
  if (readme) {
    const next = bumpProgress(insertLogRow(readme.text, sol.row), sol.topic.label);
    await api.put('README.md', next, `Log ${meta.questionFrontendId}. ${meta.title}`, readme.sha);
  }
  return 'added';
}

function badge(text, color, title) {
  chrome.action.setBadgeText({ text });
  chrome.action.setBadgeBackgroundColor({ color });
  chrome.action.setTitle({ title });
}

chrome.runtime.onMessage.addListener((msg) => {
  sync(msg)
    .then((r) => badge('OK', '#2da44e', `${msg.slug}: ${r}`))
    .catch((e) => badge('ERR', '#cf222e', e.message));
});
