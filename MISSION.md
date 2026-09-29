# Mission: Git for Vibe Coding

## Why
I vibe code — I orchestrate AI agents that write most of the code, and I want to do it safely. Git is the oversight layer that makes that possible: review what the agent did, roll back when it breaks something, and keep a history I can trust. When I can do that without fear, I can build bigger things faster.

## Success looks like
- I run the checkpoint loop (clean tree → agent works → diff gate → keep or roll back) on any project without thinking about it
- I can read a `git diff` and spot intent drift: things the agent changed that I never asked for
- When the agent breaks something, I recover cleanly in under a minute, and I know exactly which undo command touches what
- I let the agent experiment on feature branches and merge back only what's good
- My commit history stays clean and reviewable, even though the agent wrote 90% of it

## Constraints
- I already know git basics: init, clone, add, commit, push, pull, basic branching (self-reported 2026-09-27)
- Short lessons preferred; learn in the context of real projects and a real agent, not abstract theory
- Open questions (to confirm): which agent tools do I vibe code with? what kind of projects? solo or team?

## Out of scope
- Distributed git, server administration, hooks
- Team-scale collaboration protocols (until the open questions above are answered)
- Un-learning to code by hand — the mission is orchestrating agents well, not reverting to manual coding
