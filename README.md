# DSA & Interview Prep

A public log of my data structures and algorithms practice, Java learning, and interview preparation. Everything here is my own work, committed as I go.

Practice platform: [learn.chethan.xyz](https://learn.chethan.xyz)

## Goals

- Build a solid foundation in Java, then move into data structures and algorithms.
- Solve problems consistently and record what I learned from each one.
- Keep interview notes (behavioral, system design, company experiences) in one place.

## Repository layout

```
.
├── java/                 Java course tracker, one folder per module
│   ├── 01-java-basics/
│   ├── 02-variables-data-types/
│   ├── ...
│   └── 09-arrays/
├── extension/            Chrome extension that auto-commits accepted LeetCode solutions
├── dsa/                  DSA solutions grouped by topic
│   ├── arrays-hashing/
│   ├── two-pointers/
│   └── ...
├── roadmap/              pattern-based, company-wise DSA roadmap and 60-day plan
├── interview-notes/
│   ├── behavioral/       STAR stories
│   ├── system-design/    design notes
│   └── company-experiences/
└── templates/
    └── problem.md        write-up template for a solved problem
```

## Java course

Modules follow the course order on the learn platform. Each module folder has its own README with a lesson checklist, and the solutions sit next to it as `LessonName.java`. See [java/README.md](java/README.md) for the full module list.

| # | Module |
|---|--------|
| 01 | Java Basics |
| 02 | Variables & Data Types |
| 03 | Operators |
| 04 | Conditional Statements |
| 05 | Loops (Flow Control) |
| 06 | Patterns (Part I) |
| 07 | Functions & Methods |
| 08 | Patterns (Part II) - Advanced |
| 09 | Arrays |

## DSA roadmap

Pattern-based and company-wise, with a 60-day plan: see [roadmap/README.md](roadmap/README.md). Covers 22 patterns, 8 companies, 182 problems.

## DSA topics

Arrays & Hashing, Two Pointers, Sliding Window, Stack, Binary Search, Linked List, Trees, Heap, Backtracking, Graphs, DP, Greedy, Intervals, Bit Manipulation, Design.

Solution files are named `NNN-problem-name.<ext>`, where `NNN` is the problem number on the platform it came from.

## Workflow

1. Solve the problem and save it in the matching topic folder.
2. Optionally copy `templates/problem.md` next to it and fill in the approach, complexity, and mistakes.
3. Add a row to the log below and update the progress table.
4. Commit and push, one problem per commit.

## Progress

| Topic | Solved |
|-------|--------|
| Arrays & Hashing | 1 |
| Two Pointers | 0 |
| Sliding Window | 0 |
| Stack | 0 |
| Binary Search | 0 |
| Linked List | 0 |
| Trees | 0 |
| Heap | 0 |
| Backtracking | 0 |
| Graphs | 0 |
| DP | 0 |
| Greedy | 0 |
| Intervals | 0 |
| Bit Manipulation | 0 |
| Design | 0 |

## Log

| Date | Problem | Topic | Difficulty | Notes |
|------|---------|-------|------------|-------|
| 2026-10-19 | [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/) | Arrays & Hashing | Easy | java |

## Running the Java code

Each `.java` file is standalone:

```bash
javac LessonName.java
java LessonName
```

Compiled `.class` files are git-ignored.
