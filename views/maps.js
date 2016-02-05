angular
.module('Geo', ['ngGeolocation', 'google-maps'])
.controller('geolocCtrl', ['$geolocation', '$scope', function($geolocation, $scope) {

  $geolocation.watchPosition({
    timeout: 60000,
    maximumAge: 250,
    enableHighAccuracy: true
  })

  $scope.$watch('myPosition.coords', function (newValue, oldValue) {
    $scope.map = {
      center: {
        latitude: newValue.latitude,
        longitude: newValue.longitude
      },
      zoom: 16
    };                      
  }, true);

});


// https://maps.googleapis.com/maps/api/distancematrix/json?origins=51.5034070,-0.1275920&destinations=51.5065393,-0.1431443&mode=driving&key=AIzaSyAQnbuaV4vimAOtYPVZvACuxPnVYgayKfY



app.controller('etaCtrl',[
	'$scope',
	'$http',
	function($scope, $http){
		// var categories = $resource('https://developers.zomato.com/api/v2.1/categories?user_key=b9a7f37a405a0b234d0e9b0714e80d1d')
		$http({
			method: 'GET',
			url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=51.5034070,-0.1275920&destinations=51.5065393,-0.1431443&mode=driving&key=AIzaSyAQnbuaV4vimAOtYPVZvACuxPnVYgayKfY'
			}
			}).then(function successCallback(response) {
			    console.log('success');
			    res.send(response);


			    	})
  
}
