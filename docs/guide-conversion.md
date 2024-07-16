# Guide: Unit Conversion

Instacalc can handle complex unit conversions, including custom units.

The big features are:

* Regular conversions keywords (`in` `as` `into` `->`): `15 mph in m/s` or `15 m -> cm`
* Custom units / dimensional analysis:
  * `15 minutes/game in games/hour` - treats 'game' as a unit that can be compared. Singular/plurals are handled reasonably well.
* Autosolve (`@`,  `at` , `with`): Finds the best conversion. For example:
  * `15 mph @ 3 hours` results in distance traveled
  * `200 feet/s @ minutes` results in `feet/minute`
  * `300 mpg @ $3/gallon @ 10 miles` results in total cost
  * Autosolve is pretty magical, try it out!



## Demo

https://instacalc.com/57486


<iframe src="https://instacalc.com/57486/embed" width="100%" height="1050" frameborder="0"></iframe>



