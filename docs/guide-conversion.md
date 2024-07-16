# Guide: Unit Conversion

Instacalc can handle complex unit conversions, including custom units. The general format:

* `72 C as F`
* `15 miles/hour in feet/sec`
* `15 sales/day in minutes/sale`
* `15 mph @ 10 hours`

The big features are:

* Regular conversions keywords: `in` `as` `into` `->`
* Custom units / dimensional analysis:
  * `15 minutes/game in games/hour` treats 'game' as a unit that can be compared. Singular/plurals are handled reasonably well.
* Autosolve: `@`,  `at` , `with`, which finds the best conversion. Example: 
  * `15 mph @ 3 hours` results in distance traveled
  * `200 feet/s @ minutes` results in `feet/minute`
  * `300 mpg @ $3/gallon @ 10 miles` results in total cost
  * Autosolve is pretty magical, try it out!



## Demo

https://instacalc.com/57486


<iframe src="https://instacalc.com/57486/embed" width="100%" height="1050" frameborder="0"></iframe>



