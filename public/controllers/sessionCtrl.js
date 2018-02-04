angular.module('test')
   .controller('sessionCtrl', ['$rootScope', '$scope', '$http', '$state', '$location',
   function($rootScope, $scope, $http, $state, $location){
       $scope.data={
       };

       $scope.SetData = function(){
           console.log("Setting the data");
           console.log($scope.data.SetKey + " : " + $scope.data.SetValue);
           window.sessionStorage.setItem($scope.data.SetKey, $scope.data.SetValue);
           $scope.data.StorageData = ""
       };
       $scope.GetData = function(){
           console.log("The key is:  " + $scope.data.GetKey);
           $scope.data.StorageData = window.sessionStorage.getItem($scope.data.GetKey);
       };

       $scope.DelData = function(){
           //alert($scope.data.name);
           console.log("The key is:  " + $scope.data.DelKey);
           window.sessionStorage.removeItem($scope.data.DelKey);
           $scope.data.StorageData = ""
       };

       $scope.GetAllData = function(){
           var DataTable = [];
           for(var i=0; i<window.sessionStorage.length; i++){
               DataTable.push({
                   key: window.sessionStorage.key(i),
                   value: window.sessionStorage.getItem(window.sessionStorage.key(i))
               });
           }
           $scope.dataTable = DataTable;
       };

       $scope.CloseTable = function(){
           $scope.dataTable = null;
       };

   }
])
