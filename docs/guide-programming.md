# Guide: Programming 

Here's a demo calc with some programming commands.

<iframe src="https://instacalc.com/50008/embed" width="100%" height="650" frameborder="0"></iframe>

A few notes:

* Most JavaScript programming syntax is supported (`if/else`, `? :`, strings, etc.). Loops and functions are not.
* File data sizes (`GB`, `MB`) are base 2. You can explicitly use `MB_SI` if you want base 10.
* Functions can be called in several ways:
  * `123 as bin`
  * `123 -> bin`
  * `bin(123)`
* Binary operators (`AND`, `XOR`, `NOT`) are best invoked using that keyword. `&`, `|` and `^` will work if the inputs look like binary or hex numbers (`0x123 ^ 0x456`). The issue here is the carat symbol `^`, most often used as an exponent.



## Examples

Explaining big-endian/little-endian and byte swapping:

<iframe src="https://instacalc.com/1067/embed" width="100%" height="550" frameborder="0"></iframe>

