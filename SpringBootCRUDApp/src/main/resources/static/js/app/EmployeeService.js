'use strict';

angular.module('crudApp').factory('EmployeeService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllUsers: loadAllUsers,
                getAllUsers: getAllUsers,
                getUser: getUser,
                createUser: createUser,
                updateUser: updateUser,
                removeUser: removeUser,
                getHostName : getHostName
            };

            return factory;

            function loadAllUsers() {
                console.log('Fetching all users');
                var deferred = $q.defer();
                $http.get(urls.EMP_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all users');
                           $localStorage.users1 = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading users');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllUsers(){
                return $localStorage.users1;
                //return loadAllUsers();
            }

            function getUser(id) {
                console.log('Fetching User with id :'+id);
                var deferred = $q.defer();
                $http({
                    url: urls.LOAD_EMPLOYEE_SERVICE_API, 
                    method: "GET",
                    params: {id:id}
                 }).then(
                        function (response) {
                            console.log('Fetched successfully User with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.log('Error while loading user with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createUser(user) {
                console.log('Creating User');
                var deferred = $q.defer();
                $http.post(urls.CREATE_EMPLOYEE_SERVICE_API, user)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.log('Error while creating User : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateUser(user, id) {
                console.log('Updating User with id '+id);
                var deferred = $q.defer();
                $http.put(urls.EMP_SERVICE_API + id, user)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.log('Error while updating User with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeUser(id) {
                console.log('Removing User with id '+id);
                var deferred = $q.defer();
                
                $http({
                    url: urls.REMOVE_EMPLOYEE_SERVICE_API, 
                    method: "DELETE",
                    params: {id:id}
                 })
                //$http.delete(urls.REMOVE_EMPLOYEE_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.log('Error while removing User with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            
            function getHostName() {

                var deferred = $q.defer();
                $http.get(urls.HOSTNAME_EMPLOYEE_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('host name :-' + response.data.hostname);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            	
            	
               /* var deferred = $q.defer();
                
                $http.get(urls.HOSTNAME_EMPLOYEE_SERVICE_API)
                
                $http({
                    url: urls.HOSTNAME_EMPLOYEE_SERVICE_API, 
                    method: "GET",
                 })
                    .then(
                        function (response) {
                        	console.log("host name response -: " + response);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }*/
            }
        }
    ]);

