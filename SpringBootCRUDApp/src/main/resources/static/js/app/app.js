var app = angular.module('crudApp',['ui.router','ngStorage']);

app.constant('urls', {
    BASE: 'http://localhost:8092/SpringBootCRUDApp',
    USER_SERVICE_API : 'http://localhost:8092/SpringBootCRUDApp/api/managerDetails/',
    EMP_SERVICE_API : 'http://localhost:8092/SpringBootCRUDApp/api/employeeDetails/',
    	
    	USER_SERVICE_API_8080 : 'http://localhost:8092/SpringBootCRUDApp/api/managerDetails8080/',
        EMP_SERVICE_API_8080 : 'http://localhost:8092/SpringBootCRUDApp/api/employeeDetails8080/',
        	USER_SERVICE_API_30003 : 'http://localhost:8092/SpringBootCRUDApp/api/managerDetails30003/',
            EMP_SERVICE_API_30003 : 'http://localhost:8092/SpringBootCRUDApp/api/employeeDetails30003/'
});

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/list',
                /*controller:'UserController',*/
                resolve: {
                    users: function ($q, UserService, EmployeeService) {
                        console.log('Load all users');
                        var deferred = $q.defer();
                        UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                        EmployeeService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    }]);

