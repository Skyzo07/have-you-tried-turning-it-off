# Have You Tried Turning It Off?

One funny line from a hopeless tech support agent to a desperate customer — an entry for [Have You Tried Turning It Off?](https://make.fun/c/u-motasimfuad-have-you-tried-turning-it-off-154a938b) on make.fun.

[![make.fun](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/c/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/Skyzo07/have-you-tried-turning-it-off/rank.svg)](https://make.fun/c/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/Skyzo07/have-you-tried-turning-it-off/reward.svg)](https://make.fun/c/u-motasimfuad-have-you-tried-turning-it-off-154a938b)

## The line

> I'm going to put you on a brief hold while I Google your exact problem — out loud, if that's okay.

## How it works

`main.ts` (Node, no network) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), with no trailing newline — the line is the whole file. It refuses to write if the line ever falls outside the 1–199 character gate.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
