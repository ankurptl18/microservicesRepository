var app = angular.module('crudApp',['ui.router','ngStorage']);

app.constant('urls', {
    USER_SERVICE_API : 'api/manager/',
    EMP_SERVICE_API : 'api/employee/',
    CREATE_MANAGER_SERVICE_API : 'api/addManager/',
    CREATE_EMPLOYEE_SERVICE_API : 'api/addEmployee/',
    LOAD_MANAGER_SERVICE_API : 'api/loadManager/',
    LOAD_EMPLOYEE_SERVICE_API : 'api/loadEmlpoyee/',
    REMOVE_MANAGER_SERVICE_API : 'api/removeManager/',
    REMOVE_EMPLOYEE_SERVICE_API : 'api/removeEmployee/',
    
    HOSTNAME_EMPLOYEE_SERVICE_API : 'api/EmployeehostName/',
    HOSTNAME_MANAGER_SERVICE_API : 'api/ManagerhostName/',
    
    
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
                        EmployeeService.getHostName().then(deferred.resolve, deferred.resolve);
                        UserService.getHostName().then(deferred.resolve, deferred.resolve);
                        
                        return deferred.promise;
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    }]);

