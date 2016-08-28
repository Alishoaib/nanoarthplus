nano.controller('categoryController', function ($http, $scope, $location, $routeParams, $route, $rootScope) {
							 $scope.category = [];
							 if($routeParams.catid !== undefined){
								 getallsubcategories($http, $scope,$routeParams.catid);
							 }else{
								 getallcategories($http, $scope);
							 }
							 
					});
////main controller ends here
function getallcategories($http, $scope){
	$http.get(context+'Nano/categories').success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.category = data.object;
	}else{
		getErrorNotificationmsg('No Record Found');
	}
        
    });
}

function getallsubcategories($http, $scope,cateid){
	$http.get(context+'Nano/subCategories/'+cateid).success(function (data) {

	if(data.status === "SUCCESS"){
		$scope.category = data.object;
	}else{
		getErrorNotificationmsg('No Record Found');
	}
        
    });
}