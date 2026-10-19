// Runs in the page context so it can see LeetCode's own network calls.
// Hooks fetch and XHR, and understands both the REST result poll and the GraphQL one.
(() => {
  const log = (...a) => console.log('[lc-sync]', ...a);
  const pending = new Map(); // submission_id -> { slug, lang, code }
  const done = new Set();

  function accept(id, sub) {
    if (done.has(id) || !sub || !sub.code || !sub.slug) return;
    done.add(id);
    log('accepted, sending to background', id, sub.slug);
    window.postMessage({ source: 'lc-sync', payload: sub }, '*');
  }

  function handle(url, body, data) {
    const submit = url.match(/\/problems\/([^/]+)\/submit\/?/);
    if (submit && typeof body === 'string') {
      const req = JSON.parse(body);
      pending.set(String(data.submission_id), { slug: submit[1], lang: req.lang, code: req.typed_code });
      log('submission started', data.submission_id, submit[1]);
      return;
    }

    const check = url.match(/\/submissions\/detail\/(\d+)\/check\/?/);
    if (check && data.state === 'SUCCESS') {
      log('result (rest)', check[1], data.status_msg);
      if (data.status_msg === 'Accepted') accept(check[1], pending.get(check[1]));
      return;
    }

    const d = data && data.data && data.data.submissionDetails;
    if (d) {
      const id = String(JSON.parse(body).variables.submissionId);
      log('result (graphql)', id, JSON.stringify(d).slice(0, 300));
      // Field names vary by query, so accept any of the known signals (statusCode 10 is Accepted).
      const accepted = d.statusCode === 10 || /"(statusDisplay|status_msg|status)":"Accepted"/.test(JSON.stringify(d));
      if (accepted) {
        const known = pending.get(id) || {};
        accept(id, {
          slug: known.slug || (d.question && d.question.titleSlug),
          lang: known.lang || (d.lang && d.lang.name),
          code: known.code || d.code,
        });
      }
    }
  }

  // Only parse responses that could be about a submission.
  const relevant = (url, body) =>
    /\/(submit|check)\/?(\?|$)/.test(url) || (/graphql/.test(url) && typeof body === 'string' && body.includes('submissionDetails'));

  const origFetch = window.fetch;
  window.fetch = async function (input, init) {
    const res = await origFetch.apply(this, arguments);
    const url = typeof input === 'string' ? input : input.url;
    const body = init && init.body;
    if (relevant(url, body)) {
      res.clone().json().then((d) => handle(url, body, d)).catch((e) => log('fetch parse error', e.message));
    } else if (/submi|check/.test(url)) {
      log('unhandled request', url);
    }
    return res;
  };

  // responseText throws unless responseType is '' or 'text', so read by type.
  async function xhrJson(xhr) {
    const t = xhr.responseType;
    if (t === 'json') return xhr.response;
    if (t === 'blob') return JSON.parse(await xhr.response.text());
    if (t === 'arraybuffer') return JSON.parse(new TextDecoder().decode(xhr.response));
    return JSON.parse(xhr.responseText);
  }

  const open = XMLHttpRequest.prototype.open;
  const send = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (method, url) {
    this._lcUrl = String(url);
    return open.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function (body) {
    if (relevant(this._lcUrl || '', body)) {
      this.addEventListener('load', async () => {
        try { handle(this._lcUrl, body, await xhrJson(this)); } catch (e) { log('xhr parse error', e.message); }
      });
    } else if (/submi|check/.test(this._lcUrl || '')) {
      log('unhandled request', this._lcUrl);
    }
    return send.apply(this, arguments);
  };

  log('hooks installed');
})();
