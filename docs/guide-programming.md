# Programming Calculator

Instacalc supports most JS syntax for hex and byte manipulation:

<iframe src="https://instacalc.com/50008/embed" width="100%" height="650" frameborder="0"></iframe>

A few notes:

* While most JS syntax is allowed (`if/else`, `? :`, `"some string"`), loops/functions are not.
* Data units (`GB`, `MB`) are base 2 (help text explains this). Use `MB_SI` for base 10.
* Functions can be called in several ways:
  * `123 as bin`
  * `123 -> bin`
  * `bin(123)`
* Binary operators (`AND`, `XOR`, `NOT`) are usually invoked with that keyword. The operators `&`, `|` and `^` work with binary/hex arguments:  `0x123 ^ 0x456` is `XOR`, not an exponent (root issue: disambiguating the carat symbol `^`).

## Example

Explaining big-endian/little-endian and byte swapping:

<iframe src="https://instacalc.com/1067/embed" width="100%" height="550" frameborder="0"></iframe>

