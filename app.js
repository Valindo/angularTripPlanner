
var app = angular.module("myApp",["ngRoute"]);




app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
	$routeProvider.when('/',{
		templateUrl: 'views/search.html',
		controller: 'searchCtrl'
	}).when('/flight',{
		templateUrl: '/views/flightdetails.html'
	});
	$locationProvider.html5Mode(true);
}])

app.factory("locationInfo",[function(){
	var currentLocation = {
		lat: 0,
		lon: 0,
		aiportInfo: "",
		departureTime: "",
		flightNumber: ""
	}
	return currentLocation
}]);


app.controller('getLocation', ['$scope','locationInfo', function($scope,locationInfo){
	$scope.callToGetLocation = function(){
		if (navigator.geolocation) {
        	navigator.geolocation.getCurrentPosition(showPosition);
    	} else { 
        	console.log("Big booty bitches");
    	}
	function showPosition(position) {
    	locationInfo.lat =  position.coords.latitude; 
    	locationInfo.lon = position.coords.longitude;	
    	console.log(locationInfo.lat);
    	console.log(locationInfo.lon);
	}
}
	
}]);


app.controller('flightPageDisplay', ['$scope','locationInfo', function($scope , locationInfo){
	$scope.lat = locationInfo.lat;
	$scope.lon = locationInfo.lon;
	$scope.airportName = locationInfo.airportInfo;
}])




app.controller('searchCtrl',['$scope','$http','locationInfo',function($scope, $http,locationInfo){


$scope.getFlightDetails = function(){
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
	locationInfo.flightNumber = $scope.flightDetails;

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
		console.log(json["appendix"]["airports"][0]["name"]);
		locationInfo.airportInfo = json["appendix"]["airports"][0]["name"];
	}, function(response){

	})
}

}]);

//fetch current lat-lon















app.controller('foodCtrl',['$scope','$http','locationInfo',function($scope, $http, locationInfo){
		// var categories = $resource('https://developers.zomato.com/api/v2.1/categories?user_key=b9a7f37a405a0b234d0e9b0714e80d1d')
			
			
		$scope.getFoodPlaces = function(){		$http({
			  method: 'GET',
			  url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?',
			  params : {
			  	
						  	"location" :locationInfo.lat+","+locationInfo.lon, //lat+lon
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
		}
	}



	]);


