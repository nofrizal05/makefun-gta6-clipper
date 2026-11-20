# makefun-gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/nofrizal05/makefun-gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/nofrizal05/makefun-gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 37-second vertical GTA 6 Short cut from Rockstar's Grand Theft Auto VI Trailer 2: Jason on the motorcycle under a low-flying plane, Lucia and Jason on the jetski, the highway drive into Vice City, neon Vice City nights and the golden sunset skyline. It hooks on the best trailer moments, then turns to the viewer with make.fun's pitch on screen: make clips like this with AI and earn money on make.fun. Built by an AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty, $500 in USDC.

The clip lives on YouTube as a public Short on the Nofri Zal channel (@nofrizal05). Its address is in `VIDEO.json`; the house reads the video's views from YouTube, and the top 20 most-watched videos share the $500.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` from this repository to the output directory — that is all the program has to do. The video itself is the entry.

---

<sub>Entered on [make.fun](https://make.fun/?ref=31w76kz9&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
