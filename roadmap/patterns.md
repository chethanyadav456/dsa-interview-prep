# DSA Patterns Tracker

22 core patterns with representative problems, from [Company-wise DSA patterns](https://jugaldb.substack.com/p/company-wise-dsa-patterns). Tick a box when solved; save the solution in the matching `dsa/<folder>/`.

Company tags show which of the 8 companies list that problem in their curated set (see [companies.md](companies.md)). A problem can sit under two patterns (for example Missing Number is both Cyclic Sort and XOR).

## Index

| # | Pattern | Repo folder | Problems | Core pattern for |
|---|---------|-------------|----------|------------------|
| 1 | [Fast & Slow Pointer](#1-fast--slow-pointer) | `dsa/linked-list/` | 4 | - |
| 2 | [Overlapping Intervals](#2-overlapping-intervals) | `dsa/intervals/` | 5 | Netflix, Airbnb |
| 3 | [Prefix Sum](#3-prefix-sum) | `dsa/arrays-hashing/` | 5 | - |
| 4 | [Sliding Window](#4-sliding-window) | `dsa/sliding-window/` | 13 | Amazon, Meta |
| 5 | [Two Pointers](#5-two-pointers) | `dsa/two-pointers/` | 6 | Amazon, Apple |
| 6 | [Cyclic Sort (Index-Based)](#6-cyclic-sort-index-based) | `dsa/arrays-hashing/` | 4 | - |
| 7 | [Reverse Linked List (In-place)](#7-reverse-linked-list-in-place) | `dsa/linked-list/` | 3 | - |
| 8 | [Matrix Manipulation](#8-matrix-manipulation) | `dsa/arrays-hashing/` | 4 | Apple |
| 9 | [Breadth-First Search (BFS)](#9-breadth-first-search-bfs) | `dsa/graphs/` | 4 | Amazon, Meta, Airbnb |
| 10 | [Depth-First Search (DFS)](#10-depth-first-search-dfs) | `dsa/graphs/` | 5 | - |
| 11 | [Backtracking](#11-backtracking) | `dsa/backtracking/` | 7 | Google, Airbnb |
| 12 | [Modified Binary Search](#12-modified-binary-search) | `dsa/binary-search/` | 9 | Google, Microsoft, Apple |
| 13 | [Bitwise XOR](#13-bitwise-xor) | `dsa/bit-manipulation/` | 5 | Microsoft |
| 14 | [Top K Elements](#14-top-k-elements) | `dsa/heap/` | 4 | Netflix, Uber |
| 15 | [K-way Merge](#15-k-way-merge) | `dsa/heap/` | 4 | - |
| 16 | [Two Heaps](#16-two-heaps) | `dsa/heap/` | 3 | Netflix, Uber |
| 17 | [Monotonic Stack](#17-monotonic-stack) | `dsa/stack/` | 6 | Apple |
| 18 | [Trees](#18-trees) | `dsa/trees/` | 27 | Meta, Microsoft |
| 19 | [Dynamic Programming](#19-dynamic-programming) | `dsa/dp/` | 39 | Google, Microsoft |
| 20 | [Graphs](#20-graphs) | `dsa/graphs/` | 12 | Google, Uber |
| 21 | [Greedy](#21-greedy) | `dsa/greedy/` | 7 | Netflix, Uber |
| 22 | [Design Data Structure](#22-design-data-structure) | `dsa/design/` | 6 | Amazon, Meta, Airbnb |

## 1. Fast & Slow Pointer

Detect cycles, find middle, palindromes.

Folder: `dsa/linked-list/`

- [ ] [#142 Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) - Medium
- [ ] [#19 Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) - Medium
- [ ] [#287 Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) - Medium
- [ ] [#234 Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) - Easy

## 2. Overlapping Intervals

Sort/merge by start/end.

Folder: `dsa/intervals/` | Core pattern for: Netflix, Airbnb

- [ ] [#56 Merge Intervals](https://leetcode.com/problems/merge-intervals/) - Medium - Netflix, Airbnb
- [ ] [#57 Insert Interval](https://leetcode.com/problems/insert-interval/) - Medium - Netflix, Airbnb
- [ ] [#731 My Calendar II](https://leetcode.com/problems/my-calendar-ii/) - Medium
- [ ] [#452 Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) - Medium - Netflix, Airbnb
- [ ] [#435 Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) - Medium - Netflix

## 3. Prefix Sum

Cumulative sums/products for range queries.

Folder: `dsa/arrays-hashing/`

- [ ] [#1991 Find the Middle Index in Array](https://leetcode.com/problems/find-the-middle-index-in-array/) - Easy
- [ ] [#238 Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) - Medium
- [ ] [#152 Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) - Medium
- [ ] [#2270 Number of Ways to Split Array](https://leetcode.com/problems/number-of-ways-to-split-array/) - Medium
- [ ] [#304 Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/) - Medium

## 4. Sliding Window

Move a subarray/substring, often O(n).

Folder: `dsa/sliding-window/` | Core pattern for: Amazon, Meta

**Fixed size**

- [ ] [#643 Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) - Easy
- [ ] [#1343 Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/) - Medium
- [ ] [#187 Repeated DNA Sequences](https://leetcode.com/problems/repeated-dna-sequences/) - Medium
- [ ] [#567 Permutation in String](https://leetcode.com/problems/permutation-in-string/) - Medium - Meta
- [ ] [#2653 Sliding Subarray Beauty](https://leetcode.com/problems/sliding-subarray-beauty/) - Medium
- [ ] [#239 Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) - Hard - Amazon

**Variable size**

- [ ] [#3 Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) - Medium - Amazon, Meta
- [ ] [#209 Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) - Medium - Amazon
- [ ] [#713 Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/) - Medium
- [ ] [#1004 Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/) - Medium
- [ ] [#904 Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/) - Medium
- [ ] [#1248 Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/) - Medium
- [ ] [#76 Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) - Hard - Amazon, Meta

## 5. Two Pointers

Two indices advancing at different rates.

Folder: `dsa/two-pointers/` | Core pattern for: Amazon, Apple

- [ ] [#167 Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) - Medium - Amazon
- [ ] [#75 Sort Colors](https://leetcode.com/problems/sort-colors/) - Medium - Amazon
- [ ] [#31 Next Permutation](https://leetcode.com/problems/next-permutation/) - Medium
- [ ] [#948 Bag of Tokens](https://leetcode.com/problems/bag-of-tokens/) - Medium
- [ ] [#11 Container With Most Water](https://leetcode.com/problems/container-with-most-water/) - Medium - Amazon, Apple
- [ ] [#42 Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) - Hard - Amazon, Apple

## 6. Cyclic Sort (Index-Based)

Consecutive ranges placed at correct indexes.

Folder: `dsa/arrays-hashing/`

- [ ] [#268 Missing Number](https://leetcode.com/problems/missing-number/) - Easy - Microsoft
- [ ] [#448 Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/) - Easy
- [ ] [#645 Set Mismatch](https://leetcode.com/problems/set-mismatch/) - Easy
- [ ] [#41 First Missing Positive](https://leetcode.com/problems/first-missing-positive/) - Hard

## 7. Reverse Linked List (In-place)

In-place list manipulations.

Folder: `dsa/linked-list/`

- [ ] [#206 Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) - Easy
- [ ] [#25 Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) - Hard
- [ ] [#24 Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) - Medium

## 8. Matrix Manipulation

2D traversal / transforms.

Folder: `dsa/arrays-hashing/` | Core pattern for: Apple

- [ ] [#48 Rotate Image](https://leetcode.com/problems/rotate-image/) - Medium - Apple
- [ ] [#54 Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) - Medium - Apple
- [ ] [#73 Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) - Medium - Apple
- [ ] [#289 Game of Life](https://leetcode.com/problems/game-of-life/) - Medium - Apple

## 9. Breadth-First Search (BFS)

Level-order via queue, shortest paths.

Folder: `dsa/graphs/` | Core pattern for: Amazon, Meta, Airbnb

- [ ] [#1091 Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) - Medium - Amazon, Airbnb
- [ ] [#994 Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) - Medium - Amazon, Meta
- [ ] [#1162 As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/) - Medium - Amazon, Meta, Airbnb
- [ ] [#127 Word Ladder](https://leetcode.com/problems/word-ladder/) - Hard - Amazon, Meta

## 10. Depth-First Search (DFS)

Deep exploration + backtrack.

Folder: `dsa/graphs/`

- [ ] [#1254 Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/) - Medium
- [ ] [#1034 Coloring A Border](https://leetcode.com/problems/coloring-a-border/) - Medium
- [ ] [#1020 Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/) - Medium
- [ ] [#1376 Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/) - Medium
- [ ] [#802 Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/) - Medium

## 11. Backtracking

Explore all potential candidates.

Folder: `dsa/backtracking/` | Core pattern for: Google, Airbnb

- [ ] [#47 Permutations II](https://leetcode.com/problems/permutations-ii/) - Medium
- [ ] [#39 Combination Sum](https://leetcode.com/problems/combination-sum/) - Medium - Airbnb
- [ ] [#22 Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) - Medium - Airbnb
- [ ] [#51 N-Queens](https://leetcode.com/problems/n-queens/) - Hard - Google
- [ ] [#37 Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) - Hard - Google
- [ ] [#131 Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) - Medium - Google, Airbnb
- [ ] [#79 Word Search](https://leetcode.com/problems/word-search/) - Medium - Google, Airbnb

## 12. Modified Binary Search

Variants on rotated/specialized arrays.

Folder: `dsa/binary-search/` | Core pattern for: Google, Microsoft, Apple

- [ ] [#33 Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) - Medium - Google, Apple
- [ ] [#153 Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) - Medium - Google
- [ ] [#162 Find Peak Element](https://leetcode.com/problems/find-peak-element/) - Medium - Microsoft
- [ ] [#540 Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/) - Medium - Microsoft
- [ ] [#1870 Minimum Speed to Arrive on Time](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/) - Medium
- [ ] [#1011 Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) - Medium - Google
- [ ] [#875 Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) - Medium - Google
- [ ] [#1095 Find in Mountain Array](https://leetcode.com/problems/find-in-mountain-array/) - Hard
- [ ] [#4 Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) - Hard - Google, Apple

## 13. Bitwise XOR

Pairing/cancellation tricks.

Folder: `dsa/bit-manipulation/` | Core pattern for: Microsoft

- [ ] [#268 Missing Number](https://leetcode.com/problems/missing-number/) - Easy - Microsoft
- [ ] [#137 Single Number II](https://leetcode.com/problems/single-number-ii/) - Medium
- [ ] [#260 Single Number III](https://leetcode.com/problems/single-number-iii/) - Medium - Microsoft
- [ ] [#2433 Find The Original Array of Prefix Xor](https://leetcode.com/problems/find-the-original-array-of-prefix-xor/) - Medium
- [ ] [#1310 XOR Queries of a Subarray](https://leetcode.com/problems/xor-queries-of-a-subarray/) - Medium

## 14. Top K Elements

Heaps / quickselect.

Folder: `dsa/heap/` | Core pattern for: Netflix, Uber

- [ ] [#347 Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) - Medium - Netflix, Uber
- [ ] [#215 Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) - Medium - Netflix, Uber
- [ ] [#264 Ugly Number II](https://leetcode.com/problems/ugly-number-ii/) - Medium
- [ ] [#973 K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) - Medium - Netflix, Uber

## 15. K-way Merge

Heap to merge multiple sorted inputs.

Folder: `dsa/heap/`

- [ ] [#373 Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) - Medium
- [ ] [#378 Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) - Medium
- [ ] [#23 Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) - Hard
- [ ] [#632 Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) - Hard

## 16. Two Heaps

Maintain dynamic medians/extremes.

Folder: `dsa/heap/` | Core pattern for: Netflix, Uber

- [ ] [#295 Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) - Hard - Netflix, Uber
- [ ] [#480 Sliding Window Median](https://leetcode.com/problems/sliding-window-median/) - Hard - Netflix
- [ ] [#502 IPO](https://leetcode.com/problems/ipo/) - Hard - Uber

## 17. Monotonic Stack

Range queries via inc/dec stack.

Folder: `dsa/stack/` | Core pattern for: Apple

- [ ] [#503 Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) - Medium
- [ ] [#1019 Next Greater Node In Linked List](https://leetcode.com/problems/next-greater-node-in-linked-list/) - Medium
- [ ] [#739 Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) - Medium - Apple
- [ ] [#901 Online Stock Span](https://leetcode.com/problems/online-stock-span/) - Medium
- [ ] [#962 Maximum Width Ramp](https://leetcode.com/problems/maximum-width-ramp/) - Medium
- [ ] [#84 Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) - Hard - Apple

## 18. Trees

Level order, construction, height, root-to-leaf paths, ancestors.

Folder: `dsa/trees/` | Core pattern for: Meta, Microsoft

**Level order (BFS in trees)**

- [ ] [#102 Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) - Medium - Meta
- [ ] [#103 Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) - Medium - Meta
- [ ] [#1609 Even Odd Tree](https://leetcode.com/problems/even-odd-tree/) - Medium
- [ ] [#2415 Reverse Odd Levels of Binary Tree](https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/) - Medium
- [ ] [#1302 Deepest Leaves Sum](https://leetcode.com/problems/deepest-leaves-sum/) - Medium
- [ ] [#863 All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/) - Medium - Meta
- [ ] [#662 Maximum Width of Binary Tree](https://leetcode.com/problems/maximum-width-of-binary-tree/) - Medium
- [ ] [#623 Add One Row to Tree](https://leetcode.com/problems/add-one-row-to-tree/) - Medium

**Construction**

- [ ] [#105 Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) - Medium
- [ ] [#106 Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) - Medium
- [ ] [#654 Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree/) - Medium
- [ ] [#1008 Construct Binary Search Tree from Preorder Traversal](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/) - Medium

**Height**

- [ ] [#104 Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) - Easy
- [ ] [#110 Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) - Easy
- [ ] [#543 Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) - Easy - Microsoft
- [ ] [#111 Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/) - Easy

**Root-to-leaf paths**

- [ ] [#257 Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/) - Easy
- [ ] [#113 Path Sum II](https://leetcode.com/problems/path-sum-ii/) - Medium
- [ ] [#129 Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/) - Medium
- [ ] [#988 Smallest String Starting From Leaf](https://leetcode.com/problems/smallest-string-starting-from-leaf/) - Medium
- [ ] [#1080 Insufficient Nodes in Root to Leaf Paths](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/) - Medium
- [ ] [#1457 Pseudo-Palindromic Paths in a Binary Tree](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/) - Medium
- [ ] [#124 Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) - Hard - Meta

**Ancestors**

- [ ] [#236 Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) - Medium - Microsoft
- [ ] [#1026 Maximum Difference Between Node and Ancestor](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/) - Medium
- [ ] [#1123 Lowest Common Ancestor of Deepest Leaves](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/) - Medium
- [ ] [#1483 Kth Ancestor of a Tree Node](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/) - Hard

## 19. Dynamic Programming

States, transitions, base cases by family.

Folder: `dsa/dp/` | Core pattern for: Google, Microsoft

**Take / not take (0/1)**

- [ ] [#213 House Robber II](https://leetcode.com/problems/house-robber-ii/) - Medium
- [ ] [#494 Target Sum](https://leetcode.com/problems/target-sum/) - Medium
- [ ] [#416 Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) - Medium - Microsoft
- [ ] [#474 Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/) - Medium
- [ ] [#1049 Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/) - Medium

**Unbounded (coin-change style)**

- [ ] [#322 Coin Change](https://leetcode.com/problems/coin-change/) - Medium - Google
- [ ] [#518 Coin Change II](https://leetcode.com/problems/coin-change-ii/) - Medium
- [ ] [#279 Perfect Squares](https://leetcode.com/problems/perfect-squares/) - Medium
- [ ] [#983 Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/) - Medium

**LIS family**

- [ ] [#300 Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) - Medium - Google
- [ ] [#368 Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/) - Medium
- [ ] [#646 Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/) - Medium
- [ ] [#673 Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) - Medium
- [ ] [#1048 Longest String Chain](https://leetcode.com/problems/longest-string-chain/) - Medium

**Grids**

- [ ] [#63 Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) - Medium
- [ ] [#64 Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) - Medium
- [ ] [#120 Triangle](https://leetcode.com/problems/triangle/) - Medium
- [ ] [#931 Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/) - Medium
- [ ] [#221 Maximal Square](https://leetcode.com/problems/maximal-square/) - Medium
- [ ] [#741 Cherry Pickup](https://leetcode.com/problems/cherry-pickup/) - Hard
- [ ] [#174 Dungeon Game](https://leetcode.com/problems/dungeon-game/) - Hard

**Strings**

- [ ] [#1143 Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) - Medium - Microsoft
- [ ] [#516 Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) - Medium
- [ ] [#647 Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) - Medium
- [ ] [#5 Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) - Medium
- [ ] [#72 Edit Distance](https://leetcode.com/problems/edit-distance/) - Medium - Google, Microsoft
- [ ] [#712 Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/) - Medium
- [ ] [#115 Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) - Hard - Google
- [ ] [#1092 Shortest Common Supersequence ](https://leetcode.com/problems/shortest-common-supersequence/) - Hard
- [ ] [#44 Wildcard Matching](https://leetcode.com/problems/wildcard-matching/) - Hard

**Stocks**

- [ ] [#122 Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) - Medium
- [ ] [#123 Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) - Hard
- [ ] [#188 Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) - Hard
- [ ] [#309 Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) - Medium
- [ ] [#714 Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) - Medium

**Partition DP (MCM)**

- [ ] [#1043 Partition Array for Maximum Sum](https://leetcode.com/problems/partition-array-for-maximum-sum/) - Medium
- [ ] [#312 Burst Balloons](https://leetcode.com/problems/burst-balloons/) - Hard
- [ ] [#1547 Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/) - Hard
- [ ] [#132 Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/) - Hard

## 20. Graphs

Topological sort, union-find, shortest path and spanning tree algorithms.

Folder: `dsa/graphs/` | Core pattern for: Google, Uber

**Topological sort**

- [ ] [#207 Course Schedule](https://leetcode.com/problems/course-schedule/) - Medium - Google
- [ ] [#210 Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) - Medium
- [ ] [#1591 Strange Printer II](https://leetcode.com/problems/strange-printer-ii/) - Hard
- [ ] [#444 Sequence Reconstruction](https://leetcode.com/problems/sequence-reconstruction/) - Medium

**Union-Find**

- [ ] [#1319 Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) - Medium
- [ ] [#684 Redundant Connection](https://leetcode.com/problems/redundant-connection/) - Medium - Uber
- [ ] [#721 Accounts Merge](https://leetcode.com/problems/accounts-merge/) - Medium - Google, Uber
- [ ] [#990 Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/) - Medium

**Algorithms (Kruskal, Dijkstra/BFS, Floyd-Warshall, Bellman-Ford/Dijkstra)**

- [ ] [#1584 Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) - Medium
- [ ] [#787 Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) - Medium - Google, Uber
- [ ] [#1334 Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/) - Medium
- [ ] [#743 Network Delay Time](https://leetcode.com/problems/network-delay-time/) - Medium - Google, Uber

## 21. Greedy

Locally optimal choices.

Folder: `dsa/greedy/` | Core pattern for: Netflix, Uber

- [ ] [#45 Jump Game II](https://leetcode.com/problems/jump-game-ii/) - Medium - Netflix, Uber
- [ ] [#134 Gas Station](https://leetcode.com/problems/gas-station/) - Medium - Netflix, Uber
- [ ] [#948 Bag of Tokens](https://leetcode.com/problems/bag-of-tokens/) - Medium
- [ ] [#881 Boats to Save People](https://leetcode.com/problems/boats-to-save-people/) - Medium - Netflix
- [ ] [#376 Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/) - Medium
- [ ] [#1094 Car Pooling](https://leetcode.com/problems/car-pooling/) - Medium - Uber
- [ ] [#135 Candy](https://leetcode.com/problems/candy/) - Hard - Netflix

## 22. Design Data Structure

Custom DS for ops/updates/memory.

Folder: `dsa/design/` | Core pattern for: Amazon, Meta, Airbnb

- [ ] [#355 Design Twitter](https://leetcode.com/problems/design-twitter/) - Medium - Meta, Airbnb
- [ ] [#1472 Design Browser History](https://leetcode.com/problems/design-browser-history/) - Medium - Amazon, Meta
- [ ] [#641 Design Circular Deque](https://leetcode.com/problems/design-circular-deque/) - Medium
- [ ] [#1146 Snapshot Array](https://leetcode.com/problems/snapshot-array/) - Medium - Amazon, Airbnb
- [ ] [#146 LRU Cache](https://leetcode.com/problems/lru-cache/) - Medium - Amazon, Meta, Airbnb
- [ ] [#460 LFU Cache](https://leetcode.com/problems/lfu-cache/) - Hard - Amazon
