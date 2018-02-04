angular.module('test')
	.controller('restCtrl', ['$rootScope', '$scope', '$http', '$state', '$location', "restService",
		function ($rootScope, $scope, $http, $state, $location, restService) {
            $scope.getData = function(){
                restService.getData().then(function(data){
					console.log(data.data);
					console.log("The data got is :  " + data.data.name)
                    $scope.data = data;
                }, function(err){
                    console.log(err);
                });
            }

            $scope.postdat = {}

            $scope.PostData = function(){
                console.log("Running the post function");
                console.log($rootScope.host);
                restService.PostData($scope.postdat).then(function(data){
                    $scope.pd = data;
                }, function(err){
                    console.log(err);
                });
            }

            //
		}]);
