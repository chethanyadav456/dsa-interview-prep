# Google Interview Guide

Source: [Optimizing your interviews at FAANG](https://jugaldb.substack.com/p/optimizing-your-interviews-at-faang). Back to [company guides](README.md).

Related: Curated problems and core patterns: [companies.md](../companies.md#google) | Behavioral round: [google.md](../../interview-notes/behavioral/google.md)

## Key question patterns and company focus

- Graphs & Trees (search indexing, map routing)
- Dynamic Programming & Bit Manipulation (low-level, large-scale optimizations)
- Hash Tables & Arrays/Strings (quick lookups, large data sets)
- Mathematical Puzzles & Number Theory (common in Google interviews)
- Depth & Rigor: Google expects deep edge-case reasoning, proofs of correctness, and discussing trade-offs.

## Resources

**Books**

- [Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850)
- [Elements of Programming Interviews (EPI)](https://www.amazon.com/Elements-Programming-Interviews-Insiders-Guide/dp/1517671272)

**Online Platforms & Tags**

- [LeetCode “Google” Tag](https://leetcode.com/problemset/all/?companySlug=google)
- [Google Tech Dev Guide](https://techdevguide.withgoogle.com/)

**Articles & Blogs**

- “How to Prepare for Google SDE Interviews”

**YouTube Channels & Playlists**

- [NeetCode (@NeetCode)](https://www.youtube.com/@NeetCode) – search “NeetCode Google”
- [TechLead (@TechLead)](https://www.youtube.com/@TechLead) – search “TechLead Google interview tips”

## 5-week training plan

### Week 1: Arrays, Strings & Bit Manipulation

**Goals**

- Master fundamental array & string operations (two-pointer, sliding window)
- Cover bitwise operators (XOR, shifts, bit masks) in common puzzles

**Problems (12 Easy/Medium)**

- [ ] [#1 Two Sum](https://leetcode.com/problems/two-sum/) - Easy
- [ ] [#3 Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) - Medium - curated: Amazon, Meta | 60-day: Day 4, 9 | 10-week: Week 1
- [ ] [#11 Container With Most Water](https://leetcode.com/problems/container-with-most-water/) - Medium - curated: Amazon, Apple | 60-day: Day 2, 9 | 10-week: Week 1
- [ ] [#15 3Sum](https://leetcode.com/problems/3sum/) - Medium - 10-week: Week 1
- [ ] [#36 Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) - Medium
- [ ] [#49 Group Anagrams](https://leetcode.com/problems/group-anagrams/) - Medium
- [ ] [#191 Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/) - Easy - article name: Count Bits (Number of 1 Bits)
- [ ] [#136 Single Number](https://leetcode.com/problems/single-number/) - Easy - curated: Microsoft | 60-day: Day 8
- [ ] [#268 Missing Number](https://leetcode.com/problems/missing-number/) - Easy - curated: Microsoft | 60-day: Day 6, 8
- [ ] [#190 Reverse Bits](https://leetcode.com/problems/reverse-bits/) - Easy
- [ ] [#125 Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) - Easy
- [ ] [#387 First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) - Easy

**Study actions**

- Practice common bitwise patterns (XOR swap, bit counting)
- Time solves: Easy ≤ 10 min, Medium ≤ 20 min
- For each problem, write expected bit operations (e.g., mask = mask << 1 | bit)

### Week 2: Trees & Binary Search Trees

**Goals**

- Master binary tree traversals, BST invariants, balanced vs. unbalanced trade-offs
- Prepare to discuss tree height, recursion depth, tail recursion

**Problems (10 Medium)**

- [ ] [#236 Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) - Medium - curated: Microsoft | 60-day: Day 34
- [ ] [#297 Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) - Hard
- [ ] [#98 Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) - Medium - curated: Microsoft
- [ ] [#501 Find Mode in Binary Search Tree](https://leetcode.com/problems/find-mode-in-binary-search-tree/) - Easy
- [ ] [#108 Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) - Easy
- [ ] [#124 Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) - Hard - curated: Meta | 60-day: Day 33, 39
- [ ] [#116 Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) - Medium
- [ ] [#543 Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) - Easy - curated: Microsoft | 60-day: Day 32
- [ ] [#102 Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) - Medium - curated: Meta | 60-day: Day 22, 31 | 10-week: Week 4
- [ ] [#101 Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) - Easy

**Study actions**

- Draw random BSTs and manually verify inorder is sorted
- Write down conditions for balanced vs. unbalanced; discuss space trade-offs

### Week 3: Graphs & BFS/DFS

**Goals**

- Master adjacency list/matrix, BFS/DFS on directed/undirected graphs
- Cover cycle detection, topological sort, shortest path (Dijkstra, Bellman-Ford)

**Problems (10 Medium/Hard)**

- [ ] [#200 Number of Islands](https://leetcode.com/problems/number-of-islands/) - Medium - 10-week: Week 4
- [ ] [#207 Course Schedule](https://leetcode.com/problems/course-schedule/) - Medium - curated: Google | 60-day: Day 25 | 10-week: Week 10
- [ ] [#269 Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) - Hard (Premium) - 10-week: Week 10
- [ ] [#133 Clone Graph](https://leetcode.com/problems/clone-graph/) - Medium - 10-week: Week 4
- [ ] [#261 Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/) - Medium (Premium)
- [ ] [#127 Word Ladder](https://leetcode.com/problems/word-ladder/) - Hard - curated: Amazon, Meta | 60-day: Day 23
- [ ] [#310 Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/) - Medium
- [ ] [#787 Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) - Medium - curated: Google, Uber | 60-day: Day 27, 28
- [ ] [#743 Network Delay Time](https://leetcode.com/problems/network-delay-time/) - Medium - curated: Google, Uber | 60-day: Day 23, 27, 28
- [ ] [#685 Redundant Connection II](https://leetcode.com/problems/redundant-connection-ii/) - Hard

**Study actions**

- Write both DFS (recursive) and BFS (queue) from scratch in ≤ 20 minutes each
- For each problem, annotate when to use adjacency list vs. matrix

### Week 4: Dynamic Programming & Bitmask DP

**Goals**

- Master 1D/2D DP, bitmask DP for small n (≤ 20)
- Cover DP on trees (Tree DP) commonly asked by Google

**Problems (10 Medium/Hard)**

- [ ] [#300 Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) - Medium - curated: Google | 60-day: Day 43, 49
- [ ] [#322 Coin Change](https://leetcode.com/problems/coin-change/) - Medium - curated: Google | 60-day: Day 42, 49 | 10-week: Week 6
- [ ] [#139 Word Break](https://leetcode.com/problems/word-break/) - Medium
- [ ] [#416 Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) - Medium - curated: Microsoft | 60-day: Day 41, 49
- [ ] [#72 Edit Distance](https://leetcode.com/problems/edit-distance/) - Medium - curated: Google, Microsoft | 60-day: Day 45, 49 | 10-week: Week 7
- [ ] [#62 Unique Paths](https://leetcode.com/problems/unique-paths/) - Medium - 10-week: Week 7
- [ ] [#201 Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/) - Medium
- [ ] [#136 Single Number](https://leetcode.com/problems/single-number/) - Easy - curated: Microsoft | 60-day: Day 8
- [ ] [#416 Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) - Medium - article name: Subset Sum (Partition Equal Subset Sum) - curated: Microsoft | 60-day: Day 41, 49
- [ ] [#213 House Robber II](https://leetcode.com/problems/house-robber-ii/) - Medium - 60-day: Day 41

**Study actions**

- Write bitmask DP for TSP-style problems (n ≤ 20) on paper
- Identify when recursion + memoization is faster than bottom-up
- Discuss space reduction (rolling arrays) for 2D DP

### Week 5: Mock Interviews & Feedback Loop

**Goals**

- Simulate 3 timed “Google” mocks (45 minutes each)
- Emphasize proof of correctness and discussion of edge cases/optimizations

**Actions and platforms**

- Peer Mock: Rotate roles; maintain strict time
- Online Mock:
  - [Pramp](https://www.pramp.com/) – search “Google”
  - [Interviewing.io](https://interviewing.io/) – filter “Google”
- Self-Review:
  - List problems that took > 30 minutes
  - Re-solve those in ≤ 25 minutes
  - Record a 2-minute “proof sketch” audio explaining time/space trade-offs
