(function(){
'use strict';

angular.module('MsgApp', [])

.controller('MsgController', MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter); // we will inject this into html so no need to inject into controller

MsgController.$inject = ['$scope', '$filter', 'lovesFilter'];
function MsgController($scope, $filter, lovesFilter){
    $scope.name="CSB";
    $scope.stateOfBeing = "hungry";
    $scope.cookieCost = .45;

    $scope.sayMessage = function (){
        var msg = "CSB says likes to eat 1";
        var output = $filter('uppercase')(msg);
        return output;

    }
    $scope.sayLovesMessage = function (){
        var msg = "CSB says likes to eat healthy 2";
        msg = lovesFilter(msg);
        return msg;

    }
    $scope.feedCsb = function (){
        $scope.stateOfBeing = "fed";
    }
}

function LovesFilter(){
    return function (input){
        input = input || "";
        input = input.replace("likes", "loves");
        return input;
    }
}
function TruthFilter(){
    return function (input, target, replace){
        input = input || "";
        input = input.replace(target, replace);
        return input;
    }
}

})();

