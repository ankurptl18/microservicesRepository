'use strict';

/**
 * @ngdoc function
 * @name springbootApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the springbootApp
 */
angular.module('springbootApp').controller('MainCtrl', function ($scope, $rootScope, $timeout) {
    
    
    $rootScope.showBTAlert = function(text, btType, duration){
        if($scope.wTimeout) $timeout.cancel($scope.wTimeout);
        if(duration === undefined) duration = 3000;
        angular.element('.projbody .alert-'+btType).show('fast');
        angular.element('.projbody .alert-'+btType +' .msg-text').html(text);
        $scope.wTimeout = $timeout(function(){
            $rootScope.hideAlert();
        }, duration);
    };
    
    $rootScope.hideAlert = function(){
        $scope.btType = '';
        $scope.alertMessage = '';
        angular.element('.projbody .alert').hide(); 
        if($scope.wTimeout) $timeout.cancel($scope.wTimeout);
    };
    
    
    function setWidgetsDimensions() {
        $scope.wWidth = parseInt(angular.element(window).width());
        $scope.wHeight = parseInt(angular.element(window).height());
        angular.element(".proj-container, .proj-container .projtable .projbody").css({"height": ($scope.wHeight - 95)+"px"});
        angular.element(".proj-container .projtable .projbody").css({"width":  $scope.wWidth+"px"});        
        angular.element(".table-responsive").css({"max-height": ($scope.wHeight - 195)+"px"});
        $rootScope.hidePreloader();
    }
    
    angular.element(window).bind('resize', setWidgetsDimensions);
        
    $rootScope.hidePreloader = function(){
        angular.element(".preloader-bg").hide();
        angular.element(".preloader-bg .preloader").hide();
    };
    
    $rootScope.showPreloader = function(){
        angular.element(".preloader-bg").show();
        angular.element(".preloader-bg .preloader").show();
    };
    
    
    $timeout(function(){
        setWidgetsDimensions();
    });
});
