nano.controller('defaultController',
                         function ($http, $scope, $location, $routeParams,$anchorScroll, $route, $rootScope) {
							 getHpmeProducts($http, $scope)
							 });
////main controller ends here

function getHpmeProducts($http, $scope){
	$http.get(context+'Nano/allProducts').success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.products = data.object;
	}else{
		getErrorNotificationmsg('No Record Found');
	}
        
    });
}
