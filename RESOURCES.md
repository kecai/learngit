# Git for Vibe Coding — Resources

## Knowledge

- [Post: Karpathy — "vibe coding" (origin, Feb 2025)](https://x.com/karpathy/status/1886192184808149383)
  Coined the term. Key line: "I 'Accept All' always, I don't read the diffs anymore." Grounding for why the diff gate is the central oversight gap this course closes.
- [Post: Karpathy — one-year retrospective, "agentic engineering" (Feb 2026)](https://x.com/karpathy/status/2019137879310836075)
  Vibe coding matured into orchestrating agents *with more oversight and scrutiny*; the goal is agent leverage "without any compromise on quality." Sets the bar for the whole course.
- [Docs: GitHub — "About Git"](https://docs.github.com/en/get-started/using-git/about-git)
  Official overview: repositories, commits as snapshots, branches, the GitHub flow. Use for: canonical terminology and the commit-as-photo model.
- [Article: InventiveHQ — "Git Workflows with AI Coding Assistants"](https://inventivehq.com/blog/git-workflows-ai-coding-assistants)
  Practical AI+git patterns: review every AI-generated commit, guardrails (never let AI force-push, `reset --hard`, or rewrite shared history), feature-branch workflow with AI. Use for: guardrails and workflow patterns.
- [Article: Softr — "9 vibe coding best practices"](https://www.softr.io/blog/vibe-coding-best-practices)
  Track every major AI change with checkpoints, review and test before accepting, regression risk, step-by-step prompting, prompt logs. Use for: safety practices beyond git itself.
- [Book: Pro Git, ch. 2.5 "Undoing Things"](https://git-scm.com/book/en/v2/Git-Tools-Undoing-Things)
  The canonical reference for restore / reset / revert. Use for: primary reading for lesson 1.
- [Book: Pro Git, "Branches in 20 Seconds"](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-20-Seconds)
  Canonical branch mental model (branches as moving pointers, not copies of code). Use for: primary reading for lesson 2.
- [Book: Pro Git, ch. 3.3 "Merging"](https://git-scm.com/book/en/v2/Git-Branching-Merging)
  Conflict markers, the add-then-commit sequence, `merge --abort`, and why git auto-merges most hunks but stops on same-line edits. Use for: primary reading for lesson 3 (divergence, pull, conflicts).
- [Book: Pro Git, "Git Bisect"](https://git-scm.com/book/en/v2/Git-Tools-Bisect)
  Canonical reference for bisect start/bad/good/run/reset, the exit-code contract (0 good · 125 skip · else bad), and why binary search finds the first bad commit in ~log₂(n) steps. Use for: primary reading for lesson 4 (history as debugger).

## Wisdom (Communities)

- [r/git](https://www.reddit.com/r/git)
  Long-running, decently moderated git help community. Use for: sanity-checking "is this the right command?" questions. (Suggested — not yet confirmed with user.)
- The community around whatever agent tool the user codes with (Cursor / Claude Code / Codex forums, etc.)
  Use for: tool-specific git behaviours and safety settings. (To be determined once the user answers which tools they use.)

## Gaps

- No single canonical resource exists yet for "git discipline specific to agent-driven development" — this course synthesises from the sources above. If a well-regarded one appears, add it and prune the weaker entries.
