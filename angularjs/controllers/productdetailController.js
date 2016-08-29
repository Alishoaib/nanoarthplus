nano.controller('productdetailController',
                         function ($http, $scope, $location, $routeParams,$anchorScroll, $route, $rootScope) {
							 	$scope.productdetail = [];
								productdetail($http, $scope,$routeParams);
							 });
function productdetail($http, $scope,$routeParams){
	$http.get(context+'Nano/productdetail/'+$routeParams.prodid).success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.productdetail = data.object;
	}else{
		getErrorNotificationmsg('No Record Found');
	}
        
    });
}
