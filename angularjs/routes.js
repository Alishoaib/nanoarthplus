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
                                  controller : 'aboutusController'
                              })
							  .when('/category', {
                                  templateUrl: 'template/category.html',
                                  controller : 'categoryController'
                              })
							  .when('/contactus', {
                                  templateUrl: 'template/contact.html',
                                  controller : 'contactusController'
                              })
							  .when('/products', {
                                  templateUrl: 'template/products.html',
                                  controller : 'productsController'
                              })
                              .otherwise({redirectTo: '/errorPages/404.jsp'});

                      }]);
