# Instacalc vs Other Tools

Instacalc is my sweet spot for a calculation tool:

* Easy access: web-based, no install
* Anonymous sharing / embeds
* Powerful yet forgiving syntax
* Hide complex calculations (and still show input parameters)
* User-friendly (large fonts, reasonably pretty, not a scary grid)

![image](https://github.com/kazad/instacalc/assets/115572/ed7d048e-1d99-421b-90c7-b3647ad15a9e)

Here's a few thoughts on finding the best number crunching tool for the job..

| Tool                   | Features | Ease of Use | Share/Embed |
| ---------------------- | -------- | ----------- | ----------- |
| Basic Calculators      | Low      | High        | Low         |
| Instacalc              | Med/High | Med/High    | High        |
| Text-based Scratchpads | Med/High | Med/High    | Low         |
| Spreadsheets           | Med/High | Low         | Low         |
| Programming Tools      | High     | Low         | Low         |

## Easy: Calculators

<img src="https://github.com/kazad/instacalc/assets/115572/f9582570-6020-48cb-988d-2553274f2ae6" height="200">

Here's our trusty pocket calculator.

* Likes: Simple, familiar, preinstalled.
* Limitations: Multi-step calcualtions, edit typos in previous inputs. Not easy to share thought process.

Like everyone else, I reach for this when I need a fast one-off answer.

## Medium: Calc Scratchpads

<img src="https://github.com/kazad/instacalc/assets/115572/79c37494-69a9-49ab-9868-634695a7ac58" height="200">

<img src="https://github.com/kazad/instacalc/assets/115572/03a4cbf4-6dcc-404e-9830-07a61819309d" height="200">

Soulver, Numi, Apple Notes and other scratchpads take a text-first approach. These tools tend to be "doc-first": you write text, with calculations sprinked in. (Words are ignored, numbers & symbols are used for calculations).

* Likes: Simple to edit, copy/paste multiple lines, minimalist UI

* Limitations: Hard to make a "calculator", with editable variables separate from computed results.

  

  For example, here's my blog, where I'm explaining Bayes' Theorem:

<img src="https://github.com/kazad/instacalc/assets/115572/1fa33fda-25dc-4310-9dec-318141c96e70" height=400 />

I have an article (lots of text) and finally want to add a quick demo of the equation. I'd like to hide the complexity of the formula, and just show the results. Compare the screenshot above to the text version:

```
Bayes Theorem

Actual_probability = 1%                        = 1%
Prob_true_positive = 80%                       = 80%
Prob_false_positive = 9.6%                     = 9.6%
Chance positive test means positive result
$$(r1 * r2)/((r1 * r2) + r3*(1-r1)) * 100      = 7.76 %
```

While usable, I want to hide the gnarly formula while people play with the numbers.

In addition to the UX difference, I find most scratchpad tools have a limited syntax (or are built on MathJS), without the full power I wanted. See: [Wolfram Alpha compare](/compare-wolfram.md) for the types of calculations I want to handle.

The dedicated apps also make it difficult to share/embed your numbers (some are web-based, however).

Still, I enojy the clean look of these text-first tools. As a homage to that style, I made Calcr, instacalc in scratchpad form: https://calcr.com/

<img src="https://github.com/kazad/instacalc/assets/115572/13f92dad-e56c-450c-9d4d-e8b781a1fc5a" height="200">

## Advanced: Excel

Spreadsheets are our familiar, big-mamma-jamma number crunching tool.

<img src="https://github.com/kazad/instacalc/assets/115572/2c78a14d-bb3a-4396-ae90-87a7223befd0" height=200 />

I think the comparison is pretty clear:

* Like: Powerful, well-known
* Drawback: Overkill for most users. Thousands of cells, tiny fonts, difficult syntax, feels like work, hard to share.

## Advanced: Programming tools (Frink, JS)

<img src="https://github.com/kazad/instacalc/assets/115572/f498d85a-4ea5-4d0f-8573-1ddd1d71912b" height="250">

Programming tools/REPLs can work for quick calculations. However, they are programming languages, with the fiddly syntax, and too difficult for the average user.