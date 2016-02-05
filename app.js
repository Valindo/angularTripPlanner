var app = angular.module("myApp",['ui.router']);

// app.config(function($routeProvider){
// 	$routeProvider.when('/', {
// 		templateUrl: 'views/search',
// 		controller: 'searchCtrl'
// 	});
// });


app.controller('searchCtrl',['$scope',function($scope){
	$scope.test = "man";
}])


app.controller('zomatoCtrl',[
	'$scope',
	'$http',
	function($scope, $http){
		// var categories = $resource('https://developers.zomato.com/api/v2.1/categories?user_key=b9a7f37a405a0b234d0e9b0714e80d1d')

				$http({
			  method: 'JSONP',
			  
			  headers: {	'Accept':'application/json',
			  		'user_key':'b9a7f37a405a0b234d0e9b0714e80d1d'},
			  url: 'https://developers.zomato.com/api/v2.1/categories'
			}).then(function successCallback(response) {
			    // this callback will be called asynchronously
			    // when the response is available
			    console.log('success');
			    res.send(response);


			    	})

			  
}
	


	])

