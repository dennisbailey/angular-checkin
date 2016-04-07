app.config(function($routeProvider) {
    $routeProvider
      .when('/details', {
        templateUrl: './partials/details.html',
        controller: 'detailsController'
      })
      
      .when('/charges', {
        templateUrl: './partials/charges.html',
        controller: 'chargesController'
      })
      
      .when('/earnings', {
        templateUrl: './partials/earnings.html',
        controller: 'earningsController'
      })
      
      .otherwise('/details');
});
