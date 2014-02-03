'use strict';

angular.module('d3App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    activeTab: 'home'
  })
  .when('/solar-generation-co2-saved-temperature-over-time', {
    templateUrl: 'views/solar-generation-co2-saved-temperature-over-time.html',
    controller: 'SolarGenerationCo2SavedTemperatureOverTimeCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
}]);