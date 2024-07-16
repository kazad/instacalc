# Guide: Financial Functions

Financial calculations (loans, savings) is a oft-needed calculation, and tricky to do by hand.

While you can use Excel-style functions (`PMT`), that is cumbersome. You can now do financial calculations in natural language:

https://instacalc.com/57582

<iframe src="https://instacalc.com/57582/embed" width="100%" height="750" frameborder="0"></iframe>

Behind the scenes, Instacalc finds a keyword (`loan`), sees if relevant parameters are there (time period, rate, amount) and constructions the function call. You can directly call `loan(5%, 400k, 30 years)` as well.