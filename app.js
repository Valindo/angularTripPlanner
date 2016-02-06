
var app = angular.module("myApp",["ngRoute"]);




app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/',{
		templateUrl: 'views/search.html',
		controller: 'searchCtrl'
	})
}])


app.controller('getLocation', ['$scope', function($scope){
	$scope.callToGetLocation = function(){
		if (navigator.geolocation) {
        	navigator.geolocation.getCurrentPosition(showPosition);
    	} else { 
        	console.log("Big booty bitches");
    	}
	

	function showPosition(position) {
    	$scope.lat =  position.coords.latitude; 
    	$scope.lon = position.coords.longitude;	
    	console.log($scope.lat);
    	console.log($scope.lon);
	}
}
	
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
	// 	$http.post("https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCkLKyLgo71Fu_2pSaIQXfEQ5SsJHGcU5Q", $scope.data ).success(function( data, status, headers, config){
	// 		$scope.print = data;
	// 	console.log(data);
	// }).error(function(data,status,headers,config){
	// 	console.log("BRRR");
	// })
	// $scope.flightCode = $scope.flightDetails.match(/[A-Z]/g).replace(/,/g,"");
	// console.log($scope.flightCode);
	// $scope.flightNumber = parseInt($scope.flightDetails.match(/[0-9]/g).join().replace(/,/g,""));
	// console.log($scope.flightNumber);
	$scope.flightDetails = $scope.flightDetails.toUpperCase();
	$scope.flightCode = String($scope.flightDetails).replace(/[0-9]/g,"");
	$scope.flightNumber = parseInt($scope.flightDetails.replace(/[A-Z]/g,""));
	$http({
		method: "GET",
		url: "https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/"+$scope.flightCode+"/"+$scope.flightNumber+"/dep/2016/02/06?appId=6a6c02d7&appKey=20e4b459aefb18c1b86e4bf9d26f223b&utc=false",	
	}).then(function(response){
		console.log(response.data);
		var jsonString = JSON.stringify(response.data);
		var json = JSON.parse(jsonString);
		console.log(typeof(response.data));
	}, function(response){

	})
}

}]);

//fetch current lat-lon















app.controller('foodCtrl',[
	'$scope',
	'$http',
	function($scope, $http){
		// var categories = $resource('https://developers.zomato.com/api/v2.1/categories?user_key=b9a7f37a405a0b234d0e9b0714e80d1d')
			
			
				$http({
			  method: 'GET',
			  url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?',
			  params : {
			  	
						  	"location" :"-33.870775,151.199025", //lat+lon
			  				"radius": 500,
			  				"types" :"food",
			  				"key":'AIzaSyCkLKyLgo71Fu_2pSaIQXfEQ5SsJHGcU5Q'
			  			}
			}).success(function (data,status){
			    // this callback will be called asynchronously
			    // when the response is available
			    console.log("success");
			    $scope.foodData = data;
			    console.log(data);
			    });
		},



	])


app.controller('etaCtrl',['$scope', '$http', var eta=function($scope, $http){
	$http({
		method:'GET',
		url:'https://maps.googleapis.com/maps/api/distancematrix/json?origins=15.2993260,74.1239960&destinations=Dabolim+Airport&key=AIzaSyAQnbuaV4vimAOtYPVZvACuxPnVYgayKfY'
	}).success(function(data,status{
		console.log(data);
	}))
}])