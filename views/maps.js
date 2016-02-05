angular
.module('MyApp', ['ngGeolocation', 'google-maps'])
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

$http.get(url:$http.get('/https://maps.googleapis.com/maps/api/distancematrix/json?origins=51.5034070,-0.1275920&destinations=51.5065393,-0.1431443&mode=driving&key=AIzaSyAQnbuaV4vimAOtYPVZvACuxPnVYgayKfY', config).then(successCallback, errorCallback);


https://maps.googleapis.com/maps/api/distancematrix/json?origins=51.5034070,-0.1275920&destinations=51.5065393,-0.1431443&mode=driving&key=AIzaSyAQnbuaV4vimAOtYPVZvACuxPnVYgayKfY