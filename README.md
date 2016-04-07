# angular-checkin
1. Set up the basic project w/
```yo galvanize-html```

2. Routes
 - /details
 - /charges
 - /earnings
* Have a catch-all that redirects to /details
* Each Route has a separate controllers

3. Add the headers/nav bar and the footer to the index.html page

4. Add the controllers
 - details
 - charges 
 - earnings
 - reset
(Leave them empty for now)

5. Services
Set up a mealDataService w/
- array for meals
- object to store totals
- methods:
  - getMeals (retusn all meals)
  - getCuulaltive Totals (returns totals)
  - addMeal (adds a new meal)
  - resetAll (clears everything)

Wire up the meal details (HTML and controller)
Wire up the charges (HTML and controller)
Wire up the earnings (HTML and controller
Set up the rest Ctrl