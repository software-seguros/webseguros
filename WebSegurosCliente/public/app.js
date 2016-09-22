angular.module('LoginApp', [])
   .controller('LoginController', function($scope, $http) {
  
      $scope.titulo = "Web App - Seguros Vida e Não Vida";
      $scope.descricao = "Software de gerenciamento de seguros não vida";
      $scope.loginDescricao = "Insira o seu utilizador e respectiva password.";
      $scope.loginUtilizador = "Utilizador";
      $scope.loginPassword = "Palavra-passe";
      $scope.loginGuardarCredenciais = "Guardar credenciais";
      $scope.loginPerdeuPassword = "Perdeu a sua password?";
      $scope.loginEntrar = "Entrar";
      $scope.loginPerdeuPasswordDescricao = "Insira o seu email para recuperar a sua conta";
      $scope.loginVoltar = "Voltar";
      $scope.loginEnviar = "Submeter";
  
      $scope.submeterLogin = function() {
         $http.get("http://actuarial.pt:5000/entrar?utilizador=" + $scope.utilizador + "&password=" + $scope.password)
          .then(function(response){ if(response.data.length > 0){document.location = "dashboard.html";}else{alert("Utilizador ou password errada.")} });
      };
});

angular.module('DashboardApp', [])
   .controller('DashboardController', function($scope) {
  
});