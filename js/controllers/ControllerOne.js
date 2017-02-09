(function () {

  angular.module("spotifyApp")
    .controller("ControllerOne", ControllerOne)

  function ControllerOne($scope){

    $scope.$on('artistsDataReady', function (artists) {
      console.log ("from ControllerOne...")
      console.log (artists)
    });

  }

})()