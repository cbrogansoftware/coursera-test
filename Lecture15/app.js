(function(){
'use strict';

// if watching lecture, this shoudl be lecture 14. Named 15 by mistake
angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope){

    $scope.onceCounter = 0;
    $scope.counter = 0;

    $scope.showNumberOfWatchers = function(){
        console.log($scope.$$watchersCount);
    };

    $scope.upCounter = function (){
        $scope.counter++;
    }

    $scope.countOnce = function (){
        $scope.onceCounter = 1;
    }

    // $scope.$watch('onceCounter', function (newValue, oldValue){
    //     console.log("onceCounter old: ", oldValue);
    //     console.log("onceCounter new: ", newValue);
    // });
    // $scope.$watch('counter', function (newValue, oldValue){
    //     console.log("counter old: ", oldValue);
    //     console.log("counter new: ", newValue);
    // });
}


})();

