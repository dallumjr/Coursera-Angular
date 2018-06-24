(function(){
  'use strict';

  angular.module('LunchCheck',[])
         .controller('LunchCheckController', LCController);

  LCController.$inject = ['$scope'];
  function LCController($scope) {
    // this function is injected with the $scope service, which makes properties that you define on it available within the controller's scope.
    $scope.state = ''; // this needs to be defined in the view model or it's not found in the html context
    $scope.list = '';
    console.log($scope);
    $scope.checkItems = function() {
      var items = $scope.list.split(',').length;
      if (items <= 3 && $scope.list != '') {
        console.log(items);
        $scope.state = 'Enjoy!';
      } else if (items > 3) {
        $scope.state = 'Too much!'
      } else {
        $scope.state = 'Please enter data first'
      }
    }

  }


})();
