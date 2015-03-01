var admin = angular.module('admin', []);

admin.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('../js/payments.json').success(function(data){
    $scope.payments = data;
  });
}]);