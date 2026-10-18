// Isolated world: relays accepted submissions from the page to the background worker.
window.addEventListener('message', (e) => {
  if (e.source === window && e.data && e.data.source === 'lc-sync') {
    chrome.runtime.sendMessage(e.data.payload);
  }
});
