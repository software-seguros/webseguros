angular.module('MetronicApp', [])
  .controller('ParametrizacoesController', function($rootScope, $scope, $http, $timeout) {
    
   $http.get('cnp.json').success(function(data) {
       $scope.cnp = data;
   });
  
   $http.get('cae.json').success(function(data) {
       $scope.cae = data;
   });

    
    $scope.$on('$viewContentLoaded', function() {
      App.initAjax();
      Layout.setSidebarMenuActiveLink('set', $('#sidebar_menu_link_profile'));
    });
  });