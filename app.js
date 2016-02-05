var app = angular.module("myApp",["ngRoute"]);

// app.config(function($stateProvider, $urlRouterProvider){
// 	// $urlRouterProvider.otherwise("/state1");
// 	$stateProvider.state('test', {
// 		url: "/",
// 		templateUrl: "/views/search.html",
// 		controller: 'searchCtrl'
// 	});

// })


app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/',{
		templateUrl: 'views/search.html',
		controller: 'searchCtrl'
	})
}])



app.controller('searchCtrl',['$scope','$http',function($scope, $http){
	$scope.data = {
  "request": {
    "passengers": {
      "adultCount": 1
    },
    "slice": [
      {
        "origin": "GOI",
        "destination": "BOM",
        "date": "2016-02-06"
      }
    ]   
    
  }
};


$scope.test = function(){
		$http.post("https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCkLKyLgo71Fu_2pSaIQXfEQ5SsJHGcU5Q", $scope.data ).success(function( data, status, headers, config){
			$scope.print = data;
		console.log(data);
	}).error(function(data,status,headers,config){
		console.log("BRRR");
	})
}
}])


