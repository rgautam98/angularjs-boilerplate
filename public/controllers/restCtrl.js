angular.module('test')
	.controller('restCtrl', ['$rootScope', '$scope', '$http', '$state', '$location', "restService",
		function ($rootScope, $scope, $http, $state, $location, restService) {

            $scope.method = false;
            $scope.getData = function(){
                restService.getData().then(function(resp){
                    console.log("The GET request is a success");
                    console.log(resp.data);
                    
                    $scope.method = "GET";
                    $scope.pd = JSON.stringify(resp.data, null, 4);
                }, function(err){
                    console.log(err);
                });
            }

            $scope.PostData = function(){
                console.log("Running the post function");
                console.log($rootScope.host);
                restService.PostData({"foo": "bar"}).then(function(resp){
                    console.log("The POST request is success");
                    console.log(resp.data);

                    $scope.method = "POST";                    
                    $scope.pd = JSON.stringify(resp.data, null, 4);
                }, function(err){
                    console.log(err);
                });
            }

            //
        }
    ]);
