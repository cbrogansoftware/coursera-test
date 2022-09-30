(function(){
'use strict';
 var x = "hello";

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
   $scope.name = "CSB";
   $scope.sayHello = function (){
       return "CSB Hello Coursera";
   }
});


})();

