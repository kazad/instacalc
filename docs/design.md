# Design Philosophy

My goal was to make an effortless, forgiving calculation helper. Like a magical "back of the envelope" that figured out what you meant as you write it.

A few principles:

* **Helpful**. Assume that `1/2 cm` means `0.5 cm`, not `1 / (2cm)`. Don't force gnarly syntax gotchas onto the user.
* **Do something reasonable, explain assumptions**. `15 miles/hr in /min` probably means  `15 miles/hr -> miles/min`. Right? What else would it mean? So, instead of an error, do a reasonable conversion and explain what happened.
  * **The user (syntax) is always right**. Let people write how they think, no matter what background they have. `15 x 3` and `15 times 3` and `15 * 3` should all work: the intent is clear. And it's not just beginners: `123 as hex` and `hex(123)` and `123 -> hex` should all work.


## Non-goals

When making a calculation tool, you can go down many feature rabbit holes. Here's what I'm not trying to build:

* **High precision scientific computing.** Instacalc handles reasonable floating-point issues  (such as `.1 + .2 == .3`), but we aren't calculating Pi to 1000 digits. Wolfram Alpha is better.

* **Encyclopedia of arcane units.** I've added most imperial, SI units, currencies, etc., but Frink or GNU Units is more complete.

* **Perfect parsing**. The parser has layers of heuristics, cleaning up input before the final parse. It can be tricked. That's ok.

* **Lots of rows**. At some point, the calc UX breaks down and you want Excel. After a few hundred rows you probably want a different tool.

## Idea: On being "Mostly right"

Is the earth a sphere? No. Strictly speaking, it's an oblate spheroid. So should is "earth == sphere" true?

Let's be helpful, on the user's side. In corner cases, explain what happened, and a savvy user can infer the correct thing. And a new user will be _mostly_ right.

## Idea: On making the easy things easy

We should aim for the "least surprising" interpretation. Examples:

* Including `$` auto-formats as currency: `$22/7 = $3.14` (rounded to cents). That's usually what people want. Allow `$$` for quick rounding without the symbol. (Earlier, `$` just did rounding, which was confusing! People wanted the sign.)

* Including `%` auto-formats as percent: `50% = 50%`. Earlier, it always converted to decimal (`50% = .5`). Only convert to decimal when the percent is _used_ in a calculation: `50% * 3 = 1.5`.

* Fractions like `2/3 cm` are `(2/3) cm` and not the strict `2 / (3cm)`. It's _extremely unlikely_ someone wanted inverse cm. If they do, they can write it `2 / (3 cm)` or `2/3 cm^-1`. However, if you write `x = 3cm`, then `2/x` will have units of inverse cm. Yes, yes, the "substitution" isn't the same, but it's what people expect.

## Book: Don't make me think

[Don't make me think](https://sensible.com/dont-make-me-think/) is the best usability reference I've seen. That simple principle helps shape so many decisions.

* If a user types fractions `1/2 + 1/3`, show the result as a decimal _and_ fraction. (They are probably using fraction math!)

<img width="611" alt="Screenshot 2022-11-19 at 9 31 00 AM" src="https://user-images.githubusercontent.com/115572/202863935-3bbb916f-6b12-4eaa-a1ce-6f45573deec8.png">

* If a user types a hex/bin/oct number (`0xff`), show the result in the other formats. (They are probably doing some bit manipulation!)

<img width="601" alt="Screenshot 2022-11-19 at 9 30 46 AM" src="https://user-images.githubusercontent.com/115572/202863922-e2e64bb1-bfa9-4403-9621-47fd5ead0794.png">

Yes, there are conversion functions (`1/2 + 1/3 as fraction` and `0xff as bin`)... but don't make people think! Just show the likely conversions they need.

* If someone writes with tape measure units (`3' 4" + 3'`), they are _probably not_ creating the string `'4" + 3'`. Don't let string parsing rules interfere with natural unit math. Display the output using the same input tape measure format, but _also_ with decimal (don't make people think about the conversion!).

<img width="638" alt="Screenshot 2022-11-19 at 9 40 53 AM" src="https://user-images.githubusercontent.com/115572/202864278-73c55d7b-6871-4c07-b01e-d14b8c865fd4.png">

## On having the right design

As time goes on, changes should get _easier_. It's clearer where a new unit, conversion, etc. should go. Special cases are handled automatically. A design that easily flexes to add new features, without adding more abstractions, feels like the right one.