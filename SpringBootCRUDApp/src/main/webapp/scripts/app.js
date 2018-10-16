'use strict';

/**
 * @ngdoc overview
 * @name springbootApp
 * @description
 * # springbootApp
 *
 * Main module of the application.
 */
angular
    .module('springbootApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'environment',
        'ui.bootstrap'
    ])
    .config(function ($httpProvider) {
        //Enable cross domain calls
        $httpProvider.defaults.useXDomain = true;
        // delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })
    .config(function (envServiceProvider) {
        envServiceProvider.config({
            domains: {
                // TODO: Need to change the below to potentially use domains for recognition.
                development: ['localhost']
            },
            vars: {
                defaults: {
                    PROJECTDATA_API_APPID: 'springbootApp'
                },
                development: {
                    BASE_API_URL: 'api/'
                }
            }
        });

        // Run the environment check, so the comprobation is made
        // before controllers and services are built
        // envServiceProvider.check();
        envServiceProvider.set('development');
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
