# FAANG DSA Patterns (14 patterns)

Pattern guide from [Michael's Guide to FAANG DSA](https://jugaldb.substack.com/p/michaels-guide-to-faang-dsa): 14 patterns, 5 sample problems each. It complements the 22-pattern tracker in [patterns.md](patterns.md); the last column of the index shows where each pattern overlaps. The weekly schedule is in [10-week-plan.md](10-week-plan.md).

Premium problems need LeetCode Premium. Tags after each problem show company lists and 60-day plan days where the same problem already appears.

## Index

| # | Pattern | Repo folder | Same as in patterns.md |
|---|---------|-------------|------------------------|
| 1 | [Sliding Window](#1-sliding-window) | `dsa/sliding-window/` | 4. Sliding Window |
| 2 | [Two Pointers](#2-two-pointers) | `dsa/two-pointers/` | 5. Two Pointers |
| 3 | [Fast & Slow Pointers (Cycle Detection)](#3-fast--slow-pointers-cycle-detection) | `dsa/linked-list/` | 1. Fast & Slow Pointer |
| 4 | [Merge Intervals](#4-merge-intervals) | `dsa/intervals/` | 2. Overlapping Intervals |
| 5 | [Cyclic Sort](#5-cyclic-sort) | `dsa/arrays-hashing/` | 6. Cyclic Sort (Index-Based) |
| 6 | [In-place Reversal of a LinkedList](#6-in-place-reversal-of-a-linkedlist) | `dsa/linked-list/` | 7. Reverse Linked List (In-place) |
| 7 | [Breadth-First Search (BFS)](#7-breadth-first-search-bfs) | `dsa/graphs/` | 9. Breadth-First Search (BFS) |
| 8 | [Depth-First Search (DFS)](#8-depth-first-search-dfs) | `dsa/graphs/` | 10. Depth-First Search (DFS) |
| 9 | [Backtracking](#9-backtracking) | `dsa/backtracking/` | 11. Backtracking |
| 10 | [Dynamic Programming](#10-dynamic-programming) | `dsa/dp/` | 19. Dynamic Programming |
| 11 | [Greedy](#11-greedy) | `dsa/greedy/` | 21. Greedy |
| 12 | [Topological Sort](#12-topological-sort) | `dsa/graphs/` | 20. Graphs |
| 13 | [Binary Search](#13-binary-search) | `dsa/binary-search/` | 12. Modified Binary Search |
| 14 | [Trie Based](#14-trie-based) | `dsa/trie/` | New (not in patterns.md) |
| 15 | [Union Find (Disjoint Set)](#15-union-find-disjoint-set) | `dsa/graphs/` | 20. Graphs |

## 1. Sliding Window

Folder: `dsa/sliding-window/` | Same pattern as [patterns.md](patterns.md) #4

- [ ] [#643 Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) - Easy (article name: Maximum Sum Subarray of Size K) - 60-day plan: Day 3
- [ ] [#3 Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) - Medium - Amazon, Meta | 60-day plan: Day 4, 9
- [ ] [#567 Permutation in String](https://leetcode.com/problems/permutation-in-string/) - Medium - Meta
- [ ] [#209 Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) - Medium - Amazon | 60-day plan: Day 4, 9
- [ ] [#424 Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) - Medium

## 2. Two Pointers

Folder: `dsa/two-pointers/` | Same pattern as [patterns.md](patterns.md) #5

- [ ] [#15 3Sum](https://leetcode.com/problems/3sum/) - Medium
- [ ] [#11 Container With Most Water](https://leetcode.com/problems/container-with-most-water/) - Medium - Amazon, Apple | 60-day plan: Day 2, 9
- [ ] [#26 Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) - Easy
- [ ] [#283 Move Zeroes](https://leetcode.com/problems/move-zeroes/) - Easy
- [ ] [#125 Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) - Easy

## 3. Fast & Slow Pointers (Cycle Detection)

Folder: `dsa/linked-list/` | Same pattern as [patterns.md](patterns.md) #1

- [ ] [#141 Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) - Easy
- [ ] [#287 Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) - Medium - 60-day plan: Day 1
- [ ] [#202 Happy Number](https://leetcode.com/problems/happy-number/) - Easy
- [ ] [#876 Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) - Easy
- [ ] [#234 Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) - Easy - 60-day plan: Day 1

## 4. Merge Intervals

Folder: `dsa/intervals/` | Same pattern as [patterns.md](patterns.md) #2

- [ ] [#56 Merge Intervals](https://leetcode.com/problems/merge-intervals/) - Medium - Netflix, Airbnb | 60-day plan: Day 11, 19
- [ ] [#57 Insert Interval](https://leetcode.com/problems/insert-interval/) - Medium - Netflix, Airbnb | 60-day plan: Day 11, 19
- [ ] [#252 Meeting Rooms](https://leetcode.com/problems/meeting-rooms/) - Easy (Premium)
- [ ] [#253 Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) - Medium (Premium)
- [ ] [#759 Employee Free Time](https://leetcode.com/problems/employee-free-time/) - Hard (Premium)

## 5. Cyclic Sort

Folder: `dsa/arrays-hashing/` | Same pattern as [patterns.md](patterns.md) #6

- [ ] [#645 Set Mismatch](https://leetcode.com/problems/set-mismatch/) - Easy (article name: Cyclic Sort) - 60-day plan: Day 6
- [ ] [#268 Missing Number](https://leetcode.com/problems/missing-number/) - Easy (article name: Find the Missing Number) - Microsoft | 60-day plan: Day 6, 8
- [ ] [#442 Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) - Medium
- [ ] [#448 Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/) - Easy - 60-day plan: Day 6
- [ ] [#645 Set Mismatch](https://leetcode.com/problems/set-mismatch/) - Easy - 60-day plan: Day 6

## 6. In-place Reversal of a LinkedList

Folder: `dsa/linked-list/` | Same pattern as [patterns.md](patterns.md) #7

- [ ] [#206 Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) - Easy - 60-day plan: Day 7
- [ ] [#92 Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) - Medium (article name: Reverse a Sublist)
- [ ] [#25 Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) - Hard - 60-day plan: Day 7
- [ ] [#61 Rotate List](https://leetcode.com/problems/rotate-list/) - Medium
- [ ] [#234 Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) - Easy - 60-day plan: Day 1

## 7. Breadth-First Search (BFS)

Folder: `dsa/graphs/` | Same pattern as [patterns.md](patterns.md) #9

- [ ] [#102 Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) - Medium - Meta | 60-day plan: Day 22, 31
- [ ] [#111 Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/) - Easy
- [ ] [#199 Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) - Medium
- [ ] [#127 Word Ladder](https://leetcode.com/problems/word-ladder/) - Hard - Amazon, Meta | 60-day plan: Day 23
- [ ] [#994 Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) - Medium - Amazon, Meta | 60-day plan: Day 21

## 8. Depth-First Search (DFS)

Folder: `dsa/graphs/` | Same pattern as [patterns.md](patterns.md) #10

- [ ] [#112 Path Sum](https://leetcode.com/problems/path-sum/) - Easy
- [ ] [#200 Number of Islands](https://leetcode.com/problems/number-of-islands/) - Medium
- [ ] [#133 Clone Graph](https://leetcode.com/problems/clone-graph/) - Medium
- [ ] [#130 Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) - Medium
- [ ] [#79 Word Search](https://leetcode.com/problems/word-search/) - Medium - Google, Airbnb | 60-day plan: Day 37

## 9. Backtracking

Folder: `dsa/backtracking/` | Same pattern as [patterns.md](patterns.md) #11

- [ ] [#51 N-Queens](https://leetcode.com/problems/n-queens/) - Hard - Google | 60-day plan: Day 38
- [ ] [#37 Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) - Hard - Google | 60-day plan: Day 38
- [ ] [#79 Word Search](https://leetcode.com/problems/word-search/) - Medium - Google, Airbnb | 60-day plan: Day 37
- [ ] [#39 Combination Sum](https://leetcode.com/problems/combination-sum/) - Medium - Airbnb | 60-day plan: Day 36
- [ ] [#90 Subsets II](https://leetcode.com/problems/subsets-ii/) - Medium

## 10. Dynamic Programming

Folder: `dsa/dp/` | Same pattern as [patterns.md](patterns.md) #19

- [ ] [#198 House Robber](https://leetcode.com/problems/house-robber/) - Medium
- [ ] [#5 Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) - Medium
- [ ] [#322 Coin Change](https://leetcode.com/problems/coin-change/) - Medium - Google | 60-day plan: Day 42, 49
- [ ] [#300 Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) - Medium - Google | 60-day plan: Day 43, 49
- [ ] [#72 Edit Distance](https://leetcode.com/problems/edit-distance/) - Medium - Google, Microsoft | 60-day plan: Day 45, 49

## 11. Greedy

Folder: `dsa/greedy/` | Same pattern as [patterns.md](patterns.md) #21

- [ ] [#55 Jump Game](https://leetcode.com/problems/jump-game/) - Medium
- [ ] [#134 Gas Station](https://leetcode.com/problems/gas-station/) - Medium - Netflix, Uber | 60-day plan: Day 54
- [ ] [#452 Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) - Medium - Netflix, Airbnb | 60-day plan: Day 12, 19
- [ ] [#763 Partition Labels](https://leetcode.com/problems/partition-labels/) - Medium
- [ ] [#435 Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) - Medium - Netflix | 60-day plan: Day 12

## 12. Topological Sort

Folder: `dsa/graphs/` | Same pattern as [patterns.md](patterns.md) #20

- [ ] [#207 Course Schedule](https://leetcode.com/problems/course-schedule/) - Medium - Google | 60-day plan: Day 25
- [ ] [#269 Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) - Hard (Premium)
- [ ] [#444 Sequence Reconstruction](https://leetcode.com/problems/sequence-reconstruction/) - Medium (Premium)
- [ ] [#310 Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/) - Medium
- [ ] [#1136 Parallel Courses](https://leetcode.com/problems/parallel-courses/) - Medium (Premium)

## 13. Binary Search

Folder: `dsa/binary-search/` | Same pattern as [patterns.md](patterns.md) #12

- [ ] [#704 Binary Search](https://leetcode.com/problems/binary-search/) - Easy
- [ ] [#33 Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) - Medium - Google, Apple | 60-day plan: Day 51
- [ ] [#153 Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) - Medium - Google | 60-day plan: Day 51
- [ ] [#875 Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) - Medium - Google | 60-day plan: Day 52
- [ ] [#4 Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) - Hard - Google, Apple

## 14. Trie Based

Folder: `dsa/trie/` | New pattern, no counterpart in patterns.md

- [ ] [#208 Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) - Medium (article name: Implement Trie)
- [ ] [#212 Word Search II](https://leetcode.com/problems/word-search-ii/) - Hard
- [ ] [#648 Replace Words](https://leetcode.com/problems/replace-words/) - Medium
- [ ] [#720 Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary/) - Medium
- [ ] [#745 Prefix and Suffix Search](https://leetcode.com/problems/prefix-and-suffix-search/) - Hard

## 15. Union Find (Disjoint Set)

Folder: `dsa/graphs/` | Same pattern as [patterns.md](patterns.md) #20

- [ ] [#261 Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/) - Medium (Premium)
- [ ] [#323 Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) - Medium (Premium) (article name: Number of Connected Components)
- [ ] [#721 Accounts Merge](https://leetcode.com/problems/accounts-merge/) - Medium - Google, Uber | 60-day plan: Day 26
- [ ] [#684 Redundant Connection](https://leetcode.com/problems/redundant-connection/) - Medium - Uber | 60-day plan: Day 26
- [ ] [#128 Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) - Medium
