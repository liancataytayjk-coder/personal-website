# Templates

Copy these when creating files. Replace everything in `<angle brackets>`.

## `projects/PLAN.md`

```markdown
# Portfolio plan

## Profile

- **Field / target role:** <e.g. Economist moving into data science>
- **Skills to prove:** <skill 1>, <skill 2>, <skill 3>
- **Tools I use:** <e.g. Python, pandas, Excel>
- **Tools I want to learn:** <e.g. R, SQL, D3>
- **Daily time budget:** <60> minutes
- **Topics I care about:** <e.g. Philippine inflation, transport, food prices>
- **Where I am (for dates):** <City, Country>

## Weekly rhythm

| Day | Track |
| --- | --- |
| Mon | Build |
| Tue | Data |
| Wed | Recreate |
| Thu | Explain |
| Fri | Extend |
| Sat | Explore |
| Sun | Review + micro-project |

## Up next

- <Tomorrow's pick: title, plus "Done means…">

## Idea backlog

### Build
- <title>: <one-line pitch>. Done means <…>.

### Data
- <title>: <dataset + question>. Done means <…>.

### Recreate
- <title>: <what you'll rebuild, with a link to the original>. Done means <…>.

### Explain
- <title>: <concept + example>. Done means <…>.

### Explore
- <title>: <new tool + tiny project>. Done means <…>.

## Done

<Move ideas here, with the folder name, once they ship.>
```

## `projects/README.md`

```markdown
# Daily projects

One small, finished project a day. Each folder holds the code, the data or a script that downloads it, and a write-up.

**Streak:** <N> days · **Total shipped:** <N> · **Since:** <Month D, YYYY>

| Day | Date | Project | Track | Skills |
| --- | --- | --- | --- | --- |
| <N> | <YYYY-MM-DD> | [<Title>](<YYYY-MM-DD-slug>/) | <Track> | <skill, skill> |

## Weekly reviews

### Week of <Month D, YYYY>

- **Shipped:** <links>
- **Best of the week:** <title>, because <reason>
- **Skills practiced / skipped:** <…>
- **Change for next week:** <…>
```

## `projects/YYYY-MM-DD-slug/README.md`

```markdown
# <Project title>

**Day <N>** · <Month D, YYYY> · Track: <Track> · Skills: <skill, skill> · Time: <~minutes>

## The problem

<Two or three sentences: what question or need this addresses, and for whom.>

## What I built

<What it is and how it works, in a short paragraph. Mention the key decision or trade-off.>

## Run it

    <exact commands, e.g. pip install -r requirements.txt && python main.py>

<Or: "Open index.html in a browser" / the live link.>

## Result

<Chart, screenshot or sample output, with real numbers only.>

## Data

<Source name, link, and the date retrieved. Or "No external data".>

## What I learned

<In my own words: one or two things I'd now explain to someone else.>

## Next steps

- <What I'd do with another hour>
- <What I'd do with another week>
```
