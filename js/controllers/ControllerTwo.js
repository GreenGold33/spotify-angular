(function () {

  angular.module("spotifyApp")
    .controller("ControllerTwo", ControllerTwo)

  function ControllerTwo($scope){

    $scope.$on('artistsDataReady', function (artists) {
      console.log ("from ControllerTwo...")
      console.log (artists)
    });

  }

})()