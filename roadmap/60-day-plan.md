# 60-Day DSA Plan

Structured 60-day plan from [Company-wise DSA patterns](https://jugaldb.substack.com/p/company-wise-dsa-patterns), built on the 22 patterns in [patterns.md](patterns.md) and the company lists in [companies.md](companies.md).

Start date: ____  |  Target companies: ____

## Daily routine (60-90 min)

1. 10-15 min: skim the pattern theory and template ([patterns.md](patterns.md), [pattern-cheatsheet.md](pattern-cheatsheet.md)).
2. 45-60 min: solve 2-4 problems from the day's list.
3. 5-10 min: notes. Pattern, brute force to optimized, pitfalls (use `templates/problem.md`).

## Phases

| Phase | Days | Patterns |
|-------|------|----------|
| Phase 1 | 1-10 | Fast & Slow Pointer, Prefix Sum, Sliding Window, Two Pointers, Cyclic Sort (Index-Based), Reverse Linked List (In-place), Bitwise XOR |
| Phase 2 | 11-20 | Overlapping Intervals, Matrix Manipulation, Top K Elements, K-way Merge, Monotonic Stack |
| Phase 3 | 21-30 | Breadth-First Search (BFS), Depth-First Search (DFS), Graphs |
| Phase 4 | 31-40 | Trees, Backtracking, Depth-First Search (DFS) |
| Phase 5 | 41-50 | Dynamic Programming |
| Phase 6 | 51-60 | Modified Binary Search, Top K Elements, Two Heaps, Greedy, Design Data Structure |

## Phase 1: Arrays, Strings & Pointer Fundamentals (Days 1-10)

Patterns: Fast & Slow Pointer (1), Prefix Sum (3), Sliding Window (4), Two Pointers (5), Cyclic Sort (Index-Based) (6), Reverse Linked List (In-place) (7), Bitwise XOR (13)

### Day 1: Fast & Slow Pointer

Goal: Get comfortable with cycle detection and middle of list.

- [ ] [#142 Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) - Medium
- [ ] [#287 Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) - Medium
- [ ] [#234 Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) - Easy

### Day 2: Two Pointers Basics

Goal: Learn moving left/right pointers on sorted arrays.

- [ ] [#167 Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) - Medium - Amazon
- [ ] [#11 Container With Most Water](https://leetcode.com/problems/container-with-most-water/) - Medium - Amazon, Apple
- [ ] [#75 Sort Colors](https://leetcode.com/problems/sort-colors/) - Medium - Amazon

### Day 3: Fixed-size Sliding Window

Goal: Master windows of size K.

- [ ] Maximum Sum Subarray of Size K (not on LeetCode, practice with Maximum Average Subarray I)
- [ ] [#643 Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) - Easy
- [ ] [#1343 Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/) - Medium
- [ ] [#2653 Sliding Subarray Beauty](https://leetcode.com/problems/sliding-subarray-beauty/) - Medium

### Day 4: Variable-size Sliding Window

Goal: Grow/shrink window to satisfy a condition.

- [ ] [#3 Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) - Medium - Amazon, Meta
- [ ] [#209 Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) - Medium - Amazon
- [ ] [#713 Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/) - Medium

### Day 5: Prefix Sum

Goal: Train the brain to think cumulative.

- [ ] [#1991 Find the Middle Index in Array](https://leetcode.com/problems/find-the-middle-index-in-array/) - Easy
- [ ] [#238 Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) - Medium
- [ ] [#2270 Number of Ways to Split Array](https://leetcode.com/problems/number-of-ways-to-split-array/) - Medium

### Day 6: Cyclic Sort

Goal: Learn index-based placement.

- [ ] [#268 Missing Number](https://leetcode.com/problems/missing-number/) - Easy - Microsoft
- [ ] [#448 Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/) - Easy
- [ ] [#41 First Missing Positive](https://leetcode.com/problems/first-missing-positive/) - Hard
- [ ] [#645 Set Mismatch](https://leetcode.com/problems/set-mismatch/) - Easy

### Day 7: Reverse Linked List & Variants

Goal: In-place linked list manipulation.

- [ ] [#206 Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) - Easy
- [ ] [#24 Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) - Medium
- [ ] [#25 Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) - Hard

### Day 8: Bitwise XOR Tricks

Goal: See XOR as pair cancel.

- [ ] [#268 Missing Number](https://leetcode.com/problems/missing-number/) - Easy - Microsoft
- [ ] [#136 Single Number](https://leetcode.com/problems/single-number/) - Easy - Microsoft
- [ ] [#260 Single Number III](https://leetcode.com/problems/single-number-iii/) - Medium - Microsoft

### Day 9: Amazon Day: Sliding Window + Two Pointers

Goal: Company-tagged revision. Pick 3-4 from the Amazon list.

- [ ] [#3 Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) - Medium - Amazon, Meta
- [ ] [#209 Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) - Medium - Amazon
- [ ] [#11 Container With Most Water](https://leetcode.com/problems/container-with-most-water/) - Medium - Amazon, Apple
- [ ] [#42 Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) - Hard - Amazon, Apple

### Day 10: Review & Speed Round

Goal: Consolidate patterns 1, 3, 4, 5, 6, 7, 13.

- [ ] Re-solve any 2 problems you struggled with from Days 1-9 under a timer (20-25 min each)
- [ ] Write 1 page of templates for sliding window and two pointers

## Phase 2: Intervals, Matrices, Stacks & Heaps (Days 11-20)

Patterns: Overlapping Intervals (2), Matrix Manipulation (8), Top K Elements (14), K-way Merge (15), Monotonic Stack (17)

### Day 11: Overlapping Intervals I

Goal: Sorting + merging intervals.

- [ ] [#56 Merge Intervals](https://leetcode.com/problems/merge-intervals/) - Medium - Netflix, Airbnb
- [ ] [#57 Insert Interval](https://leetcode.com/problems/insert-interval/) - Medium - Netflix, Airbnb

### Day 12: Overlapping Intervals II + Greedy Feel

Goal: Use interval structure to count/remove.

- [ ] [#435 Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) - Medium - Netflix
- [ ] [#452 Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) - Medium - Netflix, Airbnb

### Day 13: Matrix Manipulation I

Goal: Classic matrix transforms.

- [ ] [#48 Rotate Image](https://leetcode.com/problems/rotate-image/) - Medium - Apple
- [ ] [#73 Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) - Medium - Apple

### Day 14: Matrix Traversal

Goal: Visiting all cells in patterns.

- [ ] [#54 Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) - Medium - Apple
- [ ] [#289 Game of Life](https://leetcode.com/problems/game-of-life/) - Medium - Apple

### Day 15: Monotonic Stack Basics

Goal: Understand increasing/decreasing stack.

- [ ] [#503 Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) - Medium
- [ ] [#901 Online Stock Span](https://leetcode.com/problems/online-stock-span/) - Medium

### Day 16: Monotonic Stack Harder

Goal: Range aggregation with stacks.

- [ ] [#739 Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) - Medium - Apple
- [ ] [#84 Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) - Hard - Apple

### Day 17: Top K Elements

Goal: Min-heap / max-heap for top k.

- [ ] [#347 Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) - Medium - Netflix, Uber
- [ ] [#215 Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) - Medium - Netflix, Uber

### Day 18: K-way Merge

Goal: Merge multiple sorted inputs.

- [ ] [#23 Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) - Hard
- [ ] [#378 Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) - Medium

### Day 19: Netflix/Airbnb Day: Intervals + Top K

Goal: Pick 3-4 from the Netflix / Airbnb lists.

- [ ] [#56 Merge Intervals](https://leetcode.com/problems/merge-intervals/) - Medium - Netflix, Airbnb
- [ ] [#57 Insert Interval](https://leetcode.com/problems/insert-interval/) - Medium - Netflix, Airbnb
- [ ] [#452 Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) - Medium - Netflix, Airbnb
- [ ] [#347 Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) - Medium - Netflix, Uber
- [ ] [#973 K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) - Medium - Netflix, Uber

### Day 20: Review Day

Goal: Redo one problem each of Intervals, Matrix, Monotonic Stack, Top K under a timer.

- [ ] Redo 1 Interval, 1 Matrix, 1 Monotonic Stack, 1 Top-K problem under a timer
- [ ] Update notes: when do I reach for heap vs stack vs sorting?

## Phase 3: BFS, DFS & Graphs (Days 21-30)

Patterns: Breadth-First Search (BFS) (9), Depth-First Search (DFS) (10), Graphs (20)

### Day 21: BFS on Grids

Goal: Grid BFS and shortest path.

- [ ] [#1091 Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) - Medium - Amazon, Airbnb
- [ ] [#994 Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) - Medium - Amazon, Meta

### Day 22: BFS: Multi-source & Distance

Goal: Multi-source BFS and level-order mindset.

- [ ] [#1162 As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/) - Medium - Amazon, Meta, Airbnb
- [ ] [#102 Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) - Medium - Meta

### Day 23: BFS on Word Graphs

Goal: Word graphs plus a second graph problem.

- [ ] [#127 Word Ladder](https://leetcode.com/problems/word-ladder/) - Hard - Amazon, Meta
- [ ] [#743 Network Delay Time](https://leetcode.com/problems/network-delay-time/) - Medium - Google, Uber

### Day 24: DFS on Grids

Goal: Flood-fill style DFS.

- [ ] [#1020 Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/) - Medium
- [ ] [#1254 Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/) - Medium
- [ ] [#1034 Coloring A Border](https://leetcode.com/problems/coloring-a-border/) - Medium

### Day 25: Graphs: Topological Sort

Goal: Dependency ordering.

- [ ] [#207 Course Schedule](https://leetcode.com/problems/course-schedule/) - Medium - Google
- [ ] [#210 Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) - Medium

### Day 26: Graphs: Union-Find

Goal: Connectivity and merging.

- [ ] [#684 Redundant Connection](https://leetcode.com/problems/redundant-connection/) - Medium - Uber
- [ ] [#721 Accounts Merge](https://leetcode.com/problems/accounts-merge/) - Medium - Google, Uber

### Day 27: Shortest Path Algorithms

Goal: Pick 2.

- [ ] [#787 Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) - Medium - Google, Uber
- [ ] [#743 Network Delay Time](https://leetcode.com/problems/network-delay-time/) - Medium - Google, Uber
- [ ] [#1334 Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/) - Medium

### Day 28: Uber Day: Graphs + Greedy + Top K

Goal: Pick 3-4 from the Uber list.

- [ ] [#787 Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) - Medium - Google, Uber
- [ ] [#743 Network Delay Time](https://leetcode.com/problems/network-delay-time/) - Medium - Google, Uber
- [ ] [#973 K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) - Medium - Netflix, Uber
- [ ] [#215 Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) - Medium - Netflix, Uber

### Day 29: Mixed BFS/DFS Practice

Goal: Quickly decide BFS vs DFS.

- [ ] 1 grid BFS, 1 grid DFS, 1 graph topo-sort or union-find problem you have not done yet

### Day 30: Mini Contest

Goal: Strict timing.

- [ ] Solve 3 untouched problems from the BFS/DFS/Graphs lists in 45-60 min total
- [ ] Spend 20 min understanding the cleanest editorial for the hardest one

## Phase 4: Trees & Backtracking (Days 31-40)

Patterns: Trees (18), Backtracking (11), Depth-First Search (DFS) (10)

### Day 31: Tree Basics & Level Order

Goal: BFS on trees.

- [ ] [#102 Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) - Medium - Meta
- [ ] [#103 Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) - Medium - Meta

### Day 32: Tree Height & Diameter

Goal: Height-based recursion.

- [ ] [#104 Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) - Easy
- [ ] [#543 Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) - Easy - Microsoft

### Day 33: Tree Paths

Goal: Root-to-leaf and path sums.

- [ ] [#257 Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/) - Easy
- [ ] [#113 Path Sum II](https://leetcode.com/problems/path-sum-ii/) - Medium
- [ ] [#124 Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) - Hard - Meta

### Day 34: LCA & Ancestor Problems

Goal: Ancestor reasoning.

- [ ] [#236 Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) - Medium - Microsoft
- [ ] [#1026 Maximum Difference Between Node and Ancestor](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/) - Medium

### Day 35: Tree Construction

Goal: Build trees from traversals.

- [ ] [#105 Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) - Medium
- [ ] [#106 Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) - Medium

### Day 36: Backtracking Basics

Goal: Choose, explore, unchoose.

- [ ] [#22 Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) - Medium - Airbnb
- [ ] [#39 Combination Sum](https://leetcode.com/problems/combination-sum/) - Medium - Airbnb

### Day 37: Backtracking on Grids & Strings

Goal: Grid and string search.

- [ ] [#79 Word Search](https://leetcode.com/problems/word-search/) - Medium - Google, Airbnb
- [ ] [#131 Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) - Medium - Google, Airbnb

### Day 38: Hard Backtracking

Goal: Constraint-heavy search.

- [ ] [#51 N-Queens](https://leetcode.com/problems/n-queens/) - Hard - Google
- [ ] [#37 Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) - Hard - Google

### Day 39: Meta / Microsoft Day: Trees + Backtracking

Goal: Pick 3-4; optionally mix DP + recursion.

- [ ] [#863 All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/) - Medium - Meta
- [ ] [#124 Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) - Hard - Meta
- [ ] [#647 Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) - Medium
- [ ] [#516 Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) - Medium

### Day 40: Tree + Backtracking Review

Goal: Redo and write templates.

- [ ] 1 LCA or tree-path problem (new or redo)
- [ ] 1 backtracking problem (new or redo)
- [ ] Write recursion templates for Tree DFS and Backtracking

## Phase 5: Dynamic Programming Deep Dive (Days 41-50)

Patterns: Dynamic Programming (19)

### Day 41: 1D DP: Take / Not Take

Goal: 0/1 decisions.

- [ ] [#213 House Robber II](https://leetcode.com/problems/house-robber-ii/) - Medium
- [ ] [#416 Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) - Medium - Microsoft
- [ ] [#494 Target Sum](https://leetcode.com/problems/target-sum/) - Medium

### Day 42: Unbounded DP

Goal: Coin-change style.

- [ ] [#322 Coin Change](https://leetcode.com/problems/coin-change/) - Medium - Google
- [ ] [#518 Coin Change II](https://leetcode.com/problems/coin-change-ii/) - Medium
- [ ] [#279 Perfect Squares](https://leetcode.com/problems/perfect-squares/) - Medium

### Day 43: LIS Family

Goal: Increasing subsequence variants.

- [ ] [#300 Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) - Medium - Google
- [ ] [#368 Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/) - Medium
- [ ] [#646 Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/) - Medium

### Day 44: DP on Grids

Goal: 2D state.

- [ ] [#63 Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) - Medium
- [ ] [#64 Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) - Medium
- [ ] [#221 Maximal Square](https://leetcode.com/problems/maximal-square/) - Medium

### Day 45: DP on Strings I

Goal: Two-string DP.

- [ ] [#1143 Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) - Medium - Microsoft
- [ ] [#72 Edit Distance](https://leetcode.com/problems/edit-distance/) - Medium - Google, Microsoft

### Day 46: DP on Strings II

Goal: Palindromes and subsequences.

- [ ] [#647 Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) - Medium
- [ ] [#516 Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) - Medium
- [ ] [#115 Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) - Hard - Google

### Day 47: DP on Stocks

Goal: Any 2-3 variants.

- [ ] [#122 Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) - Medium
- [ ] [#123 Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) - Hard
- [ ] [#188 Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) - Hard
- [ ] [#309 Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) - Medium
- [ ] [#714 Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) - Medium

### Day 48: Partition / MCM-style DP

Goal: Interval DP.

- [ ] [#132 Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/) - Hard
- [ ] [#312 Burst Balloons](https://leetcode.com/problems/burst-balloons/) - Hard
- [ ] [#1547 Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/) - Hard

### Day 49: Google/Microsoft DP Day

Goal: Pick 3-4 tagged under Google / Microsoft DP.

- [ ] [#300 Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) - Medium - Google
- [ ] [#322 Coin Change](https://leetcode.com/problems/coin-change/) - Medium - Google
- [ ] [#72 Edit Distance](https://leetcode.com/problems/edit-distance/) - Medium - Google, Microsoft
- [ ] [#416 Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) - Medium - Microsoft
- [ ] [#1143 Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) - Medium - Microsoft
- [ ] [#115 Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) - Hard - Google

### Day 50: DP Summary & Sheet Creation

Goal: No new problems.

- [ ] Revisit the 2 hardest DP problems from Days 41-49
- [ ] Write a 1-2 page DP cheatsheet: states, transitions, base cases for 1D, grid, string, stocks, MCM

## Phase 6: Advanced Patterns, Design & Interview Simulation (Days 51-60)

Patterns: Modified Binary Search (12), Top K Elements (14), Two Heaps (16), Greedy (21), Design Data Structure (22)

### Day 51: Modified Binary Search

Goal: Rotated and specialized arrays.

- [ ] [#33 Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) - Medium - Google, Apple
- [ ] [#153 Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) - Medium - Google
- [ ] [#540 Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/) - Medium - Microsoft

### Day 52: Speed-Based Binary Search

Goal: Binary search on the answer.

- [ ] [#875 Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) - Medium - Google
- [ ] [#1011 Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) - Medium - Google
- [ ] [#1870 Minimum Speed to Arrive on Time](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/) - Medium
- [ ] [#1095 Find in Mountain Array](https://leetcode.com/problems/find-in-mountain-array/) - Hard

### Day 53: Two Heaps + Top K

Goal: Medians and scheduling with heaps.

- [ ] [#295 Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) - Hard - Netflix, Uber
- [ ] [#480 Sliding Window Median](https://leetcode.com/problems/sliding-window-median/) - Hard - Netflix
- [ ] [#502 IPO](https://leetcode.com/problems/ipo/) - Hard - Uber

### Day 54: Greedy Playlist

Goal: Pick 3-4.

- [ ] [#45 Jump Game II](https://leetcode.com/problems/jump-game-ii/) - Medium - Netflix, Uber
- [ ] [#134 Gas Station](https://leetcode.com/problems/gas-station/) - Medium - Netflix, Uber
- [ ] [#881 Boats to Save People](https://leetcode.com/problems/boats-to-save-people/) - Medium - Netflix
- [ ] [#1094 Car Pooling](https://leetcode.com/problems/car-pooling/) - Medium - Uber
- [ ] [#135 Candy](https://leetcode.com/problems/candy/) - Hard - Netflix

### Day 55: Design Data Structures

Goal: Implement from scratch, not just read.

- [ ] [#146 LRU Cache](https://leetcode.com/problems/lru-cache/) - Medium - Amazon, Meta, Airbnb
- [ ] [#460 LFU Cache](https://leetcode.com/problems/lfu-cache/) - Hard - Amazon
- [ ] [#355 Design Twitter](https://leetcode.com/problems/design-twitter/) - Medium - Meta, Airbnb
- [ ] [#1146 Snapshot Array](https://leetcode.com/problems/snapshot-array/) - Medium - Amazon, Airbnb

### Day 56: Company Simulation Day 1

Goal: Pick one company and solve 4 problems from its list, mixing patterns (e.g. Amazon: Sliding Window + BFS + Design).

- [ ] Pick the company from companies.md; for Meta, Amazon, Apple, Netflix or Google also use its 5-week guide in company-guides/

### Day 57: Company Simulation Day 2

Goal: Pick another company and do the same, focusing on its core patterns.

- [ ] Pick the company from companies.md; for Meta, Amazon, Apple, Netflix or Google also use its 5-week guide in company-guides/

### Day 58: Mistake Log Day

Goal: Review all wrong / timed out / guessed attempts from Days 1-57.

- [ ] Pick the 3 most painful and re-solve from scratch without looking at code
- [ ] Document: what trick did I miss, which pattern should I have recognized?

### Day 59: Full Mock Interview Day

Goal: 2 mediums + 1 hard in 75-90 min as if real.

- [ ] One DP or Graph problem
- [ ] One Tree / Backtracking problem
- [ ] One Array / Interval / Greedy problem
- [ ] Compare with editorial and write a short debrief

### Day 60: Light Day: Pattern Review & Future Plan

Goal: Skim all 22 patterns.

- [ ] For each pattern write 1-2 trigger phrases and 1 go-to problem (use pattern-cheatsheet.md)
- [ ] Pick the 2-3 companies you are targeting and mark their core patterns as weekly revisits
