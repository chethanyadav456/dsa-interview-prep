// Isolated world: relays accepted submissions from the page to the background worker.
window.addEventListener('message', (e) => {
  if (e.source === window && e.data && e.data.source === 'lc-sync') {
    console.log('[lc-sync] relaying to background', e.data.payload.slug);
    chrome.runtime.sendMessage(e.data.payload).catch((err) => console.error('[lc-sync] relay failed', err.message));
  }
});
