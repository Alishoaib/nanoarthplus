nano.controller('productsController',
                         function ($http, $scope, $location, $routeParams,$anchorScroll, $route, $rootScope) {
							 	menu();
								scrolling('top');
								loading();
								$scope.products = [];
								if($routeParams.id !== undefined){
									getproductsbycategory($http, $scope,$routeParams);
									jQuery('#search').val('');
								}else if($routeParams.str !== undefined){
									getproductbyname($http, $scope,$routeParams);
								}else{
									getallproducts($http, $scope);
									jQuery('#search').val('');
								}
							 });
function getallproducts($http, $scope){
	loading();
	$http.get(context+'Nano/allProducts').success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.products = data.object;
	}else{
		getErrorNotificationmsg('No Record Found');
	}
        fadeOutLoading();
    });
}



function getproductsbycategory($http, $scope,$routeParams){
	loading();
	$http.get(context+'Nano/productsByCategory/'+$routeParams.id).success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.products = data.object;
	}else{
		getErrorNotificationmsg('No Record Found');
	}
        fadeOutLoading();
    });
}

function getproductbyname($http, $scope,$routeParams){
	
	loading();
	$http.get(context+'Nano/productsearch/'+$routeParams.str).success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.products = data.object;
		jQuery('#search').val($routeParams.str);
	}else{
		getErrorNotificationmsg('No Record Found');
	}
        fadeOutLoading();
    });
}
