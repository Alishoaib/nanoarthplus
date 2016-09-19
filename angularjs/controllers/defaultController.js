nano.controller('defaultController',
                         function ($http, $scope, $location, $routeParams,$anchorScroll, $route, $rootScope) {
							 // getHpmeProducts($http, $scope);
							 getMenuCategories($http, $scope);
							 carouselProducts($http, $scope);
							 getCarouselCategories($http, $scope);
							 getLImitProducts($http, $scope);
							 });
////main controller ends here

function getHpmeProducts($http, $scope){
	loading();
	$http.get(context+'Nano/allProducts').success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.products = data.object;
	}else{
		getErrorNotificationmsg('No Record Foundssss');
	}
        
    });
}

function getLImitProducts($http, $scope){
	$http.get(context+'Nano/allProductsLimit/8').success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.productsLimit = data.object;
	}else{
		getErrorNotificationmsg('No Record Foundssss');
	}
        
    });
}

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

function getCarouselCategories($http, $scope){
	$http.get(context+'Nano/categories').success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.categories = data.object;
	}else{
		getErrorNotificationmsg('No Record Found');
	}
        
    });
}
