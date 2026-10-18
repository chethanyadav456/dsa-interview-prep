const ids = ['token', 'owner', 'repo', 'branch'];
const defaults = { token: '', owner: 'chethanyadav456', repo: 'dsa-interview-prep', branch: 'main' };

chrome.storage.local.get(defaults).then((cfg) => ids.forEach((k) => (document.getElementById(k).value = cfg[k])));

document.getElementById('save').onclick = async () => {
  const cfg = Object.fromEntries(ids.map((k) => [k, document.getElementById(k).value.trim()]));
  await chrome.storage.local.set(cfg);
  document.getElementById('msg').textContent = 'Saved';
};
