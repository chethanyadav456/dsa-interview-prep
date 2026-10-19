# Company-wise DSA Patterns

Curated problems per company and the core patterns each company leans on, from [Company-wise DSA patterns](https://jugaldb.substack.com/p/company-wise-dsa-patterns).

## Overview

| Company | Core patterns | Problems | Behavioral prep | 5-week guide |
|---------|---------------|----------|-----------------|--------------|
| [Amazon](#amazon) | Sliding Window (4), Two Pointers (5), Breadth-First Search (BFS) (9), Design Data Structure (22) | 16 | [amazon.md](../interview-notes/behavioral/amazon.md) | [amazon](company-guides/amazon.md) |
| [Google](#google) | Dynamic Programming (19), Graphs (20), Backtracking (11), Modified Binary Search (12) | 17 | [google.md](../interview-notes/behavioral/google.md) | [google](company-guides/google.md) |
| [Meta](#meta) | Sliding Window (4), Trees (18), Breadth-First Search (BFS) (9), Design Data Structure (22) | 13 | [meta.md](../interview-notes/behavioral/meta.md) | [meta](company-guides/meta.md) |
| [Netflix](#netflix) | Overlapping Intervals (2), Greedy (21), Top K Elements (14), Two Heaps (16) | 13 | - | [netflix](company-guides/netflix.md) |
| [Uber](#uber) | Graphs (20), Greedy (21), Two Heaps (16), Top K Elements (14) | 12 | - | - |
| [Airbnb](#airbnb) | Overlapping Intervals (2), Breadth-First Search (BFS) (9), Backtracking (11), Design Data Structure (22) | 12 | - | - |
| [Microsoft](#microsoft) | Trees (18), Dynamic Programming (19), Bitwise XOR (13), Modified Binary Search (12) | 11 | - | - |
| [Apple](#apple) | Modified Binary Search (12), Two Pointers (5), Monotonic Stack (17), Matrix Manipulation (8) | 10 | [apple.md](../interview-notes/behavioral/apple.md) | [apple](company-guides/apple.md) |

Numbers in brackets are the pattern numbers in [patterns.md](patterns.md).

## Pattern x company matrix

Core patterns only (article Part 2).

| Pattern | Amazon | Google | Meta | Netflix | Uber | Airbnb | Microsoft | Apple |
|---|---|---|---|---|---|---|---|---|
| 2. Overlapping Intervals |  |  |  | x |  | x |  |  |
| 4. Sliding Window | x |  | x |  |  |  |  |  |
| 5. Two Pointers | x |  |  |  |  |  |  | x |
| 8. Matrix Manipulation |  |  |  |  |  |  |  | x |
| 9. Breadth-First Search (BFS) | x |  | x |  |  | x |  |  |
| 11. Backtracking |  | x |  |  |  | x |  |  |
| 12. Modified Binary Search |  | x |  |  |  |  | x | x |
| 13. Bitwise XOR |  |  |  |  |  |  | x |  |
| 14. Top K Elements |  |  |  | x | x |  |  |  |
| 16. Two Heaps |  |  |  | x | x |  |  |  |
| 17. Monotonic Stack |  |  |  |  |  |  |  | x |
| 18. Trees |  |  | x |  |  |  | x |  |
| 19. Dynamic Programming |  | x |  |  |  |  | x |  |
| 20. Graphs |  | x |  |  | x |  |  |  |
| 21. Greedy |  |  |  | x | x |  |  |  |
| 22. Design Data Structure | x |  | x |  |  | x |  |  |

## Most asked across companies

Problems that appear in 3 or more company lists. Do these first.

| Problem | Difficulty | Companies |
|---------|------------|-----------|
| [#1162 As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/) | Medium | Amazon, Meta, Airbnb |
| [#146 LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | Amazon, Meta, Airbnb |

## Amazon

Core patterns: Sliding Window, Two Pointers, Breadth-First Search (BFS), Design Data Structure

Behavioral round: [amazon.md](../interview-notes/behavioral/amazon.md)

5-week plan and resources: [company-guides/amazon.md](company-guides/amazon.md)

**Sliding Window**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#3 Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | Meta |
| [#209 Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) | Medium | - |
| [#76 Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | Hard | Meta |
| [#239 Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | Hard | - |

**Two Pointers**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#167 Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | Medium | - |
| [#11 Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | Medium | Apple |
| [#42 Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | Hard | Apple |
| [#75 Sort Colors](https://leetcode.com/problems/sort-colors/) | Medium | - |

**BFS**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#994 Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | Medium | Meta |
| [#1091 Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) | Medium | Airbnb |
| [#127 Word Ladder](https://leetcode.com/problems/word-ladder/) | Hard | Meta |
| [#1162 As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/) | Medium | Meta, Airbnb |

**Design Data Structure**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#146 LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | Meta, Airbnb |
| [#460 LFU Cache](https://leetcode.com/problems/lfu-cache/) | Hard | - |
| [#1472 Design Browser History](https://leetcode.com/problems/design-browser-history/) | Medium | Meta |
| [#1146 Snapshot Array](https://leetcode.com/problems/snapshot-array/) | Medium | Airbnb |

## Google

Core patterns: Dynamic Programming, Graphs, Backtracking, Modified Binary Search

Behavioral round: [google.md](../interview-notes/behavioral/google.md)

5-week plan and resources: [company-guides/google.md](company-guides/google.md)

**Dynamic Programming**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#300 Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) | Medium | - |
| [#72 Edit Distance](https://leetcode.com/problems/edit-distance/) | Medium | Microsoft |
| [#322 Coin Change](https://leetcode.com/problems/coin-change/) | Medium | - |
| [#115 Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) | Hard | - |

**Graphs**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#207 Course Schedule](https://leetcode.com/problems/course-schedule/) | Medium | - |
| [#743 Network Delay Time](https://leetcode.com/problems/network-delay-time/) | Medium | Uber |
| [#787 Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) | Medium | Uber |
| [#721 Accounts Merge](https://leetcode.com/problems/accounts-merge/) | Medium | Uber |

**Backtracking**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#51 N-Queens](https://leetcode.com/problems/n-queens/) | Hard | - |
| [#37 Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) | Hard | - |
| [#79 Word Search](https://leetcode.com/problems/word-search/) | Medium | Airbnb |
| [#131 Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) | Medium | Airbnb |

**Modified Binary Search**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#33 Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Medium | Apple |
| [#153 Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | Medium | - |
| [#875 Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | Medium | - |
| [#1011 Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | Medium | - |
| [#4 Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Hard | Apple |

## Meta

Core patterns: Sliding Window, Trees, Breadth-First Search (BFS), Design Data Structure

Behavioral round: [meta.md](../interview-notes/behavioral/meta.md)

5-week plan and resources: [company-guides/meta.md](company-guides/meta.md)

**Sliding Window**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#3 Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | Amazon |
| [#76 Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | Hard | Amazon |
| [#567 Permutation in String](https://leetcode.com/problems/permutation-in-string/) | Medium | - |

**Trees**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#102 Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | Medium | - |
| [#103 Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) | Medium | - |
| [#124 Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | Hard | - |
| [#863 All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/) | Medium | - |

**BFS**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#127 Word Ladder](https://leetcode.com/problems/word-ladder/) | Hard | Amazon |
| [#994 Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | Medium | Amazon |
| [#1162 As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/) | Medium | Amazon, Airbnb |

**Design Data Structure**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#146 LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | Amazon, Airbnb |
| [#355 Design Twitter](https://leetcode.com/problems/design-twitter/) | Medium | Airbnb |
| [#1472 Design Browser History](https://leetcode.com/problems/design-browser-history/) | Medium | Amazon |

## Netflix

Core patterns: Overlapping Intervals, Greedy, Top K Elements, Two Heaps

5-week plan and resources: [company-guides/netflix.md](company-guides/netflix.md)

**Overlapping Intervals**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#56 Merge Intervals](https://leetcode.com/problems/merge-intervals/) | Medium | Airbnb |
| [#57 Insert Interval](https://leetcode.com/problems/insert-interval/) | Medium | Airbnb |
| [#435 Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) | Medium | - |
| [#452 Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) | Medium | Airbnb |

**Greedy**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#45 Jump Game II](https://leetcode.com/problems/jump-game-ii/) | Medium | Uber |
| [#134 Gas Station](https://leetcode.com/problems/gas-station/) | Medium | Uber |
| [#881 Boats to Save People](https://leetcode.com/problems/boats-to-save-people/) | Medium | - |
| [#135 Candy](https://leetcode.com/problems/candy/) | Hard | - |

**Top K Elements**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#347 Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | Uber |
| [#215 Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | Medium | Uber |
| [#973 K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) | Medium | Uber |

**Two Heaps**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#295 Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | Hard | Uber |
| [#480 Sliding Window Median](https://leetcode.com/problems/sliding-window-median/) | Hard | - |

## Uber

Core patterns: Graphs, Greedy, Two Heaps, Top K Elements

**Graphs**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#787 Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) | Medium | Google |
| [#743 Network Delay Time](https://leetcode.com/problems/network-delay-time/) | Medium | Google |
| [#684 Redundant Connection](https://leetcode.com/problems/redundant-connection/) | Medium | - |
| [#721 Accounts Merge](https://leetcode.com/problems/accounts-merge/) | Medium | Google |

**Greedy**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#1094 Car Pooling](https://leetcode.com/problems/car-pooling/) | Medium | - |
| [#45 Jump Game II](https://leetcode.com/problems/jump-game-ii/) | Medium | Netflix |
| [#134 Gas Station](https://leetcode.com/problems/gas-station/) | Medium | Netflix |

**Two Heaps**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#502 IPO](https://leetcode.com/problems/ipo/) | Hard | - |
| [#295 Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | Hard | Netflix |

**Top K Elements**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#973 K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) | Medium | Netflix |
| [#215 Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | Medium | Netflix |
| [#347 Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | Netflix |

## Airbnb

Core patterns: Overlapping Intervals, Breadth-First Search (BFS), Backtracking, Design Data Structure

**Overlapping Intervals**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#56 Merge Intervals](https://leetcode.com/problems/merge-intervals/) | Medium | Netflix |
| [#57 Insert Interval](https://leetcode.com/problems/insert-interval/) | Medium | Netflix |
| [#452 Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) | Medium | Netflix |

**BFS**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#1091 Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) | Medium | Amazon |
| [#1162 As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/) | Medium | Amazon, Meta |

**Backtracking**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#39 Combination Sum](https://leetcode.com/problems/combination-sum/) | Medium | - |
| [#22 Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) | Medium | - |
| [#79 Word Search](https://leetcode.com/problems/word-search/) | Medium | Google |
| [#131 Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) | Medium | Google |

**Design Data Structure**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#146 LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | Amazon, Meta |
| [#355 Design Twitter](https://leetcode.com/problems/design-twitter/) | Medium | Meta |
| [#1146 Snapshot Array](https://leetcode.com/problems/snapshot-array/) | Medium | Amazon |

## Microsoft

Core patterns: Trees, Dynamic Programming, Bitwise XOR, Modified Binary Search

**Trees**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#98 Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | Medium | - |
| [#236 Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | Medium | - |
| [#543 Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) | Easy | - |

**Dynamic Programming**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#1143 Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) | Medium | - |
| [#72 Edit Distance](https://leetcode.com/problems/edit-distance/) | Medium | Google |
| [#416 Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) | Medium | - |

**Bitwise XOR**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#268 Missing Number](https://leetcode.com/problems/missing-number/) | Easy | - |
| [#136 Single Number](https://leetcode.com/problems/single-number/) | Easy | - |
| [#260 Single Number III](https://leetcode.com/problems/single-number-iii/) | Medium | - |

**Modified Binary Search**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#540 Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/) | Medium | - |
| [#162 Find Peak Element](https://leetcode.com/problems/find-peak-element/) | Medium | - |

## Apple

Core patterns: Modified Binary Search, Two Pointers, Monotonic Stack, Matrix Manipulation

Behavioral round: [apple.md](../interview-notes/behavioral/apple.md)

5-week plan and resources: [company-guides/apple.md](company-guides/apple.md)

**Modified Binary Search**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#33 Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Medium | Google |
| [#4 Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Hard | Google |

**Two Pointers**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#11 Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | Medium | Amazon |
| [#42 Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | Hard | Amazon |

**Monotonic Stack**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#739 Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | Medium | - |
| [#84 Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) | Hard | - |

**Matrix Manipulation**

| Problem | Difficulty | Also asked at |
|---------|------------|---------------|
| [#48 Rotate Image](https://leetcode.com/problems/rotate-image/) | Medium | - |
| [#73 Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) | Medium | - |
| [#54 Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) | Medium | - |
| [#289 Game of Life](https://leetcode.com/problems/game-of-life/) | Medium | - |
