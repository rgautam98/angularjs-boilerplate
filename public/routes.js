angular.module('test', [
        'ui.router',
        'ngSanitize'
    ])
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
        function($locationProvider, $stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when("", "/");

            $urlRouterProvider.otherwise("/");
            $stateProvider
            .state('main', {
                url: "/",
                views: {
                    '': {
                        templateUrl: "templates/main.html",
                        controller: "mainCtrl"
                    }
                }
            })
            .state('local', {
                url: "/local",
                views: {
                    '': {
                        templateUrl: "templates/local.html",
                        controller: "localCtrl"
                    }
                }
            })
            .state('session', {
                url: "/session",
                views: {
                    '': {
                        templateUrl: "templates/session.html",
                        controller: "sessionCtrl"
                    }
                }
            })
            .state('rest', {
                url: "/rest",
                views: {
                    '': {
                        templateUrl: "templates/rest.html",
                        controller: "restCtrl"
                    }
                }
            })


        }
    ])
    .run(['$rootScope', '$timeout', '$state', '$window',
        function($rootScope, $timeout, $state, $window){
            $rootScope.host = "http://httpbin.org";
        }

    ])
     .config(function($httpProvider) {
     // The auth injectors. Inject parameters into the request and the response.
        $httpProvider.interceptors.push('authInterceptor');
    })
    .factory('authInterceptor', function ($window) {
        return {
            request: function(config) {
                var token = $window.localStorage['jwtToken']
                config.headers["X-AUTH-TOKEN"] =  + token;
                return config;
            },
            response: function(res) {
                return res;
            },
        }
    });
