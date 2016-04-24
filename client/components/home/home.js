angular.module('myApp.home', [])

  .config( function( $stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'components/home/home.html',
      controller: 'HomeCtrl'
    })
  })
  // get directional information from user (which direction are they going)
  // pass this to backend as query string

  .controller('HomeCtrl', function HomeCtrl ($httpParamSerializer) {

      var vm = this;
      var params = {};
      vm.showEntry = showEntry;
      vm.entry = '';
      vm.initialize = initialize;

      //initialize();

      function initialize(){
          console.log('HERE');
          // get current lat long from browser
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
          } else {
              console.log("Geolocation is not supported by this browser.");
          }
      }

      function showPosition(position) {
          console.log('current position', position);
          params.lat = position.coords.latitude;
          params.long = position.coords.longitude;
          params.ts = position.coords.timestamp;
          var qs = $httpParamSerializer(params);

          HomeService.get(params, function(response){
              //console.log('response from node API', )
          });
      }

      function showEntry (){
          console.log('help', vm.entry);
      }

  })

    .factory('HomeService', function HomeService(params){
        // do put request to node API for ??
        //


        var get = function (params) {
            return $http({
                method: 'GET',
                url: '/api/alert',
            });
        }

        //router.get('/alert', function(req, res){
        //    var location = {
        //        lat: 92,
        //        lon: 124
        //    }
        //
        //    db.getAlerts(location, function(data){
        //        res.send(data);
        //    });
        //})
        //
        //router.post('/alert', function(req, res){
        //    var alert = {
        //        lat: 92,
        //        lon: 124,
        //        alert: "Oh n/m, all good."
        //    }
        //
        //    db.postAlert(alert);
        //    res.sendStatus(200);
        //})
    });