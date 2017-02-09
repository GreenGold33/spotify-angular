(function () {

  angular.module("spotifyApp")
    .controller("ControllerHistorySearch", ControllerHistorySearch)

  function ControllerHistorySearch($scope){

    $scope.history = [];

    $scope.$on('artistsDataReady', function (event, artists, searchTerm) {
      $scope.history.push(searchTerm)
    });

  }

})()