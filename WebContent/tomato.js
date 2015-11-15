var app = angular.module('tomatoSales', []);
// Rest call Controller
function TomatoSalesController($scope, $http) {
    $scope.submit = function() {$http.get("http://localhost:9080/tomatos/data?size="+$scope.size).
    success(function(data, status, headers, config) {
      $scope.sales = data;
    })};
};