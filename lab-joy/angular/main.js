'use strict';

let app = angular.module('randomcow', []).controller('lorem', function($scope) {
  $scope.ipsum = Math.random() * 5000000;
  $scope.generateRandomIpsum = () => $scope.ipsum = Math.random() * 5000000;
});