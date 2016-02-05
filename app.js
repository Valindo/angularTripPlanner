var app = angular.module("myApp",['ui.router']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/search',
		controller: 'searchCtrl'
	});
});


app.controller('searchCtrl',['$scope',function($scope){
	$scope.test = "man";
}])

