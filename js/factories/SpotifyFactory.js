(function () {

  angular.module("spotifyApp")
    .factory("SpotifyFactory", function($http, urlSearchArtists) {

      function searchArtist(searchQuery) {

        var url = urlSearchArtists;
        url = url.replace('<%ARTIST-NAME%>', searchQuery)

        return $http.get(url)
                .then(function(response) {
                  return response.data.artists.items;
                })
      }

      function searchAlbums() {

      }

      return {
        searchArtist: searchArtist,
        searchAlbums: searchAlbums
      }

    })

})()