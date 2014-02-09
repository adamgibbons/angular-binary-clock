var myApp = angular.module('binaryClockApp',[]);

function ClockCtrl($scope) {
    $scope.seconds = 0;
    $scope.date = function() {
        return new Date();
    };
}

function HoursCtrl($scope) {
    $scope.getHours = function() {
        return $scope.date().getHours();
    }
    setInterval(function(){
        $scope.$apply(function() {
            $scope.hours = $scope.getHours();
        });
    }, 1000);
    $scope.isLitHours = function(position) {
        if ($scope.getHours() % position >= (position / 2)) {
            return true;
        } else {
            return false;
        }
    }    
}

function MinutesCtrl($scope) { 
    $scope.getMinutes = function() {
        return $scope.date().getMinutes();
    }
    setInterval(function(){
        $scope.$apply(function() {
            $scope.minutes = $scope.getMinutes();
        });
    }, 60000);
    $scope.isActive = function(position) {
        if ($scope.getMinutes() % position >= (position / 2)) {
            return true;
        } else {
            return false;
        }
    }
}

function SecondsCtrl($scope) {
    $scope.getSeconds = function() {
        return $scope.date().getSeconds();
    }
    setInterval(function(){
        $scope.$apply(function() {
            $scope.seconds = $scope.getSeconds();
        });
    }, 1000);
    $scope.isActive = function(position) {
        if ($scope.getSeconds() % position >= (position / 2)) {
            return true;
        } else {
            return false;
        }
    }
}
