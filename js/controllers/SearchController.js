(function () {

  angular.module("spotifyApp")
    .controller("SearchController", SearchController)

  function SearchController($rootScope, SpotifyFactory) {

      var vm = this;
      vm.searchArtist = function(e) {
        e.preventDefault()
        SpotifyFactory.searchArtist( vm.search )
      }

      function setRootScopeArtists(artists) {
        $rootScope.artists = artists;
        console.log($rootScope.artists)
      }

    }


})()
