(function () {

  angular.module("spotifyApp")
    .controller("ArtistsController", ArtistsController)

  function ArtistsController($scope){

    $scope.$on('artistsDataReady', function (artists) {
      console.log("from ArtistsController...")
      console.log (artists)
    });

  }

})()