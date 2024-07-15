Instacalc hits my personal sweet spot for a calculation tool:

* Easy access (web-based, zero install)
* Anonymous sharing / embeds
* Powerful yet forgiving syntax
* Can hide complexity (show editable parameters, hide complex calculations)
* User-friendly (reasonably pretty themes)

![image](https://github.com/kazad/instacalc/assets/115572/ed7d048e-1d99-421b-90c7-b3647ad15a9e)


A few thoughts on finding the best tool for the job...

| Tool                   | Features | Ease of Use | Share/embed |
| ---------------------- | -------- | ----------- | ----------- |
| Basic Calculators      | Low      | High        | Low         |
| Instacalc              | Med/High | Med/High    | High        |
| Text-based Scratchpads | Med/High | Med/High    | Low         |
| Spreadsheets           | High     | Low         | Low         |
| Programming Tools      | High     | Low         | Low         |

## Basic: Calculators

<img src="https://github.com/kazad/instacalc/assets/115572/f9582570-6020-48cb-988d-2553274f2ae6" height="200">

Ah, the old trusty calculator.

* Likes: Simple, easy to read, familiar, preinstalled
* Wishlist: Made for one-time calculations, but not typos/previous results/multi-step calculations. Hard to share editable version with thought process, just copy-paste result.

I still reach for this when I need a single one-off result.

## Intermediate: Text-based calc scratchpads

<img src="https://github.com/kazad/instacalc/assets/115572/79c37494-69a9-49ab-9868-634695a7ac58" height="200">

<img src="https://github.com/kazad/instacalc/assets/115572/03a4cbf4-6dcc-404e-9830-07a61819309d" height="200">

Soulver, Numi, etc. have a text-first approach: you have a text file, with calculations sprinkled in. Instacalc is more like a spreadsheet: you have separate cells, with text possibly added.

* Likes: Simple to edit, copy/paste multiple lines, minimalist UI
* Wishlist: Hard to separate editable variables from computed results. Here's a screenshot from my blog

<img src="https://github.com/kazad/instacalc/assets/115572/1fa33fda-25dc-4310-9dec-318141c96e70" height=400 />

As a text scratchpad:

```
Bayes Theorem

Actual_probability = 1%                        = 1%
Prob_true_positive = 80%                       = 80%
Prob_false_positive = 9.6%                     = 9.6%
Chance positive test means positive result
$$(r1 * r2)/((r1 * r2) + r3*(1-r1)) * 100      = 7.76 %
```

I want to let people play with the variables without seeing the gnarly formula (they can click to expand it).

* Feature-limited: Most scratchpad tools have a limited syntax (or are built on MathJS) without the full power I wanted (see: [Wolfram Alpha compare](https://github.com/kazad/instacalc/wiki/Comparison:-Wolfram-Alpha)).

* Desktop apps make it difficult to share or embed (some are web-based)

Overall, I really do like the clean look of these tools. If you like that style, I made Calcr (instacalc in scratchpad form): https://calcr.com/

<img src="https://github.com/kazad/instacalc/assets/115572/13f92dad-e56c-450c-9d4d-e8b781a1fc5a" height="200">

## Advanced: Excel

Spreadsheets are the big-boy number crunching tool.

<img src="https://github.com/kazad/instacalc/assets/115572/2c78a14d-bb3a-4396-ae90-87a7223befd0" height=200 />


Like: Very powerful, well-known

Drawback: Overkill and intimidating for most users. Thousands of 1-inch wide cells. Tiny fonts. Difficult syntax (no commas in numbers!). Feels formal. Difficult to share/embed quickly and anonymously.

## Advanced: Programming tools (Frink, JS)

<img src="https://github.com/kazad/instacalc/assets/115572/f498d85a-4ea5-4d0f-8573-1ddd1d71912b" height="250">

Frink and JS/Python REPLs can work for quick calculations, but they are programming languages, and too difficult for the average user.