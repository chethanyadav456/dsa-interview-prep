# Meta (Facebook) Interview Guide

Source: [Optimizing your interviews at FAANG](https://jugaldb.substack.com/p/optimizing-your-interviews-at-faang). Back to [company guides](README.md).

Related: Curated problems and core patterns: [companies.md](../companies.md#meta) | Behavioral round: [meta.md](../../interview-notes/behavioral/meta.md)

## Key question patterns and company focus

- Graphs & Trees (BFS/DFS, lowest common ancestor, connectivity): Facebook’s products rely heavily on social graphs and hierarchical data.
- Hash Tables & Two-Pointers/Sliding Windows (cache/indexing, stream processing): Emphasis on real-time feed algorithms and in-place, memory-efficient solutions.
- Tries (autocomplete, prefix matching): Used in search and content suggestions.
- Production-Grade Code: Interviewers expect clear thought process, edge-case handling (e.g., null checks), and in-place optimizations.

## Resources

**Books**

- [Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850)
- [Elements of Programming Interviews (EPI)](https://www.amazon.com/Elements-Programming-Interviews-Insiders-Guide/dp/1517671272)

**Online Platforms & Tags**

- [LeetCode “Facebook” Tag](https://leetcode.com/problemset/all/?companySlug=facebook)
- [HackerRank Interview Preparation Kit](https://www.hackerrank.com/interview/interview-preparation-kit)

**Articles & Blogs**

- [How Facebook Assembles Its Engineering Team](https://www.joelonsoftware.com/2006/07/27/how-facebook-assembles-its-engineering-team/) – Joel Spolsky’s blog

**YouTube Channels & Playlists**

- [NeetCode (@NeetCode)](https://www.youtube.com/@NeetCode) – search “NeetCode Facebook”
- [TechLead (@TechLead)](https://www.youtube.com/@TechLead) – search “TechLead Facebook interview tips”

## 5-week training plan

### Week 1: Fundamentals & Easy “Facebook” Problems

**Goals**

- Master Big-O notation and constant vs. amortized time
- Review arrays, strings, and hash tables
- Build confidence solving easy “Facebook”-tagged problems in ≤ 15 minutes

**Problems (15 Easy)**

- [ ] [#1 Two Sum](https://leetcode.com/problems/two-sum/) - Easy
- [ ] [#242 Valid Anagram](https://leetcode.com/problems/valid-anagram/) - Easy
- [ ] [#205 Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) - Easy
- [ ] [#217 Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) - Easy
- [ ] [#350 Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) - Easy
- [ ] [#202 Happy Number](https://leetcode.com/problems/happy-number/) - Easy - 10-week: Week 2
- [ ] [#20 Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) - Easy
- [ ] [#121 Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) - Easy
- [ ] [#136 Single Number](https://leetcode.com/problems/single-number/) - Easy - curated: Microsoft | 60-day: Day 8
- [ ] [#21 Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) - Easy
- [ ] [#206 Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) - Easy - 60-day: Day 7 | 10-week: Week 3
- [ ] [#111 Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/) - Easy - 10-week: Week 4
- [ ] [#101 Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) - Easy
- [ ] [#112 Path Sum](https://leetcode.com/problems/path-sum/) - Easy
- [ ] [#35 Search Insert Position](https://leetcode.com/problems/search-insert-position/) - Easy

**Study actions**

- Read/solve array & string chapters in CTCI
- Write code by hand; explain edge cases aloud
- Time yourself (≤ 15 minutes); if you exceed, re-solve after reviewing hints

### Week 2: Trees & Basic Graphs

**Goals**

- Solidify binary tree traversals (inorder/preorder/postorder)
- Understand basic DFS/BFS with visited sets
- Solve medium “Facebook” tree/graph problems in ≤ 25 minutes

**Problems (10 Medium)**

- [ ] [#94 Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) - Easy
- [ ] [#104 Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) - Easy - 60-day: Day 32
- [ ] [#101 Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) - Easy - note: if not done in Week 1
- [ ] [#236 Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) - Medium - curated: Microsoft | 60-day: Day 34
- [ ] [#103 Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) - Medium - curated: Meta | 60-day: Day 31
- [ ] [#200 Number of Islands](https://leetcode.com/problems/number-of-islands/) - Medium - 10-week: Week 4
- [ ] [#261 Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/) - Medium (Premium)
- [ ] [#207 Course Schedule](https://leetcode.com/problems/course-schedule/) - Medium - note: basic cycle detection - curated: Google | 60-day: Day 25 | 10-week: Week 10
- [ ] [#323 Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) - Medium (Premium)
- [ ] [#133 Clone Graph](https://leetcode.com/problems/clone-graph/) - Medium - 10-week: Week 4

**Study actions**

- Revisit tree traversals and recursion patterns in CTCI/EPI
- Implement basic BFS/DFS in pseudocode, then code it
- For each problem, write down time/space complexity and edge-case checks

### Week 3: Advanced Graphs & Tries

**Goals**

- Master topological sort, cycle detection, and multi-source BFS
- Implement Trie from scratch
- Solve medium “Facebook” graph/trie problems in ≤ 30 minutes

**Problems (8 Medium/Hard)**

- [ ] [#269 Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) - Hard (Premium) - note: topological sort - 10-week: Week 10
- [ ] [#212 Word Search II](https://leetcode.com/problems/word-search-ii/) - Hard - note: Trie + DFS
- [ ] [#211 Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) - Medium - note: Trie + wildcards
- [ ] [#210 Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) - Medium - note: return ordering - 60-day: Day 25
- [ ] [#743 Network Delay Time](https://leetcode.com/problems/network-delay-time/) - Medium - note: Dijkstra/BFS variation - curated: Google, Uber | 60-day: Day 23, 27, 28
- [ ] [#310 Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/) - Medium - note: graph pruning
- [ ] [#787 Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) - Medium - note: Bellman-Ford/BFS - curated: Google, Uber | 60-day: Day 27, 28
- [ ] [#685 Redundant Connection II](https://leetcode.com/problems/redundant-connection-ii/) - Hard - note: Union Find + DFS

**Study actions**

- Code a Trie class with insert/search/delete in ~20 minutes on paper
- Practice dry-running topological sort on small DAGs
- For each problem, write out the state transition (e.g., for BFS, define “node” and “edge”)

### Week 4: Two-Pointer, Sliding Window & Dynamic Programming Basics

**Goals**

- Master two-pointer from both ends, fixed and variable sliding windows
- Cover foundational DP (knapsack, LIS, coin change)
- Solve combined arrays/DP medium problems in ≤ 30 minutes

**Problems (12 Medium)**

- [ ] [#76 Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) - Hard - curated: Amazon, Meta
- [ ] [#239 Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) - Hard - curated: Amazon
- [ ] [#15 3Sum](https://leetcode.com/problems/3sum/) - Medium - 10-week: Week 1
- [ ] [#3 Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) - Medium - curated: Amazon, Meta | 60-day: Day 4, 9 | 10-week: Week 1
- [ ] [#300 Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) - Medium - note: DP + binary search - curated: Google | 60-day: Day 43, 49
- [ ] [#322 Coin Change](https://leetcode.com/problems/coin-change/) - Medium - note: DP bottom-up - curated: Google | 60-day: Day 42, 49 | 10-week: Week 6
- [ ] [#198 House Robber](https://leetcode.com/problems/house-robber/) - Medium - note: DP - 10-week: Week 6
- [ ] [#70 Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) - Easy - note: quick DP - 10-week: Week 6
- [ ] [#416 Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) - Medium - note: subset-sum DP - curated: Microsoft | 60-day: Day 41, 49
- [ ] [#5 Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) - Medium - note: DP/center expansion - 10-week: Week 7
- [ ] [#139 Word Break](https://leetcode.com/problems/word-break/) - Medium - note: DP + trie optional
- [ ] [#16 3Sum Closest](https://leetcode.com/problems/3sum-closest/) - Medium - note: adjacent to 3Sum

**Study actions**

- Draw state-transition tables for DP problems
- Hand-simulate sliding window expansion/contraction
- Write optimized in-place code (O(N) or O(N log N) where possible)

### Week 5: Mock Interviews & Feedback Loop

**Goals**

- Simulate 3 timed sessions (45 minutes each) under “Facebook” conditions
- Identify weak spots (syntax errors, edge cases, verbal explanation clarity)
- Fill gaps: re-drill slow areas (e.g., tree/graph) specifically

**Actions and platforms**

- Peer Mock: Pair with a friend; alternate interviewer/interviewee; use a real timer
- Online Mock:
  - [Pramp](https://www.pramp.com/) – search “Facebook”
  - [Interviewing.io](https://interviewing.io/) – search “Facebook”
- Self-Review:
  - Note areas where you froze or took > 15 minutes
  - Re-practice those problems immediately under timed conditions
  - Record yourself explaining the solution aloud; critique clarity
