# Amazon Interview Guide

Source: [Optimizing your interviews at FAANG](https://jugaldb.substack.com/p/optimizing-your-interviews-at-faang). Back to [company guides](README.md).

Related: Curated problems and core patterns: [companies.md](../companies.md#amazon) | Behavioral round: [amazon.md](../../interview-notes/behavioral/amazon.md)

## Key question patterns and company focus

- Trees & Binary Search Trees (Amazon warehouses, inventory, hierarchical data)
- Heaps & Priority Queues (order processing, cost optimization)
- Graphs & BFS/DFS (supply-chain networks)
- Dynamic Programming & Greedy (resource allocation, path minimization)
- Hash Tables, Sorting & Searching (catalog indexing, fast lookups)

## Resources

**Books**

- [Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850)
- [Elements of Programming Interviews (EPI)](https://www.amazon.com/Elements-Programming-Interviews-Insiders-Guide/dp/1517671272)

**Online Platforms & Tags**

- [LeetCode “Amazon” Tag](https://leetcode.com/problemset/all/?companySlug=amazon)
- [GeeksforGeeks Amazon Interview Experience](https://www.geeksforgeeks.org/amazon-interview-experience-set-491/)

**Articles & Blogs**

- [How to Crack Amazon SDE Interview](https://www.geeksforgeeks.org/cracking-the-amazon-software-development-engineer-sde-interview-2020/)

**YouTube Channels & Playlists**

- [NeetCode (@NeetCode)](https://www.youtube.com/@NeetCode) – search “NeetCode Amazon”
- [TechLead (@TechLead)](https://www.youtube.com/@TechLead) – search “TechLead Amazon interview tips”

## 5-week training plan

### Week 1: Arrays, Hash Tables & Easy “Amazon” Problems

**Goals**

- Master array manipulations, frequency counting, prefix sums, two-sum variants
- Build fluency with hash maps (distinct counts, O(1) lookup, collision handling)

**Problems (12 Easy/Medium)**

- [ ] [#1 Two Sum](https://leetcode.com/problems/two-sum/) - Easy
- [ ] [#560 Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) - Medium
- [ ] [#238 Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) - Medium - 60-day: Day 5
- [ ] [#36 Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) - Medium
- [ ] [#49 Group Anagrams](https://leetcode.com/problems/group-anagrams/) - Medium
- [ ] [#347 Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) - Medium - curated: Netflix, Uber | 60-day: Day 17, 19
- [ ] [#451 Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/) - Medium
- [ ] [#350 Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) - Easy
- [ ] [#219 Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/) - Easy
- [ ] [#242 Valid Anagram](https://leetcode.com/problems/valid-anagram/) - Easy
- [ ] [#202 Happy Number](https://leetcode.com/problems/happy-number/) - Easy - 10-week: Week 2
- [ ] [#387 First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) - Easy

**Study actions**

- Solve in ≤ 20 minutes; review if > 20 minutes
- Write down hash map edge cases (null, duplicates, large ranges)
- Re-implement from scratch three times by hand

### Week 2: Trees & Binary Search Trees (BST)

**Goals**

- Master tree traversal, BFS-level order, recursive/iterative DFS
- Understand BST invariants and common BST queries (search, insert, delete, kth smallest)

**Problems (10 Medium)**

- [ ] [#226 Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) - Easy
- [ ] [#98 Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) - Medium - curated: Microsoft
- [ ] [#230 Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) - Medium
- [ ] [#103 Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) - Medium - curated: Meta | 60-day: Day 31
- [ ] [#235 Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) - Medium - article name: Lowest Common Ancestor of a BST
- [ ] [#297 Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) - Hard
- [ ] [#104 Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) - Easy - 60-day: Day 32
- [ ] [#102 Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) - Medium - curated: Meta | 60-day: Day 22, 31 | 10-week: Week 4
- [ ] [#116 Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) - Medium
- [ ] [#543 Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) - Easy - curated: Microsoft | 60-day: Day 32

**Study actions**

- Draw 5–6 small trees; perform inorder/preorder/postorder on paper
- Write iterative BFS/DFS (stack/queue) in ≤ 15 minutes
- For BST problems, sketch tree shape and validate pointers

### Week 3: Heaps, Sorting & Basic Dynamic Programming

**Goals**

- Understand heap operations (push/pop) in O(log n)
- Master DP templates (1D knapsack, LIS)
- Reinforce sorting algorithms (quick/merge) and their trade-offs

**Problems (10 Medium)**

- [ ] [#215 Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) - Medium - curated: Netflix, Uber | 60-day: Day 17, 28
- [ ] [#347 Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) - Medium - note: if not done in Week 1 - curated: Netflix, Uber | 60-day: Day 17, 19
- [ ] [#451 Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/) - Medium - note: if not done in Week 1
- [ ] [#56 Merge Intervals](https://leetcode.com/problems/merge-intervals/) - Medium - curated: Netflix, Airbnb | 60-day: Day 11, 19 | 10-week: Week 2
- [ ] [#253 Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) - Medium (Premium) - 10-week: Week 2
- [ ] [#198 House Robber](https://leetcode.com/problems/house-robber/) - Medium - 10-week: Week 6
- [ ] [#70 Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) - Easy - 10-week: Week 6
- [ ] [#1143 Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) - Medium - curated: Microsoft | 60-day: Day 45, 49 | 10-week: Week 7
- [ ] [#322 Coin Change](https://leetcode.com/problems/coin-change/) - Medium - curated: Google | 60-day: Day 42, 49 | 10-week: Week 6
- [ ] [#139 Word Break](https://leetcode.com/problems/word-break/) - Medium

**Study actions**

- Implement a min-heap from scratch or use built-in; note complexities
- Write DP recurrence relations by hand (e.g., dp[i] = max(dp[i−1], dp[i−2]+nums[i]))
- Time each DP solution; verify O(N×M) or O(N log N)

### Week 4: Graphs & Advanced Dynamic Programming

**Goals**

- Master BFS/DFS on directed/undirected graphs, cycle detection, topological sort
- Cover advanced DP (2D DP: matrix path, edit distance)
- Solve graph + DP mixed problems in ≤ 35 minutes

**Problems (10 Medium/Hard)**

- [ ] [#200 Number of Islands](https://leetcode.com/problems/number-of-islands/) - Medium - note: if not done - 10-week: Week 4
- [ ] [#207 Course Schedule](https://leetcode.com/problems/course-schedule/) - Medium - note: or II - curated: Google | 60-day: Day 25 | 10-week: Week 10
- [ ] [#127 Word Ladder](https://leetcode.com/problems/word-ladder/) - Hard - curated: Amazon, Meta | 60-day: Day 23
- [ ] [#79 Word Search](https://leetcode.com/problems/word-search/) - Medium - curated: Google, Airbnb | 60-day: Day 37 | 10-week: Week 4
- [ ] [#329 Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) - Hard
- [ ] [#209 Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) - Medium - curated: Amazon | 60-day: Day 4, 9 | 10-week: Week 1
- [ ] [#340 Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) - Medium (Premium)
- [ ] [#72 Edit Distance](https://leetcode.com/problems/edit-distance/) - Medium - curated: Google, Microsoft | 60-day: Day 45, 49 | 10-week: Week 7
- [ ] [#62 Unique Paths](https://leetcode.com/problems/unique-paths/) - Medium - 10-week: Week 7
- [ ] [#212 Word Search II](https://leetcode.com/problems/word-search-ii/) - Hard - note: if not done in Week 3

**Study actions**

- Write Kahn’s algorithm & DFS cycle detection from scratch
- Trace DP tables on paper for edit distance & unique paths
- Optimize recursive solutions with memoization; compare top-down vs. bottom-up

### Week 5: Mock Interviews & Feedback Loop

**Goals**

- Simulate 3 timed “Amazon” mocks (45 minutes each)
- Identify bottlenecks (slow DP transitions, graph pitfalls)
- Sharpen verbal explanation: articulate time/space trade-offs

**Actions and platforms**

- Peer Mock: Rotate roles; keep strict time
- Online Mock:
  - [Pramp](https://www.pramp.com/) – search “Amazon”
- Self-Review:
  - List problems that took > 30 minutes
  - Re-solve in ≤ 25 minutes
  - Record audio of your explanation; critique clarity
