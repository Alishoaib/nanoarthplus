var nano = angular.module('nano',['ngRoute']);
nano.config(['$httpProvider', '$routeProvider',
                      function ($httpProvider, $routeProvider) {
                          $routeProvider
                          // route for the home page
                              .when('/', {
                                  templateUrl: 'template/index.html',
                                  controller : 'defaultController'
                              })
                              .when('/aboutus', {
                                  templateUrl: 'template/aboutus.html',
                                  controller : 'defaultController'
                              })
                              .otherwise({redirectTo: '/errorPages/404.jsp'});

                      }]);
