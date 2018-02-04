 angular.module('test')
    .controller('localCtrl', ['$rootScope', '$scope', '$http', '$state', '$location',
    function($rootScope, $scope, $http, $state, $location){
        $scope.data={
        };

        $scope.SetData = function(){
            console.log("Setting the data");
            console.log($scope.data.SetKey + " : " + $scope.data.SetValue);
            window.localStorage.setItem($scope.data.SetKey, $scope.data.SetValue);
            $scope.data.StorageData = ""
        };
        $scope.GetData = function(){
            console.log("The key is:  " + $scope.data.GetKey);
            $scope.data.StorageData = window.localStorage.getItem($scope.data.GetKey);
        };

        $scope.DelData = function(){
            //alert($scope.data.name);
            console.log("The key is:  " + $scope.data.DelKey);
            window.localStorage.removeItem($scope.data.DelKey);
            $scope.data.StorageData = ""
        };

        $scope.GetAllData = function(){
            var DataTable = [];
            for(var i=0; i<window.localStorage.length; i++){
                DataTable.push({
                    key: window.localStorage.key(i),
                    value: window.localStorage.getItem(window.localStorage.key(i))
                });
            }
            $scope.dataTable = DataTable;
        };

        $scope.CloseTable = function(){
            $scope.dataTable = null;
        };

    }
])
