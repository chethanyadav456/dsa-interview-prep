// Pure helpers, kept free of chrome.* so they can be unit tested with node.

// Order matters: the first folder whose tags match wins.
export const TOPICS = [
  { folder: 'dp', label: 'DP', tags: ['dynamic-programming'] },
  { folder: 'backtracking', label: 'Backtracking', tags: ['backtracking'] },
  { folder: 'heap', label: 'Heap', tags: ['heap-priority-queue'] },
  { folder: 'bit-manipulation', label: 'Bit Manipulation', tags: ['bit-manipulation'] },
  { folder: 'sliding-window', label: 'Sliding Window', tags: ['sliding-window'] },
  { folder: 'two-pointers', label: 'Two Pointers', tags: ['two-pointers'] },
  { folder: 'stack', label: 'Stack', tags: ['stack', 'monotonic-stack'] },
  { folder: 'binary-search', label: 'Binary Search', tags: ['binary-search'] },
  { folder: 'linked-list', label: 'Linked List', tags: ['linked-list'] },
  { folder: 'trees', label: 'Trees', tags: ['tree', 'binary-tree', 'binary-search-tree', 'trie'] },
  { folder: 'graphs', label: 'Graphs', tags: ['graph', 'union-find', 'topological-sort', 'breadth-first-search', 'depth-first-search'] },
  { folder: 'greedy', label: 'Greedy', tags: ['greedy'] },
  { folder: 'intervals', label: 'Intervals', tags: ['line-sweep'] },
  { folder: 'arrays-hashing', label: 'Arrays & Hashing', tags: ['array', 'hash-table', 'string', 'matrix', 'sorting', 'prefix-sum', 'math'] },
];
const MISC = { folder: 'misc', label: null };

const EXT = {
  java: 'java', python: 'py', python3: 'py', cpp: 'cpp', c: 'c', csharp: 'cs', javascript: 'js',
  typescript: 'ts', golang: 'go', rust: 'rs', kotlin: 'kt', swift: 'swift', ruby: 'rb', php: 'php',
  scala: 'scala', mysql: 'sql', mssql: 'sql', oraclesql: 'sql', bash: 'sh', dart: 'dart',
};

export const extFor = (lang) => EXT[lang] || 'txt';

export function topicFor(tagSlugs) {
  const tags = new Set(tagSlugs);
  return TOPICS.find((t) => t.tags.some((s) => tags.has(s))) || MISC;
}

export function buildSolution({ meta, lang, code, now = new Date() }) {
  const topic = topicFor(meta.topicTags.map((t) => t.slug));
  const id = String(meta.questionFrontendId).padStart(3, '0');
  const path = `dsa/${topic.folder}/${id}-${meta.titleSlug}.${extFor(lang)}`;
  const date = now.toISOString().slice(0, 10);
  const url = `https://leetcode.com/problems/${meta.titleSlug}/`;
  const row = `| ${date} | [${meta.questionFrontendId}. ${meta.title}](${url}) | ${topic.label || 'Misc'} | ${meta.difficulty} | ${lang} |`;
  return { path, topic, row, message: `Add ${meta.questionFrontendId}. ${meta.title} (${lang})` };
}

// Appends a row to the end of the table under the "## Log" heading.
export function insertLogRow(readme, row) {
  const lines = readme.split('\n');
  const head = lines.indexOf('## Log');
  if (head === -1) return readme;
  let i = lines.findIndex((l, n) => n > head && l.startsWith('|---'));
  if (i === -1) return readme;
  i += 1;
  while (i < lines.length && lines[i].startsWith('|')) i += 1;
  lines.splice(i, 0, row);
  return lines.join('\n');
}

export function bumpProgress(readme, label) {
  if (!label) return readme;
  const esc = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return readme.replace(new RegExp(`^\\| ${esc} \\| (\\d+) \\|$`, 'm'), (_, n) => `| ${label} | ${Number(n) + 1} |`);
}

export const toB64 = (s) => btoa(String.fromCharCode(...new TextEncoder().encode(s)));
export const fromB64 = (b) => new TextDecoder().decode(Uint8Array.from(atob(b.replace(/\n/g, '')), (c) => c.charCodeAt(0)));
