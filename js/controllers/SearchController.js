(function () {

  angular.module("spotifyApp")
    .controller("SearchController", SearchController)

  function SearchController($rootScope, SpotifyFactory) {
      var vm = this;
      vm.searchArtist = function(e) {
        e.preventDefault()
        SpotifyFactory.searchArtist( vm.search )
          .then(function(response) {
            $rootScope.artists = response.data.artists.items;
            console.log($rootScope.artists)
          })
      }

    }

})()
