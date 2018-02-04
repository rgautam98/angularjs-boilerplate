angular.module('test')
.service('restService', ['$q', '$http', '$rootScope', function($q, $http, $rootScope){
    return {
        getData: function(){
            var defer = $q.defer();
			$http.get($rootScope.host).then(function(res){
			  defer.resolve(res);
			}, function(err){
			  defer.reject(err);
			});
			return defer.promise;
        },

        // PostData: function(user_data){
        //     var defer = $q.defer();
        //     $http({
        //         method: "POST",
        //         url: $rootScope.host,
        //         data: {"one": "many"},
        //     }).then(function(res){
        //         console.log("The post request was successful");
        //         defer.resolve(res);
        //     }, function(err){
        //         console.log("The post request screwed up");
        //         console.log(err);
        //         defer.resolve(err);
        //     });
        //     return defer.promise;
        // }

        PostData: function(user_data){
            var defer = $q.defer();
            $http({
                method: "POST",
                url: $rootScope.host,
                data: user_data
            }).then(function(res){
                console.log("The post request was successful");
                defer.resolve(res);
            }, function(err){
                console.log("The post request screwed up");
                console.log(err);
                defer.resolve(err);
            });
            return defer.promise;
        }


        //
    };
}
]);
