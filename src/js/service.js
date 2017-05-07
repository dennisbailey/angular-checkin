app.factory("mealDataService", function () {
  return {
    
    // Array to store all the meals
    meals: [
            {
              price: 100,
              tax: 0.0825,
              tip: 0.30
            }
           ],
    
    // Object to store running totals
    totals: { 
              subtotal: 100,
              tip: 30,
              total: 138.25,
              count: 1
            },
    
    // Function to return the meals array
    getMeals: function() {
      return this.meals;
    },
    
    // Function to return the running totals
    getCumulative: function () {
      return this.totals;
    },
    
    // Function to add a meal to the meals array
    addMeal: function(meal) {
      // Push the meal object to the meals array
      this.meals.push(meal);
      
      // Calculations to update the running totals
      this.totals.subtotal += parseFloat(meal.price);
      this.totals.tip += parseFloat(meal.price * (1 + meal.tax) * meal.tip);
      this.totals.total = parseFloat(meal.price * (1 + meal.tax) * (1 + meal.tip));
      this.totals.count += 1;
    },
    
    // Function to burn it all to the ground
    resetAll: function() {
      this.meals = [];
      this.totals = { subtotal: 0,
                      tip: 0,
                      total: 0,
                      count: 0
                    };
    }
    
  };

});