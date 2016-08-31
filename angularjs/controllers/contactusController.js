nano.controller('contactusController',
                         function ($http, $scope, $location, $routeParams,$anchorScroll, $route, $rootScope) {
							 $scope.contactus = function(){
								 $scope.jsn = { 
								 				"name":$scope.name,
								 				"email":$scope.email,
												"message":$scope.message
								 };
								$http({
                                                   method : 'PUT',
                                                   url   : context + 'Nano/contactus',
                                                   headers: {'Content-Type': 'application/json'},
                                                   data   : $scope.jsn
                                               }).success(function (data) {
												   
                                             if (data.status === "SUCCESS") {
                                                getSuccessNotificationmsg('Thank you for contacting us. You email has been received. We ll contact you soon');

                                             } else {
                                                getErrorNotificationmsg('Error Occure');
                                             }
                                         }).error(function (data) {
                                             getErrorNotificationmsg('Error Occure');
                                         });
							 }
							 });
////main controller ends here