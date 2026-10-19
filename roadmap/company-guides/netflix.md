# Netflix Interview Guide

Source: [Optimizing your interviews at FAANG](https://jugaldb.substack.com/p/optimizing-your-interviews-at-faang). Back to [company guides](README.md).

Related: Curated problems and core patterns: [companies.md](../companies.md#netflix)

## Key question patterns and company focus

- Graphs & BFS/DFS (recommendation networks, content delivery)
- Dynamic Programming & Sliding Window (video streaming optimizations, caching)
- Strings & Backtracking (search functionality, metadata parsing)
- Concurrency & Threading (for later rounds)
- Behavior & System Context: Netflix places heavy weight on culture fit; be ready to discuss trade-offs and scalability

## Resources

**Books**

- [Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850)
- [Elements of Programming Interviews (EPI)](https://www.amazon.com/Elements-Programming-Interviews-Insiders-Guide/dp/1517671272)

**Online Platforms & Tags**

- [LeetCode “Netflix” Tag](https://leetcode.com/problemset/all/?companySlug=netflix)
- [Glassdoor Netflix Interview Questions](https://www.glassdoor.com/Interview/Netflix-Interview-Questions-E11891.htm)

**Articles & Blogs**

- “Netflix SDE Interview Experience” – Glassdoor

**YouTube Channels & Playlists**

- [NeetCode (@NeetCode)](https://www.youtube.com/@NeetCode) – search “NeetCode Netflix”
- [TechLead (@TechLead)](https://www.youtube.com/@TechLead) – search “TechLead Netflix interview tips”

## 5-week training plan

### Week 1: Arrays & Strings

**Goals**

- Master basic array manipulations (sorting, two-pointer, sliding window) for streaming data
- Solve easy/medium “Netflix” array/string problems quickly

**Problems (12 Easy/Medium)**

- [ ] [#1 Two Sum](https://leetcode.com/problems/two-sum/) - Easy
- [ ] [#242 Valid Anagram](https://leetcode.com/problems/valid-anagram/) - Easy
- [ ] [#3 Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) - Medium - curated: Amazon, Meta | 60-day: Day 4, 9 | 10-week: Week 1
- [ ] [#15 3Sum](https://leetcode.com/problems/3sum/) - Medium - 10-week: Week 1
- [ ] [#217 Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) - Easy
- [ ] [#350 Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) - Easy
- [ ] [#344 Reverse String](https://leetcode.com/problems/reverse-string/) - Easy
- [ ] [#8 String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/) - Medium
- [ ] [#28 Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) - Easy - article name: Implement strStr()
- [ ] [#5 Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) - Medium - 10-week: Week 7
- [ ] [#387 First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) - Easy
- [ ] [#49 Group Anagrams](https://leetcode.com/problems/group-anagrams/) - Medium

**Study actions**

- Practice sliding window with char frequency counts
- Time solves: Easy ≤ 10 min, Medium ≤ 20 min
- Note streaming-specific patterns (process data in chunks/sliding windows)

### Week 2: Graphs & Trees

**Goals**

- Master adjacency list representation, BFS/DFS for connectivity/shortest path
- Understand tree traversals and basic tree manipulations

**Problems (10 Medium)**

- [ ] [#200 Number of Islands](https://leetcode.com/problems/number-of-islands/) - Medium - 10-week: Week 4
- [ ] [#133 Clone Graph](https://leetcode.com/problems/clone-graph/) - Medium - 10-week: Week 4
- [ ] [#207 Course Schedule](https://leetcode.com/problems/course-schedule/) - Medium - curated: Google | 60-day: Day 25 | 10-week: Week 10
- [ ] [#102 Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) - Medium - curated: Meta | 60-day: Day 22, 31 | 10-week: Week 4
- [ ] [#104 Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) - Easy - 60-day: Day 32
- [ ] [#112 Path Sum](https://leetcode.com/problems/path-sum/) - Easy
- [ ] [#101 Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) - Easy
- [ ] [#543 Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) - Easy - curated: Microsoft | 60-day: Day 32
- [ ] [#210 Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) - Medium - 60-day: Day 25
- [ ] [#261 Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/) - Medium (Premium)

**Study actions**

- Write BFS/DFS from scratch (adjacency list + visited set) in ≤ 15 minutes
- Sketch small graphs/trees to visualize traversal order
- Confirm edge cases (disconnected nodes, self-loops)

### Week 3: Dynamic Programming & Sliding Window

**Goals**

- Master 1D/2D DP patterns (streaming buffer, segment caching)
- Reinforce sliding window for continuous data processing

**Problems (10 Medium/Hard)**

- [ ] [#76 Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) - Hard - curated: Amazon, Meta
- [ ] [#239 Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) - Hard - curated: Amazon
- [ ] [#300 Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) - Medium - curated: Google | 60-day: Day 43, 49
- [ ] [#322 Coin Change](https://leetcode.com/problems/coin-change/) - Medium - curated: Google | 60-day: Day 42, 49 | 10-week: Week 6
- [ ] [#139 Word Break](https://leetcode.com/problems/word-break/) - Medium
- [ ] [#62 Unique Paths](https://leetcode.com/problems/unique-paths/) - Medium - 10-week: Week 7
- [ ] [#72 Edit Distance](https://leetcode.com/problems/edit-distance/) - Medium - curated: Google, Microsoft | 60-day: Day 45, 49 | 10-week: Week 7
- [ ] [#32 Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/) - Hard
- [ ] [#212 Word Search II](https://leetcode.com/problems/word-search-ii/) - Hard
- [ ] [#127 Word Ladder](https://leetcode.com/problems/word-ladder/) - Hard - curated: Amazon, Meta | 60-day: Day 23

**Study actions**

- Hand-simulate DP for small n×m matrices
- Identify overlapping subproblems vs. greedy choices
- Write optimized sliding window with deque when needed

### Week 4: Backtracking & Advanced Graphs

**Goals**

- Cover backtracking: permutations, combinations, subsets for configuration spaces
- Solve advanced graph problems: multi-source BFS, weighted shortest paths

**Problems (10 Medium/Hard)**

- [ ] [#46 Permutations](https://leetcode.com/problems/permutations/) - Medium
- [ ] [#39 Combination Sum](https://leetcode.com/problems/combination-sum/) - Medium - curated: Airbnb | 60-day: Day 36 | 10-week: Week 5
- [ ] [#78 Subsets](https://leetcode.com/problems/subsets/) - Medium
- [ ] [#323 Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) - Medium (Premium)
- [ ] [#787 Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) - Medium - curated: Google, Uber | 60-day: Day 27, 28
- [ ] [#743 Network Delay Time](https://leetcode.com/problems/network-delay-time/) - Medium - curated: Google, Uber | 60-day: Day 23, 27, 28
- [ ] [#310 Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/) - Medium
- [ ] [#269 Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) - Hard (Premium) - 10-week: Week 10
- [ ] [#685 Redundant Connection II](https://leetcode.com/problems/redundant-connection-ii/) - Hard
- [ ] [#329 Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) - Hard

**Study actions**

- Draw full recursion tree for backtracking; annotate pruning points
- Implement Dijkstra/Bellman-Ford in ≤ 20 minutes
- Practice multi-source BFS by hand

### Week 5: Mock Interviews & Feedback Loop

**Goals**

- Simulate 3 timed “Netflix” mocks (45 minutes each)
- Emphasize code readability and cultural fit (clarity of trade-offs)

**Actions and platforms**

- Peer Mock: Alternate interviewer/interviewee; keep strict time
- Online Mock:
  - [Pramp](https://www.pramp.com/) – search “Netflix”
  - [Interviewing.io](https://interviewing.io/) – filter “Netflix”
- Self-Review:
  - Note problems that took > 30 minutes
  - Re-implement in ≤ 25 minutes
  - Record a 2-minute audio explanation; refine conciseness
