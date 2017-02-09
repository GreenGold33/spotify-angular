(function () {
  angular.module('spotifyApp')
    .controller('ArtistsController', ArtistsController)

  function ArtistsController ($scope) {
    var vm = this
    $scope.$on('artistsDataReady', function (event, artists) {
      console.log(artists)
      vm.artists = artists
    })
  }
})()
