(function(){
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout) {
    $scope.counter = 0;

    $scope.upCounter = function (){
        $timeout(function (){
            $scope.counter++;
            console.log("Counter Incremented: ", $scope.counter)
        }, 2000)
    }

    // Works but uses native javascript setTimeout
    // $scope.upCounter = function (){
    //     setTimeout(function () {
    //         $scope.$apply(function (){
    //             $scope.counter++;
    //             console.log("Counter Incremented: ", $scope.counter)
    //         });
    //     }, 2000);
    // }



    // $scope.upCounter = function (){
    //     setTimeout(function () {
    //         $scope.counter++;
    //         console.log("Counter Incremented: ", $scope.counter)
    //         $scope.$digest();
    //     }, 2000);
    // }



}

})();

