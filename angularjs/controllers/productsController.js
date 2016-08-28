nano.controller('productsController',
                         function ($http, $scope, $location, $routeParams,$anchorScroll, $route, $rootScope) {
							 	$scope.products = [];
								if($routeParams.id !== undefined){
									getproductsbycategory($http, $scope,$routeParams);
								}else{
									getallproducts($http, $scope);
								}
							 });
function getallproducts($http, $scope){
	$http.get(context+'Nano/allProducts').success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.products = data.object;
	}else{
		getErrorNotificationmsg('No Record Found');
	}
        
    });
}

function getproductsbycategory($http, $scope,$routeParams){
	$http.get(context+'Nano/productsByCategory/'+$routeParams.id).success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.products = data.object;
	}else{
		getErrorNotificationmsg('No Record Found');
	}
        
    });
}
