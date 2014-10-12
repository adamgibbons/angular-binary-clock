angular.module('binaryClockApp', [])

.controller('ClockCtrl', function($scope, $interval) {
  $scope.showColorMenu = false;
  $scope.colorScheme = 'firenze';

  $scope.setColorScheme = function(scheme) {
    $scope.colorScheme = scheme;
  }

  $interval(function(){
    var time = new Date();
    $scope.hours = new Date(time).getHours();
    $scope.minutes = new Date(time).getMinutes();
    $scope.seconds = new Date(time).getSeconds();
  }, 1000);
})