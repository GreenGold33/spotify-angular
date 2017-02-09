(function () {
  angular.module('spotifyApp')
    .controller('HistorySearchController', HistorySearchController)

  function HistorySearchController ($scope) {
    var vm = this

    vm.history = ['the beatles', 'the rolling stones']
    vm.showList = true
    vm.toggleShow = function() { vm.showList = !vm.showList }

    // Why am i using $scope here?
    // Read this => https://toddmotto.com/digging-into-angulars-controller-as-syntax/#watchersscope-methods

    $scope.$on('artistsDataReady', function (event, artists, searchTerm) {
      vm.history.push(searchTerm)
    })
  }
})()
