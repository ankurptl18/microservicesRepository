'use strict';


angular.module('crudApp').controller('EmployeeController', function( EmployeeService, $scope) {

	        $scope.user = {};
	        $scope.users=[];

	        $scope.successMessage = '';
	        $scope.errorMessage = '';
	        $scope.done = false;

	        $scope.onlyIntegers = /^\d+$/;
	        $scope.onlyNumbers = /^\d+([,.]\d+)?$/;

	        $scope.submit = function() {
	            console.log('Submitting');
	            if ($scope.user.id === undefined || $scope.user.id === null) {
	                console.log('Saving New User', $scope.user);
	                createUser($scope.user);
	            } else {
	                updateUser($scope.user, $scope.user.id);
	                console.log('User updated with id ', $scope.user.id);
	            }
	        }

	        $scope.createUser = function(user) {
	            console.log('About to create Emplpoyee');
	            EmployeeService.createUser(user)
	                .then(
	                    function (response) {
	                        console.log('User created successfully');
	                        $scope.successMessage = 'Employee created successfully';
	                        $scope.errorMessage='';
	                        $scope.done = true;
	                        $scope.user={};
	                        $scope.myForm.$setPristine();
	                    },
	                    function (errResponse) {
	                        console.error('Error while creating Employee');
	                        $scope.errorMessage = 'Error while creating employee: ' + errResponse.data.errorMessage;
	                        $scope.successMessage='';
	                    }
	                );
	        }

	        $scope.updateUser = function(user, id){
	            console.log('About to update user');
	            EmployeeService.updateUser(user, id)
	                .then(
	                    function (response){
	                        console.log('User updated successfully');
	                        $scope.successMessage='User updated successfully';
	                        $scope.errorMessage='';
	                        $scope.done = true;
	                        $scope.myForm.$setPristine();
	                    },
	                    function(errResponse){
	                        console.error('Error while updating User');
	                        $scope.errorMessage='Error while updating User '+errResponse.data;
	                        $scope.successMessage='';
	                    }
	                );
	        }

	        $scope.removeUser = function(id){
	            console.log('About to remove User with id '+id);
	            EmployeeService.removeUser(id)
	                .then(
	                    function(){
	                        console.log('User '+id + ' removed successfully');
	                    },
	                    function(errResponse){
	                        console.error('Error while removing user '+id +', Error :'+errResponse.data);
	                    }
	                );
	        }


	        $scope.getAllUsers = function(){
	            return EmployeeService.getAllUsers();
	        }

	        $scope.editUser = function(id) {
	            $scope.successMessage='';
	            $scope.errorMessage='';
	            EmployeeService.getUser(id).then(
	                function (user) {
	                    $scope.user = user;
	                },
	                function (errResponse) {
	                    console.error('Error while removing user ' + id + ', Error :' + errResponse.data);
	                }
	            );
	        }
	        
	        $scope.reset = function(){
	        	console.log('About to create Emplpoyee');
	            EmployeeService.createUser30003(user)
                .then(
                    function (response) {
                        console.log('User created successfully');
                        $scope.successMessage = 'Employee created successfully';
                        $scope.errorMessage='';
                        $scope.done = true;
                        $scope.user={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Employee');
                        $scope.errorMessage = 'Error while creating employee: ' + errResponse.data.errorMessage;
                        $scope.successMessage='';
                    }
                );
	        }

	     // function to call 30003 port web service
	        $scope.callOther30003 = function(){
	        	console.log('About to create Emplpoyee');
	            EmployeeService.createUserTemp($scope.user)
                .then(
                    function (response) {
                        console.log('User created successfully');
                        $scope.successMessage = 'Employee created successfully';
                        $scope.errorMessage='';
                        $scope.done = true;
                        $scope.user={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Employee');
                        $scope.errorMessage = 'Error while creating employee: ' + errResponse.data.errorMessage;
                        $scope.successMessage='';
                    }
                );
	        };
	        
	        $scope.callOther8080 = function(){
	        	console.log('About to create Emplpoyee');
	            EmployeeService.createUserTemp8080($scope.user)
                .then(
                    function (response) {
                        console.log('User created successfully');
                        $scope.successMessage = 'Employee created successfully';
                        $scope.errorMessage='';
                        $scope.done = true;
                        $scope.user={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Employee');
                        $scope.errorMessage = 'Error while creating employee: ' + errResponse.data.errorMessage;
                        $scope.successMessage='';
                    }
                );
	        };
	        
});