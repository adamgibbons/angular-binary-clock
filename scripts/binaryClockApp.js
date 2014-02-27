var myApp = angular.module('binaryClockApp',[]);

function ClockCtrl($scope) {
    $scope.colorScheme = 'charcoal';

    $scope.date = function() {
        return new Date();
    };
    $scope.setColorScheme = function(colorScheme) {
        $scope.colorScheme = colorScheme;
    };
}

function HoursCtrl($scope) {
    $scope.getHours = function() {
        return $scope.date().getHours();
    };
    setInterval(function(){
        $scope.$apply(function() {
            $scope.hours = $scope.getHours();
        });
    }, 1000);
}

function MinutesCtrl($scope) { 
    $scope.getMinutes = function() {
        return $scope.date().getMinutes();
    };
    setInterval(function(){
        $scope.$apply(function() {
            $scope.minutes = $scope.getMinutes();
        });
    }, 1000);
}

function SecondsCtrl($scope) {
    $scope.getSeconds = function() {
        return $scope.date().getSeconds();
    };
    setInterval(function(){
        $scope.$apply(function() {
            $scope.seconds = $scope.getSeconds();
        });
    }, 1000);
}

