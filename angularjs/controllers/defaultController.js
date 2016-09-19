nano.controller('defaultController',
                         function ($http, $scope, $location, $routeParams, $route, $rootScope) {
							menu();
							scrolling('top');
							loading();
							 getHpmeProducts($http, $scope);
							 getMenuCategories($http, $scope);

							 });
////main controller ends here

function getHpmeProducts($http, $scope){
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

function getMenuCategories($http, $scope){
	loading();
	$http.get(context+'Nano/categorieslimit/8').success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.categories = data.object;
	}else{
		getErrorNotificationmsg('No Record Found');
	}
        fadeOutLoading();
    });
}
