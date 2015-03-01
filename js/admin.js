var admin = angular.module('admin', []);

admin.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('../js/payments.json').success(function(data){
    $scope.payments = data;
  });

  $scope.showBlock = true;
  $scope.showUnit = true;
  $scope.showPaymentType = true;
  $scope.showAmout = true;
  $scope.showPaymentDate = true;
  $scope.showStatus = true;
  $scope.showActions = true;

  $scope.hideColumn = function(columnName) {
    switch(columnName) {
      case "block":
        $scope.showBlock = false;
        break;
      case "unit":
        $scope.showUnit = false;
        break;
      case "paymentType":
        $scope.showPaymentType = false;
        break;
      case "amount":
        $scope.showAmount = false;
        break;
      case "paymentDate":
        $scope.showPaymentDate = false;
        break;
      case "bankName":
        $scope.showBankName = false;
        break;
      case "dated":
        $scope.showDated = false;
        break;
      case "chequeNo":
        $scope.showChequeNo = false;
        break;
      case "receiptNo":
        $scope.showReceiptNo = false;
        break;
      case "depositedIn":
        $scope.showDepositedIn = false;
        break;
      case "paymentNarration":
        $scope.showPaymentNarration = false;
        break;
      case "status":
        $scope.showStatus = false;
        break;
      case "actions":
        $scope.showActions = false;
        break;
      default:
        // Do Nothing
    }
  }
}]);


$(document).ready(function() {
 $('.dropdown-menu input, .dropdown-menu label').click(function(e) {
      e.stopPropagation();
  });
});