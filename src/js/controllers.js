app.controller('detailsController', ['$scope', 'mealDataService', 
  function($scope, mealDataService) {
  // Crate a counter for the page
  $scope.counter = mealDataService.totals.count + 1;
  
  // Add a meal 
  $scope.addMeal = function (meal) {

    mealDataService.addMeal(meal);
    
    $scope.meal = {};
    
    $scope.counter += 1;
  };
  
}]);


app.controller('chargesController', ['$scope', 'mealDataService', 
  function($scope, mealDataService) {
  //Default values
  $scope.position = mealDataService.meals.length;
  $scope.index = $scope.position - 1;
  
  // Get the array of meals
  $scope.getMeals = function () {
    $scope.meals = mealDataService.getMeals();
    console.log($scope.meals);
  };
  
  // Advance through the meals. If you're at the end loop back to the beginning
  // Update the position and index variables
  $scope.next = function() {
    if ($scope.position < mealDataService.meals.length) {
      $scope.position = $scope.position + 1;
    } else {
      $scope.position = 1;
    }
    $scope.index = $scope.position - 1;  
  };
  
  // Back through the meals. If you're at the beginnign loop back to the end
  // Update the position and index variables
  $scope.prev = function() {
    if ($scope.position > 1) {
      $scope.position = $scope.position - 1;
    } else {
      $scope.position = mealDataService.meals.length;
    }
    $scope.index = $scope.position - 1;
  };
  
  // Invoke the function so that there's some data to populate the page
  $scope.getMeals();

}]);


app.controller('earningsController', ['$scope', 'mealDataService', 
function($scope, mealDataService) {
  
  // Get the totals from the service
  $scope.getTotals = function() {
   $scope.cumulative = mealDataService.getCumulative();
  };
  
  // Invoke the function so that there's some data to populate the page
  $scope.getTotals();
  
}]);

app.controller('resetController', ['$scope', 'mealDataService', 
function($scope, mealDataService) {
  
  // Empty the meals array and the totals object
  $scope.reset = function() {
    mealDataService.resetAll();
  };

}]);