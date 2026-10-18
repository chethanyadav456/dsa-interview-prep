// Runs in the page context so it can see LeetCode's own fetch calls.
// shortcut: only hooks fetch (not XHR) and string bodies, add an XHR hook if LeetCode switches.
(() => {
  const pending = new Map(); // submission_id -> { slug, lang, code }
  const origFetch = window.fetch;

  async function inspect(url, init, res) {
    const submit = url.match(/\/problems\/([^/]+)\/submit\/?/);
    if (submit && init && typeof init.body === 'string') {
      const body = JSON.parse(init.body);
      const { submission_id } = await res.json();
      pending.set(String(submission_id), { slug: submit[1], lang: body.lang, code: body.typed_code });
      return;
    }
    const check = url.match(/\/submissions\/detail\/(\d+)\/check\/?/);
    if (!check) return;
    const data = await res.json();
    const sub = pending.get(check[1]);
    if (data.state === 'SUCCESS' && data.status_msg === 'Accepted' && sub) {
      pending.delete(check[1]);
      window.postMessage({ source: 'lc-sync', payload: sub }, '*');
    }
  }

  window.fetch = async function (input, init) {
    const res = await origFetch.apply(this, arguments);
    try {
      inspect(typeof input === 'string' ? input : input.url, init, res.clone()).catch(() => {});
    } catch {}
    return res;
  };
})();
