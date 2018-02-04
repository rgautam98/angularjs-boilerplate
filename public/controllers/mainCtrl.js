angular.module('test')
   .controller('mainCtrl', ['$rootScope', '$scope', '$http', '$state', '$location',
   function($rootScope, $scope, $http, $state, $location){
           $scope.Storage = function(){
               console.log("Going to the localstorage state");
               $state.go("local");
           };

           $scope.Session = function(){
               console.log("Going to the sessionStorge state");
               $state.go("session");
           };
           $scope.Rest = function(){
               console.log("Going to the Rest state");
               $state.go("rest");
           };

       }
    ])
