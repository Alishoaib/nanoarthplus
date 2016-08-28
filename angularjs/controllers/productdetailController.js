nano.controller('productsController',
                         function ($http, $scope, $location, $routeParams,$anchorScroll, $route, $rootScope) {
							 	$scope.products = [];
								productdetail($http, $scope,$routeParams)
							 });
function productdetail($http, $scope,$routeParams){
	$http.get(context+'Nano/productsByCategory/'+$routeParams.id).success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.products = data.object;
	}else{
		getErrorNotificationmsg('No Record Found');
	}
        
    });
}
