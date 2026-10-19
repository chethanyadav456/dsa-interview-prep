import { test } from 'node:test';
import assert from 'node:assert/strict';
import { topicFor, buildSolution, insertLogRow, bumpProgress, isUnchanged, toB64, fromB64 } from './lib.js';

const meta = { questionFrontendId: '1', title: 'Two Sum', titleSlug: 'two-sum', difficulty: 'Easy', topicTags: [{ name: 'Array', slug: 'array' }, { name: 'Hash Table', slug: 'hash-table' }] };

test('topic priority: dp beats array, unknown goes to misc', () => {
  assert.equal(topicFor(['array', 'dynamic-programming']).folder, 'dp');
  assert.equal(topicFor(['design']).folder, 'misc');
});

test('buildSolution path, row and message', () => {
  const s = buildSolution({ meta, lang: 'java', code: 'x', now: new Date('2026-10-18T10:00:00Z') });
  assert.equal(s.path, 'dsa/arrays-hashing/001-two-sum.java');
  assert.equal(s.row, '| 2026-10-18 | [1. Two Sum](https://leetcode.com/problems/two-sum/) | Arrays & Hashing | Easy | java |');
  assert.equal(s.message, 'Add 1. Two Sum (java)');
});

test('insertLogRow appends after existing rows, not after the header only', () => {
  const md = '## Log\n\n| a | b |\n|---|---|\n| 1 | 2 |\n\n## Next\n';
  assert.equal(insertLogRow(md, '| 3 | 4 |'), '## Log\n\n| a | b |\n|---|---|\n| 1 | 2 |\n| 3 | 4 |\n\n## Next\n');
  assert.equal(insertLogRow('## Log\n\n| a |\n|---|\n\nend', '| r |'), '## Log\n\n| a |\n|---|\n| r |\n\nend');
});

test('bumpProgress handles labels with special characters', () => {
  const md = '| Arrays & Hashing | 0 |\n| DP | 4 |';
  assert.equal(bumpProgress(md, 'Arrays & Hashing'), '| Arrays & Hashing | 1 |\n| DP | 4 |');
  assert.equal(bumpProgress(md, null), md);
});

test('base64 round trips UTF-8', () => {
  assert.equal(fromB64(toB64('héllo ✓')), 'héllo ✓');
});

test('header is prefixed with the right comment style', () => {
  const now = new Date('2026-10-18T10:00:00Z');
  const j = buildSolution({ meta, lang: 'java', code: 'class A {}', now }).content;
  assert.equal(j, '// 1. Two Sum\n// https://leetcode.com/problems/two-sum/\n//\n// Difficulty: Easy\n// Topics: Array, Hash Table\n// Language: java\n// Solved: 2026-10-18\n\nclass A {}');
  assert.ok(buildSolution({ meta, lang: 'python3', code: 'x', now }).content.startsWith('# 1. Two Sum\n'));
  assert.ok(buildSolution({ meta, lang: 'mysql', code: 'x', now }).content.startsWith('-- 1. Two Sum\n'));
});

test('isUnchanged ignores header date but upgrades header-less files', () => {
  assert.equal(isUnchanged('// h\n\ncode', 'code'), true);
  assert.equal(isUnchanged('code', 'code'), false);
  assert.equal(isUnchanged('// h\n\nold', 'code'), false);
});
