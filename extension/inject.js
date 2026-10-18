// Runs in the page context so it can see LeetCode's own network calls.
// Hooks both fetch and XHR because LeetCode has used each over time.
(() => {
  const log = (...a) => console.log('[lc-sync]', ...a);
  const pending = new Map(); // submission_id -> { slug, lang, code }

  function handle(url, body, data) {
    const submit = url.match(/\/problems\/([^/]+)\/submit\/?/);
    if (submit && typeof body === 'string') {
      const req = JSON.parse(body);
      pending.set(String(data.submission_id), { slug: submit[1], lang: req.lang, code: req.typed_code });
      log('submission started', data.submission_id, submit[1]);
      return;
    }
    const check = url.match(/\/submissions\/detail\/(\d+)\/check\/?/);
    if (!check || data.state !== 'SUCCESS') return;
    log('result', check[1], data.status_msg);
    const sub = pending.get(check[1]);
    if (data.status_msg === 'Accepted' && sub) {
      pending.delete(check[1]);
      window.postMessage({ source: 'lc-sync', payload: sub }, '*');
    }
  }

  const origFetch = window.fetch;
  window.fetch = async function (input, init) {
    const res = await origFetch.apply(this, arguments);
    const url = typeof input === 'string' ? input : input.url;
    const body = init && init.body !== undefined ? init.body : undefined;
    if (/\/(submit|check)\/?(\?|$)/.test(url)) {
      res.clone().json().then((d) => handle(url, body, d)).catch((e) => log('fetch parse error', e.message));
    }
    return res;
  };

  const open = XMLHttpRequest.prototype.open;
  const send = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (method, url) {
    this._lcUrl = String(url);
    return open.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function (body) {
    if (/\/(submit|check)\/?(\?|$)/.test(this._lcUrl || '')) {
      this.addEventListener('load', () => {
        try { handle(this._lcUrl, body, JSON.parse(this.responseText)); } catch (e) { log('xhr parse error', e.message); }
      });
    }
    return send.apply(this, arguments);
  };

  log('hooks installed');
})();
