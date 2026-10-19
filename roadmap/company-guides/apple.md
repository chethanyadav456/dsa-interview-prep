# Apple Interview Guide

Source: [Optimizing your interviews at FAANG](https://jugaldb.substack.com/p/optimizing-your-interviews-at-faang). Back to [company guides](README.md).

Related: Curated problems and core patterns: [companies.md](../companies.md#apple) | Behavioral round: [apple.md](../../interview-notes/behavioral/apple.md)

## Key question patterns and company focus

- Arrays & Strings (memory/storage optimizations, UI data)
- Dynamic Programming (resource caching, UI animation states)
- Trees & Graphs (file system trees, dependency graphs)
- Backtracking & Recursion (UI element permutations, configuration search)
- Edge-Case Robustness: Apple emphasizes elegant, bug-free code covering all corner cases.

## Resources

**Books**

- [Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850)
- [Elements of Programming Interviews (EPI)](https://www.amazon.com/Elements-Programming-Interviews-Insiders-Guide/dp/1517671272)

**Online Platforms & Tags**

- [LeetCode “Apple” Tag](https://leetcode.com/problemset/all/?companySlug=apple)
- [InterviewBit Apple Interview Questions](https://www.interviewbit.com/apple-interview-questions/)

**Articles & Blogs**

- [How to Prepare for Apple SDE Interviews](https://www.interviewbit.com/blog/apple-interview-questions/)

**YouTube Channels & Playlists**

- [NeetCode (@NeetCode)](https://www.youtube.com/@NeetCode) – search “NeetCode Apple”
- [TechLead (@TechLead)](https://www.youtube.com/@TechLead) – search “TechLead Apple interview tips”

## 5-week training plan

### Week 1: Arrays & Strings

**Goals**

- Master two-pointer, sliding window, prefix sums
- Cover frequent string manipulations (reverse, search, palindrome)

**Problems (12 Easy/Medium)**

- [ ] [#1 Two Sum](https://leetcode.com/problems/two-sum/) - Easy
- [ ] [#3 Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) - Medium - curated: Amazon, Meta | 60-day: Day 4, 9 | 10-week: Week 1
- [ ] [#11 Container With Most Water](https://leetcode.com/problems/container-with-most-water/) - Medium - curated: Amazon, Apple | 60-day: Day 2, 9 | 10-week: Week 1
- [ ] [#15 3Sum](https://leetcode.com/problems/3sum/) - Medium - 10-week: Week 1
- [ ] [#20 Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) - Easy
- [ ] [#5 Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) - Medium - 10-week: Week 7
- [ ] [#242 Valid Anagram](https://leetcode.com/problems/valid-anagram/) - Easy
- [ ] [#387 First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) - Easy
- [ ] [#344 Reverse String](https://leetcode.com/problems/reverse-string/) - Easy
- [ ] [#8 String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/) - Medium
- [ ] [#28 Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) - Easy - article name: Implement strStr()
- [ ] [#14 Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) - Easy

**Study actions**

- Annotate left/right pointers and conditions for sliding windows
- Write string-parsing edge cases (overflow, sign, null char) on paper
- Time yourself:
  - Easy ≤ 10 minutes
  - Medium ≤ 20 minutes

### Week 2: Trees & Binary Search Trees

**Goals**

- Master recursive & iterative tree traversals
- Solve BST insert/search/delete and common tree-shaped queries

**Problems (10 Medium)**

- [ ] [#104 Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) - Easy - 60-day: Day 32
- [ ] [#108 Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) - Easy
- [ ] [#543 Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) - Easy - curated: Microsoft | 60-day: Day 32
- [ ] [#236 Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) - Medium - curated: Microsoft | 60-day: Day 34
- [ ] [#297 Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) - Hard
- [ ] [#103 Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) - Medium - curated: Meta | 60-day: Day 31
- [ ] [#98 Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) - Medium - curated: Microsoft
- [ ] [#230 Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) - Medium
- [ ] [#116 Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) - Medium
- [ ] [#113 Path Sum II](https://leetcode.com/problems/path-sum-ii/) - Medium - 60-day: Day 33

**Study actions**

- Sketch each tree on paper; annotate depth/height for diameter
- Write iterative inorder/preorder/postorder using a stack in ≤ 15 minutes
- For BST problems, confirm O(log n) on balanced trees; identify degenerate cases

### Week 3: Dynamic Programming

**Goals**

- Master 1D DP (knapsack-style, LIS) and 2D DP (matrix path, edit distance)
- Understand memoization vs. tabulation

**Problems (10 Medium/Hard)**

- [ ] [#70 Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) - Easy - 10-week: Week 6
- [ ] [#198 House Robber](https://leetcode.com/problems/house-robber/) - Medium - 10-week: Week 6
- [ ] [#300 Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) - Medium - curated: Google | 60-day: Day 43, 49
- [ ] [#322 Coin Change](https://leetcode.com/problems/coin-change/) - Medium - curated: Google | 60-day: Day 42, 49 | 10-week: Week 6
- [ ] [#139 Word Break](https://leetcode.com/problems/word-break/) - Medium
- [ ] [#416 Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) - Medium - curated: Microsoft | 60-day: Day 41, 49
- [ ] [#72 Edit Distance](https://leetcode.com/problems/edit-distance/) - Medium - curated: Google, Microsoft | 60-day: Day 45, 49 | 10-week: Week 7
- [ ] [#62 Unique Paths](https://leetcode.com/problems/unique-paths/) - Medium - 10-week: Week 7
- [ ] [#5 Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) - Medium - note: if not done - 10-week: Week 7
- [ ] [#10 Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) - Hard

**Study actions**

- For each DP problem, write state definition (e.g., dp[i][j]) and recurrence
- Hand-trace DP table for small inputs
- Optimize from O(N²) → O(N) or O(N log N) where possible

### Week 4: Graphs & Backtracking

**Goals**

- Master DFS/BFS on directed/undirected graphs, cycle detection
- Cover backtracking patterns (permutations, combinations, subsets)

**Problems (10 Medium/Hard)**

- [ ] [#200 Number of Islands](https://leetcode.com/problems/number-of-islands/) - Medium - 10-week: Week 4
- [ ] [#207 Course Schedule](https://leetcode.com/problems/course-schedule/) - Medium - curated: Google | 60-day: Day 25 | 10-week: Week 10
- [ ] [#261 Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/) - Medium (Premium)
- [ ] [#79 Word Search](https://leetcode.com/problems/word-search/) - Medium - curated: Google, Airbnb | 60-day: Day 37 | 10-week: Week 4
- [ ] [#46 Permutations](https://leetcode.com/problems/permutations/) - Medium
- [ ] [#39 Combination Sum](https://leetcode.com/problems/combination-sum/) - Medium - curated: Airbnb | 60-day: Day 36 | 10-week: Week 5
- [ ] [#78 Subsets](https://leetcode.com/problems/subsets/) - Medium
- [ ] [#133 Clone Graph](https://leetcode.com/problems/clone-graph/) - Medium - 10-week: Week 4
- [ ] [#210 Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) - Medium - 60-day: Day 25
- [ ] [#127 Word Ladder](https://leetcode.com/problems/word-ladder/) - Hard - curated: Amazon, Meta | 60-day: Day 23

**Study actions**

- Write cycle detection (white/gray/black set) by hand in ≤ 15 minutes
- Sketch recursion trees for backtracking; annotate branching factor
- Optimize pruning conditions (e.g., early exit in Combination Sum)

### Week 5: Mock Interviews & Feedback Loop

**Goals**

- Simulate 3 timed “Apple” mocks (45 minutes each)
- Focus on code compactness, edge-case coverage, and clean style

**Actions and platforms**

- Peer Mock: Interview a friend; keep strict time and alternate roles
- Online Mock:
  - [Pramp](https://www.pramp.com/) – search “Apple”
  - [Interviewing.io](https://interviewing.io/) – filter “Apple”
- Self-Review:
  - After each mock, list problems that took > 25 minutes
  - Redo those problems in ≤ 20 minutes
  - Record a 2-minute “elevator pitch” explanation; refine clarity
