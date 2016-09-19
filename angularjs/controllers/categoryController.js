nano.controller('categoryController', function ($http, $scope, $location, $routeParams, $route, $rootScope) {
							 menu();
							 scrolling('top');
							 loading();
							 $scope.category = [];
							 if($routeParams.catid !== undefined){
								 getallsubcategories($http, $scope,$routeParams.catid);
							 }else{
								 getallcategories($http, $scope);
							 }
							 
					});
////main controller ends here
function getallcategories($http, $scope){
	loading();
	$http.get(context+'Nano/categories').success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.category = data.object;
	}else{
		getErrorNotificationmsg('No Record Found');
	}
        fadeOutLoading();
    });
}

function getallsubcategories($http, $scope,cateid){
	loading();
	$http.get(context+'Nano/subCategories/'+cateid).success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.category = data.object;
	}else{
		getErrorNotificationmsg('No Record Found');
	}
        fadeOutLoading();
    });
}