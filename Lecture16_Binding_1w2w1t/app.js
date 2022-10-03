(function(){
'use strict';

angular.module('BindingApp', [])
.controller('BindingController', BindingController);

BindingController.$inject = ['$scope'];
function BindingController($scope) {
    $scope.firstName = "Chris";
    //$scope.fullName = ""; // we have a one time binding so this gets set to empty and never updates again.

    $scope.showNumberOfWatchers = function () {
        console.log("# of Watchers: ", $scope.$$watchersCount);
    };

    $scope.setFullName = function () {
        $scope.fullName = $scope.firstName + " " + "Brogan";
    }

    $scope.logFullName = function () {
        console.log("Full name is: " + $scope.fullName);
    }

    $scope.logFirstName = function () {
        console.log("First name is: " + $scope.firstName);
    }

}

})();

