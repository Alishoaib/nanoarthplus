nano.controller('defaultController',
                         function ($http, $scope, $location, $routeParams,$anchorScroll, $route, $rootScope) {
							 menu();
							 carouselProducts($http, $scope);
							 getCarouselCategories($http, $scope);
							
							 });
////main controller ends here

function carouselProducts($http, $scope){
	$http.get(context+'Nano/productForSlider').success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.carouselProducts = data.object;
	}else{
		getErrorNotificationmsg('No Record Found');
	}
        fadeOutLoading();
    });
}

function getCarouselCategories($http, $scope){
	$http.get(context+'Nano/categoryForSlider').success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.categories = data.object;
	}else{
		getErrorNotificationmsg('No Record Found');
	}
        
    });
}
