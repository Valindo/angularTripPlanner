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
		$http({
			method: 'GET',
			url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=51.5034070,-0.1275920&destinations=51.5065393,-0.1431443&key=AIzaSyAQnbuaV4vimAOtYPVZvACuxPnVYgayKfY'
			}
			}).then(function successCallback(response) {
			    console.log('success');
			    res.send(response);


			    	})
  
}


var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    	
}

function showPosition(position) {

	x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}