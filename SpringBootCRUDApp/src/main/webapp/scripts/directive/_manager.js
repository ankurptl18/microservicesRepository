'use strict';

/**
 * @ngdoc directive
 * @name springbootApp.directive:managerCtrl
 * @description
 * # managerCtrl
 * Controller of the springbootApp
 */
angular.module('springbootApp').directive('manager', function () {
    return {
        templateUrl: 'views/directive/_manager.html',
        bindToController: true,
        controller: 'managerCtrl'
    };
})
.controller('managerCtrl', function ($rootScope, $scope, dataService) {    
    
    $scope.onlyIntegers = /^\d+$/;
    $scope.onlyNumbers = /^\d+([,.]\d+)?$/;  
    
    $scope.form = {};
                
    $scope.initStuff = function(){
        
        // get HOST Name on page load
        var promise = dataService.loadManagerHostServer();
        promise.then(function (data) { 
            $scope.managerHostName = data;
        },
        // Failure
        function () {
            console.error("Error while accessing manager IP details");
        });
        
        // load EMPLOYEE LIST on page load
        $scope.loadManagerList();
        
        $scope.resetManagerData();
    };
    
    $scope.loadManagerList = function(){    
        var promise = dataService.loadManagerList();
        promise.then(function (data) { 
            $scope.managerList = data;
        },
        // Failure
        function () {
            console.error("Error while accessing manager details");
        });
    };
    
    $scope.submitManagerData = function() {
        if($scope.managerData.id === "" || $scope.managerData.id === undefined || $scope.managerData.id === null) {
            $scope.saveManagerData($scope.managerData);
        } 
        else if($scope.managerData.id !== "") {
            $scope.updateManagerData($scope.managerData, $scope.managerData.id);
        }
    };
    
    $scope.saveManagerData = function(managerData){
        var promise = dataService.saveManagerData(managerData);
        promise.then(function (data) { 
            $rootScope.showBTAlert('Data saved successfully.', 'success', 8000);
            $scope.loadManagerList();
            //$scope.form.managerForm.$setPristine();
            $scope.resetManagerData();
        },
        // Failure
        function (errResponse) {
            $rootScope.showBTAlert('Error while creating manager: ' + errResponse.data.errorMessage, 'error', 8000);
        });
    };
    
    $scope.updateManagerData = function(managerData, managerID){
        var promise = dataService.updateManagerData(managerData, managerID);
        promise.then(function (data) { 
            $rootScope.showBTAlert('Data updated successfully.', 'success', 8000);
            $scope.loadManagerList();
            //$scope.$scope.form.managerForm.$setPristine();;
        },
        // Failure
        function (errResponse) {
            $rootScope.showBTAlert('Error while creating manager: ' + errResponse.data.errorMessage, 'error', 8000);
        });
    };
    
    $scope.archiveManager = function(managerID){
        var promise = dataService.deleteManagerData(managerID);
        promise.then(function (data) { 
            $rootScope.showBTAlert('User '+managerID + ' removed successfully', 'success', 8000);
            $scope.loadManagerList();
            //$scope.form.managerForm.$setPristine();
        },
        // Failure
        function (errResponse) {
            $rootScope.showBTAlert('Error while archiving manager: ' + errResponse.data.errorMessage, 'error', 8000);
        });
    };
    
    $scope.updatedManagerDetails = function(managerID){
        var promise = dataService.loadManagerData(managerID);
        promise.then(function (data) { 
            $rootScope.showBTAlert('Now you can edit the selected record.', 'success', 8000);
            $scope.managerData = data;
        },
        // Failure
        function (errResponse) {
            $rootScope.showBTAlert('Error while accessing manager data: ' + errResponse.data.errorMessage, 'error', 8000);
        });
    };
    
    $scope.resetManagerData = function(){
        $scope.managerData = {
            "id": "",
            "name": "",
            "age": "",
            "salary": ""
        }; 
        //$scope.form.managerForm.$setPristine();
    };
    
    
});

    




