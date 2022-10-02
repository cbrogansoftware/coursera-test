(function(){
'use strict';

angular.module('MsgApp', [])

.controller('MsgController', MsgController);

MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope, $filter){
    $scope.name="CSB";
    $scope.stateOfBeing = "hungry";
    $scope.cookieCost = .45;

    $scope.sayMessage = function (){
        var msg = "CSB says like to eat";
        var output = $filter('uppercase')(msg);
        return output;

    }
    $scope.feedCsb = function (){
        $scope.stateOfBeing = "fed";
    }


}

})();

