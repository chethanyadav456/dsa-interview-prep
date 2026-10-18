# LeetCode GitHub Sync

Chrome extension (Manifest V3). When a LeetCode submission is Accepted it:

1. Commits the solution to `dsa/<topic>/NNN-problem-name.<ext>` in your repo.
2. Appends a row to the README Log table and bumps that topic's count in the Progress table.

Re-submitting an already-saved problem updates the file (only if the code changed) and does not touch the README.

## Install

1. Create a fine-grained GitHub token: Settings, Developer settings, Personal access tokens. Limit it to this one repo with **Contents: Read and write**.
2. Open `chrome://extensions`, enable Developer mode, click **Load unpacked**, choose this `extension/` folder.
3. Open the extension's options page, paste the token, check owner/repo/branch, Save.
4. Submit a solution on leetcode.com. The toolbar badge shows `OK` or `ERR` (hover for the reason).

The token lives in `chrome.storage.local` on your machine only. Never commit it.

## Limits

- Only hooks `fetch` on leetcode.com. If LeetCode changes how it submits, `inject.js` needs updating.
- Topic folder comes from LeetCode tags (first match in `lib.js` `TOPICS`), anything else goes to `dsa/misc/`.
- Needs Chrome 111+ (content script `world: "MAIN"`).

## Tests

```bash
cd extension && node --test
```
