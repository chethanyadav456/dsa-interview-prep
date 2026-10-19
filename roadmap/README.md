# DSA Roadmap

Pattern-based, company-wise DSA roadmap built from two articles: [Company-wise DSA patterns](https://jugaldb.substack.com/p/company-wise-dsa-patterns) and [Michael's Guide to FAANG DSA](https://jugaldb.substack.com/p/michaels-guide-to-faang-dsa). Every problem link points to LeetCode and was checked for existence. Problems that need LeetCode Premium are marked.

## Pick a track

| | 60-day plan | 10-week plan |
|---|-------------|--------------|
| Pace | 60-90 min a day, 2-4 problems | about 5-6 problems a week |
| Style | Deep: 22 patterns, company days, review days, mock interviews | Breadth: 15 patterns, one or two per week |
| Problems | 141 slots | 54 |
| Start here | [60-day-plan.md](60-day-plan.md) | [10-week-plan.md](10-week-plan.md) |

Doing both is fine: the 10-week plan is a first pass over the basics, the 60-day plan then goes deeper. Overlapping problems are tagged in each file so you do not solve them twice.

## Files

| File | What it is |
|------|-----------|
| [60-day-plan.md](60-day-plan.md) | Day-by-day plan in 6 phases with checkboxes |
| [10-week-plan.md](10-week-plan.md) | Week-by-week plan with checkboxes |
| [patterns.md](patterns.md) | 22 core patterns, grouped problems, master checklist |
| [faang-patterns.md](faang-patterns.md) | 14 FAANG patterns with 5 sample problems each (adds Trie) |
| [companies.md](companies.md) | Amazon, Google, Meta, Netflix, Uber, Airbnb, Microsoft, Apple: core patterns and curated lists |
| [pattern-cheatsheet.md](pattern-cheatsheet.md) | Fill-in table of trigger phrases and go-to problems |

## How to use

1. Pick a track and your target companies ([companies.md](companies.md)).
2. Tick the box when a problem is solved. A problem listed in several files has to be ticked in each file you track in.
3. Save each solution under `dsa/<folder>/NNN-problem-name.<ext>`, copy `templates/problem.md` for the write-up, and add a row to the main README log.
4. After each phase or week, fill the matching rows of [pattern-cheatsheet.md](pattern-cheatsheet.md).

## Pattern to folder map (22-pattern tracker)

| Pattern | Folder |
|---------|--------|
| 1. Fast & Slow Pointer | `dsa/linked-list/` |
| 2. Overlapping Intervals | `dsa/intervals/` |
| 3. Prefix Sum | `dsa/arrays-hashing/` |
| 4. Sliding Window | `dsa/sliding-window/` |
| 5. Two Pointers | `dsa/two-pointers/` |
| 6. Cyclic Sort (Index-Based) | `dsa/arrays-hashing/` |
| 7. Reverse Linked List (In-place) | `dsa/linked-list/` |
| 8. Matrix Manipulation | `dsa/arrays-hashing/` |
| 9. Breadth-First Search (BFS) | `dsa/graphs/` |
| 10. Depth-First Search (DFS) | `dsa/graphs/` |
| 11. Backtracking | `dsa/backtracking/` |
| 12. Modified Binary Search | `dsa/binary-search/` |
| 13. Bitwise XOR | `dsa/bit-manipulation/` |
| 14. Top K Elements | `dsa/heap/` |
| 15. K-way Merge | `dsa/heap/` |
| 16. Two Heaps | `dsa/heap/` |
| 17. Monotonic Stack | `dsa/stack/` |
| 18. Trees | `dsa/trees/` |
| 19. Dynamic Programming | `dsa/dp/` |
| 20. Graphs | `dsa/graphs/` |
| 21. Greedy | `dsa/greedy/` |
| 22. Design Data Structure | `dsa/design/` |

The only pattern from the 14-pattern guide with no counterpart above is Trie, which uses `dsa/trie/`.

Totals: 222 unique problems across both articles (182 + 40 new), 8 companies.

Behavioral prep for the same companies lives in [../interview-notes/behavioral/](../interview-notes/behavioral/).
