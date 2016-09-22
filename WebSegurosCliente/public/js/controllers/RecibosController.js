angular.module('MetronicApp').controller('RecibosController', function($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function() {   
        App.initAjax();
    });
  
    $rootScope.settings.layout.pageBodySolid = true;
}); 
