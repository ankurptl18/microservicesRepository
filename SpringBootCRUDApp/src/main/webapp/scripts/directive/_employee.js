'use strict';

/**
 * @ngdoc directive
 * @name springbootApp.directive:employeeCtrl
 * @description
 * # employeeCtrl
 * Controller of the springbootApp
 */
angular.module('springbootApp').directive('employee', function () {
    return {
        templateUrl: 'views/directive/_employee.html',
        bindToController: true,
        controller: 'employeeCtrl'
    };
})
.controller('employeeCtrl', function ($rootScope, $scope, dataService) {    
    
    $scope.onlyIntegers = /^\d+$/;
    $scope.onlyNumbers = /^\d+([,.]\d+)?$/;  
    
    $scope.form = {};
                
    $scope.initStuff = function(){
        
        // get HOST Name on page load
        var promise = dataService.loadEmployeeHostServer();
        promise.then(function (data) { 
            $scope.employeeHostName = data;
        },
        // Failure
        function () {
            console.error("Error while accessing employee IP details");
        });
        
        // load EMPLOYEE LIST on page load
        $scope.loadEmployeeList();
        
        $scope.resetEmployeeData();
    };
    
    $scope.loadEmployeeList = function(){    
        var promise = dataService.loadEmployeeList();
        promise.then(function (data) { 
            $scope.employeeList = data;
        },
        // Failure
        function () {
            console.error("Error while accessing employee details");
        });
    };
    
    $scope.submitEmployeeData = function() {
        if($scope.employeeData.id === "" || $scope.employeeData.id === undefined || $scope.employeeData.id === null) {
            $scope.saveEmployeeData($scope.employeeData);
        } 
        else if($scope.employeeData.id !== "") {
            $scope.updateEmployeeData($scope.employeeData, $scope.employeeData.id);
        }
    };
    
    $scope.saveEmployeeData = function(employeeData){
        var promise = dataService.saveEmployeeData(employeeData);
        promise.then(function (data) { 
            $rootScope.showBTAlert('Data saved successfully.', 'success', 8000);
            $scope.loadEmployeeList();
            //$scope.form.employeeForm.$setPristine();
            $scope.resetEmployeeData();
        },
        // Failure
        function (errResponse) {
            $rootScope.showBTAlert('Error while creating employee: ' + errResponse.data.errorMessage, 'error', 8000);
        });
    };
    
    $scope.updateEmployeeData = function(employeeData, employeeID){
        var promise = dataService.updateEmployeeData(employeeData, employeeID);
        promise.then(function (data) { 
            $rootScope.showBTAlert('Data updated successfully.', 'success', 8000);
            $scope.loadEmployeeList();
            //$scope.$scope.form.employeeForm.$setPristine();;
        },
        // Failure
        function (errResponse) {
            $rootScope.showBTAlert('Error while creating employee: ' + errResponse.data.errorMessage, 'error', 8000);
        });
    };
    
    $scope.archiveEmployee = function(employeeID){
        var promise = dataService.deleteEmployeeData(employeeID);
        promise.then(function (data) { 
            $rootScope.showBTAlert('User '+employeeID + ' removed successfully', 'success', 8000);
            $scope.loadEmployeeList();
            //$scope.form.employeeForm.$setPristine();
        },
        // Failure
        function (errResponse) {
            $rootScope.showBTAlert('Error while archiving employee: ' + errResponse.data.errorMessage, 'error', 8000);
        });
    };
    
    $scope.updatedEmployeeDetails = function(employeeID){
        var promise = dataService.loadEmployeeData(employeeID);
        promise.then(function (data) { 
            $rootScope.showBTAlert('Now you can edit the selected record.', 'success', 8000);
            $scope.employeeData = data;
        },
        // Failure
        function (errResponse) {
            $rootScope.showBTAlert('Error while accessing employee data: ' + errResponse.data.errorMessage, 'error', 8000);
        });
    };
    
    $scope.resetEmployeeData = function(){
        $scope.employeeData = {
            "id": "",
            "name": "",
            "age": "",
            "salary": ""
        }; 
        //$scope.form.employeeForm.$setPristine();
    };
    
    
});

