var nano = angular.module('nano',['ngRoute']);
nano.config(['$httpProvider', '$routeProvider','$locationProvider',
                      function ($httpProvider, $routeProvider,$locationProvider) {
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
							  .when('/category/:catid', {
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
							  .when('/products/:id', {
                                  templateUrl: 'template/products.html',
                                  controller : 'productsController'
                              })
							  .when('/products/:str', {
                                  templateUrl: 'template/products.html',
                                  controller : 'productsController'
                              })
							  .when('/product/:prodid', {
                                  templateUrl: 'template/product.html',
                                  controller : 'productdetailController'
                              })
                              .otherwise({redirectTo: '/errorPages/404.html'});
							  
							  $locationProvider.html5Mode({
                                                  enabled    : true,
                                                  requireBase: false
                                              });

                      }]);
