
var app = angular.module("myApp",["ngRoute"]);



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


app.controller('zomatoCtrl',[
	'$scope',
	'$http',
	function($scope, $http){
		// var categories = $resource('https://developers.zomato.com/api/v2.1/categories?user_key=b9a7f37a405a0b234d0e9b0714e80d1d')
		$http({
			method: 'GET',			  
			headers: {	
				'Accept':'application/json',
			  	'user_key':'b9a7f37a405a0b234d0e9b0714e80d1d'
			},
			url: 'https://developers.zomato.com/api/v2.1/geocode?',
			params: {
				lat: '18.5204303',
				lon: '73.8567437'
			}
			}).then(function successCallback(response) {
			    // this callback will be called asynchronously
			    // when the response is available
			    console.log('success');
			    res.send(response);


			    	})

			  
}
	


	])

