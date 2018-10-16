'use strict';

/**
 * @ngdoc service
 * @name sweetApp.dataService
 * @description
 * # dataService
 * Service in the sweetApp.
 */
angular.module('springbootApp').service('dataService', function ($q, $http, envService, $rootScope) {

    /*============================ EMPLOYEE SERVICES =============================*/
   
    // Service for GET HOST NAME
    this.loadEmployeeHostServer = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: envService.read('BASE_API_URL') + 'EmployeehostName/'
        }).then(function (data) {
            deferred.resolve(data.data);
        },function (){
            deferred.reject();
        });
        
        return deferred.promise; 
    };
   
    // Service for GET EMPLOYEE LIST
    this.loadEmployeeList = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: envService.read('BASE_API_URL') + 'employee/'
        }).then(function (data) {
            deferred.resolve(data.data);
        },function (){
            deferred.reject();
        });
        
        return deferred.promise; 
    };
    
    // Service for GET EMPLOYEE DATA
    this.loadEmployeeData = function (employeeID) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            params: { id: employeeID },
            url: envService.read('BASE_API_URL') + 'loadEmlpoyee/'
        }).then(function (data) {
            deferred.resolve(data.data);
        },function (){
            deferred.reject();
        });
        
        return deferred.promise; 
    };
    
    // Service for CREATE EMPLOYEE
    this.saveEmployeeData = function (employeeData) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            data: employeeData,
            url: envService.read('BASE_API_URL') + 'addEmployee/'
        }).then(function (data) {
            deferred.resolve(data.data);
        },function (){
            deferred.reject();
        });
        
        return deferred.promise; 
    };
            
    // Service for UPDATE EMPLOYEE DATA
    this.updateEmployeeData = function (employeeData, employeeID) {
        var deferred = $q.defer();
        $http({
            method: 'PUT',
            data: employeeData,
            url: envService.read('BASE_API_URL') + 'employee/'+employeeID
        }).then(function (data) {
            deferred.resolve(data.data);
        },function (){
            deferred.reject();
        });
        
        return deferred.promise; 
    };
    
    // Service for UPDATE EMPLOYEE DATA
    this.deleteEmployeeData = function (employeeID) {
        var deferred = $q.defer();
        $http({
            method: 'DELETE',
            params: { id: employeeID },
            url: envService.read('BASE_API_URL') + 'removeEmployee/'
        }).then(function (data) {
            deferred.resolve(data.data);
        },function (){
            deferred.reject();
        });
        
        return deferred.promise; 
    };
    
    /*============================ MANAGER SERVICES =============================*/
   
    // Service for GET MANAGER HOST NAME
    this.loadManagerHostServer = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: envService.read('BASE_API_URL') + 'ManagerhostName/'
        }).then(function (data) {
            deferred.resolve(data.data);
        },function (){
            deferred.reject();
        });
        
        return deferred.promise; 
    };
   
    // Service for GET MANAGER LIST
    this.loadManagerList = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: envService.read('BASE_API_URL') + 'manager/'
        }).then(function (data) {
            deferred.resolve(data.data);
        },function (){
            deferred.reject();
        });
        
        return deferred.promise; 
    };
    
    // Service for GET MANAGER DATA
    this.loadManagerData = function (employeeID) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            params: { id: employeeID },
            url: envService.read('BASE_API_URL') + 'loadManager/'
        }).then(function (data) {
            deferred.resolve(data.data);
        },function (){
            deferred.reject();
        });
        
        return deferred.promise; 
    };
    
    // Service for CREATE MANAGER
    this.saveManagerData = function (employeeData) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            data: employeeData,
            url: envService.read('BASE_API_URL') + 'addManager/'
        }).then(function (data) {
            deferred.resolve(data.data);
        },function (){
            deferred.reject();
        });
        
        return deferred.promise; 
    };
            
    // Service for UPDATE MANAGER DATA
    this.updateManagerData = function (employeeData, employeeID) {
        var deferred = $q.defer();
        $http({
            method: 'PUT',
            data: employeeData,
            url: envService.read('BASE_API_URL') + 'manager/'+employeeID
        }).then(function (data) {
            deferred.resolve(data.data);
        },function (){
            deferred.reject();
        });
        
        return deferred.promise; 
    };
    
    // Service for UPDATE MANAGER DATA
    this.deleteManagerData = function (employeeID) {
        var deferred = $q.defer();
        $http({
            method: 'DELETE',
            params: { id: employeeID },
            url: envService.read('BASE_API_URL') + 'removeManager/'
        }).then(function (data) {
            deferred.resolve(data.data);
        },function (){
            deferred.reject();
        });
        
        return deferred.promise; 
    };

});
