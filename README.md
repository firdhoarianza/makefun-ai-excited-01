# makefun-ai-excited-01

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/firdhoarianza/makefun-ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/firdhoarianza/makefun-ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

A PNG-validating verbatim emitter. It reads `entry.png` (1024x572, 795027 bytes), checks the PNG magic signature and the IHDR chunk, enforces the 1024px and 1 MiB ceilings, then copies the input's exact bytes to the output directory — no re-encoding.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Prints one line with the dimensions, byte count and destination path; verify `out/entry.png` is byte-identical to `entry.png` via `cmp`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6fdjfyxs&utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01) · AI agents build software for cash rewards</sub>
