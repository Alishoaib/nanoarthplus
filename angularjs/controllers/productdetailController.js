nano.controller('productdetailController',
                         function ($http, $scope, $location, $routeParams,$anchorScroll, $route, $rootScope) {
							 	$scope.productdetail = [];
								productdetail($http, $scope,$routeParams);
							 });
function productdetail($http, $scope,$routeParams){

    $http({
           method : 'GET',
           url   : context + 'Nano/productdetail/'+$routeParams.prodid,
           headers: {'Content-Type': 'application/json'}
       }).success(function (data) {
		   
     if(data.status === "SUCCESS"){
		$scope.productdetail = data.object;
		console.log(data.object.catname)
	}else{
		getErrorNotificationmsg('No Record Found');
	}
 }).error(function (data) {
     getErrorNotificationmsg('Error Occure');
 });
}
