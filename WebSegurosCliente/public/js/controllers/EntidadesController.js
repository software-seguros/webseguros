// App entidades
var entidadesApp = angular.module("MetronicApp", []);

// Factory da entidadesAPP para pedidos GET - GETRestFulEntidadesFactory
entidadesApp.factory('GETRestFulEntidadesFactory', function($http) {

    // Váriavel com todos os métodos da factory
    var factory = {};

    // Função para pedidos GET
    var pedidoServidor = function(servidor, pedido) {
        return $http({
            method: 'GET',
            url: 'http://' + servidor + "/" + pedido
        });
    };

    // Nome do servidor para pedidos RestFul
    var nomeServidor = "actuarial.pt:5000";

    /*
    *
    * 0 - Consulta de genero
    * 1 - Consulta de tipo de entidade
    * 2 - Consulta de titulos
    * 3 - Consulta de paises
    * 4 - Consulta de distritos
    * 5 - Consulta de concelhos
    * 6 - Consulta de freguesias
    * 7 - Consulta de situação professional
    * 8 - Consulta de cnp
    * 9 - Consulta de especialidades
    * 10 - Consulta de habilitações académicas
    * 11 - Consulta de estados civis
    * 12 - Consulta de idiomas
    * 13 - Consulta de nacionalidades
    * 14 - Consulta de segunda nacionalidade
    *
    */

    // Array com pedidos a serem realizados á API
    var pedidoRealizar = [
        "consultarGenero",
        "consultarTipoEntidade",
        "consultarTitulos",
        "consultarPaises",
        "consultarDistritos",
        "consultarConcelhos",
        "consultarFreguesias",
        "consultarSituacaoProfessional",
        "consultarCnp",
        "consultarHabilitacoes"
    ];

    // Consulta de genero
    factory.consultarGenero = function() {
        return pedidoServidor(nomeServidor, pedidoRealizar[0]);
    };

    // Consulta de tipo de entidade
    factory.consultarTipoEntidade = function() {
        return pedidoServidor(nomeServidor, pedidoRealizar[1]);
    };

    // Consulta de titulos
    factory.consultarTitulos = function() {
        return pedidoServidor(nomeServidor, pedidoRealizar[2]);
    };

    // Consulta de paises
    factory.consultarPaises = function() {
        return pedidoServidor(nomeServidor, pedidoRealizar[3]);
    };

    // Consulta de distritos
    factory.consultarDistritos = function() {
        return pedidoServidor(nomeServidor, pedidoRealizar[4]);
    };

    // Consulta de concelhos
    factory.consultarConcelhos = function() {
        return pedidoServidor(nomeServidor, pedidoRealizar[5]);
    };

    // Consulta de freguesias
    factory.consultarFreguesias = function() {
        return pedidoServidor(nomeServidor, pedidoRealizar[6]);
    };

    // Consulta de situação professional
    factory.consultarSituacaoProfessional = function() {
        return pedidoServidor(nomeServidor, pedidoRealizar[7]);
    };

    // Consulta de cnp
    factory.consultarCnp = function() {
        return pedidoServidor(nomeServidor, pedidoRealizar[8]);
    };

    // Consulta de especialidades
    factory.consultarEspecialidade = function() {
        return pedidoServidor(nomeServidor, pedidoRealizar[9]);
    };

    // Consulta de habilitações académicas
    factory.consultarHabilitacoes = function() {
        return pedidoServidor(nomeServidor, pedidoRealizar[10]);
    };

    // Consulta de estados civis
    factory.consultarEstadoCivil = function() {
        return pedidoServidor(nomeServidor, pedidoRealizar[11]);
    };

    // Consulta de idiomas
    factory.consultarIdioma = function() {
        return pedidoServidor(nomeServidor, pedidoRealizar[12]);
    };

    // Consulta de nacionalidades
    factory.consultarNacionalidade = function() {
        return pedidoServidor(nomeServidor, pedidoRealizar[13]);
    };

    // Consulta de segunda nacionalidade
    factory.consultarSegundaNacionalidade = function() {
        return pedidoServidor(nomeServidor, pedidoRealizar[14]);
    };

    // Retornar todos os métodos
    return factory;
});

/*
* Autor: Jean-Pierre Carvalho
* Data actualização: 22-09-2016
* Tipo: Factory
* Descrição: Retornar Labels das entidades
*/

entidadesApp.factory('EntidadesLabelFactory', function() {
    return {
        DadosLabels: {
            tabDadosGerais: "Dados Gerais",
            tabDadosPessoais: "Dados Pessoais",
            tabDadosResidenciaBancarios: "Endereços e Dados Bancários",
            tabOutrosDadosDocumentos: "Outros Dados e Documentos",
            dadosGerais: {
                nome: "Nome completo: ",
                genero: "Genero: ",
                titulo: "Titulo: ",
                dadosContacto: {
                    tituloDadosContacto: "Dados de contacto",
                    email: "Email: ",
                    telemovel: "Telemóvel: ",
                    telefone: "Telefone: "
                },
                naturalidade: {
                    tituloNaturalidade: "Naturalidade",
                    dataNascimento: "Data de Nascimento: ",
                    pais: "Pais:  ",
                    distrito: "Distrito: ",
                    concelho: "Concelho: ",
                    freguesia: "Freguesia: "
                },
                situacaoProfessional: {
                    tituloSituacaoProfessional: "Dados professionais",
                    situacaoProfessional: "Situação Professional: ",
                    horarioContacto: "Horário de contacto: ",
                    horarioContactoDas: "Das",
                    horarioContactoAte: "até ",
                    numeroFiscal: "Número Fiscal: ",
                    numeroSegurancaSocial: "Número Segurança Social: ",
                    cnp: "CNP: ",
                    especialidade: "Especialidade: ",
                    habilitacoes: "Habilitações: ",
                    areaAcademica: "Area Académica: "
                }
            },
            dadosPessoais: {
                dadosIdentificacao: {
                    tituloIdentificacao: "Dados de identificação",
                    estadoCivil: "Estado civil: ",
                    idioma: "Idioma: ",
                    nacionalidade: "Nacionaldiade: ",
                    segundaNacionalidade: "Segunda Nacionalidade: "
                },
                dadosCivis: {
                    tituloDadosCivis: "Dados civis",
                    tabCartaoCidadao: {
                        tituloTabCartaoCidadao: "Cartão de cidadão",
                        numeroIdentificacaoCivil: "Número de identificação civil: ",
                        dataValidade: "Data de validade: "
                    },
                    tabBilheteIdentidade: {
                        tituloTabBilheteIdentidade: "bilhete de identidade",
                        numeroBilheteIdentidade: "Número de bilhete de identidade: ",
                        dataValidade: "Data de validade: "
                    },
                    tabPassaporte: {
                        tituloTabPassaporte: "Passaporte",
                        numeroPassaporte: "Número de passaporte:",
                        dataValidade: "Data de validade: "
                    },
                    tabCartaConducao: {
                        tituloTabCartaConducao: "Carta de condução",
                        numeroCartaConducao: "Número da carta de condução: ",
                        dataEmissao: "Data de emissão: ",
                        dataValidade: "Data de validade: "
                    },
                },
                dadosFiliacao: {
                    tituloDadosFilicacao: "Dados filiação",
                    nomeMae: "Nome da Mãe: ",
                    nomePai: "Nome do Pai: "
                },
                dadosConjuge: {
                    tituloDadosConjuge: "Dados conjuge",
                    nomeConjuge: "Nome do conjuge "
                },
                dadosDescendentes: {
                    tituloDadosDescendentes: "Dados conjuge",
                    dadosDeDescendentes: "Nome do conjuge: "
                }
            },
            dadosEnderecosBancarios:{
                dadosResidenciais:{
                    tituloDadosResidenciais: "Dados residenciais",
                    morada: "Morada: ",
                    codigoPostal: "Código Postal: ",
                    pais: "Pais: ",
                    distrito: "Distrito: ",
                    concelho: "Concelho: ",
                    freguesia: "Freguesia: "
                },
                dadosBancarios:{
                    tituloDadosBancarios: "Dados residenciais",
                    nomeBanco: "Nome do banco: ",
                    agencia: "Nome da agencia: ",
                    titular: "Nome do titular: ",
                    iban: "Iban: "
                },
            },
            dadosOutrosDadosDocumentos:{
                tituloDocumentos: "Documentos: ",
                tituloObservacoes: "Observaçôes: ",
                tituloConfidencialidades: "Confidencialidades: "
            }
        }
    }
});

entidadesApp.controller('InserirEntidadeSingularController', function($scope, GETRestFulEntidadesFactory, EntidadesLabelFactory) {


    $scope.labels = EntidadesLabelFactory.DadosLabels;

    $scope.preencherGeneros = function() {
        GETRestFulEntidadesFactory.consultarGenero().success(function(response) { $scope.genero = response; }).error(function(error) { alert(error); });
    };

    $scope.preencherTitulos = function() {
        GETRestFulEntidadesFactory.consultarTitulos().success(function(response) { $scope.titulos = response; }).error(function(error) { alert(error); });
    };

    $scope.preencherSituacaoProfessional = function() {
        GETRestFulEntidadesFactory.consultarSituacaoProfessional().success(function(response) { $scope.situacaoProfessional = response; }).error(function(error) { alert(error); });
    };

    $scope.preencherPaises = function() {
        GETRestFulEntidadesFactory.consultarPaises().success(function(response) { $scope.paises = response; }).error(function(error) { alert(error); });
    };

    $scope.preencherDistritos = function() {
        GETRestFulEntidadesFactory.consultarDistritos().success(function(response) { $scope.distritos = response; }).error(function(error) { alert(error); });
    };

    $scope.preencherConcelhos = function() {
        GETRestFulEntidadesFactory.consultarConcelhos().success(function(response) { $scope.concelhos = response; }).error(function(error) { alert(error); });
    };

    $scope.preencherFreguesias = function() {
        GETRestFulEntidadesFactory.consultarFreguesias().success(function(response) { $scope.freguesias = response; }).error(function(error) { alert(error); });
    };

    $scope.preencherCnp = function() {
        GETRestFulEntidadesFactory.consultarCnp().success(function(response) { $scope.cnp = response.Root.ResultadosPesquisa.Resultado; }).error(function(error) { alert(error); });
    };

    $scope.preencherEspecialidade = function() {
        GETRestFulEntidadesFactory.consultarEspecialidade().success(function(response) { $scope.especialidade = response; }).error(function(error) { alert(error); });
    };

    $scope.preencherHabilitacoes = function() {
        GETRestFulEntidadesFactory.consultarHabilitacoes().success(function(response) { $scope.habilitacoes = response; }).error(function(error) { alert(error); });
    };

    $scope.preencherEstadoCivil = function() {
        GETRestFulEntidadesFactory.consultarEstadoCivil().success(function(response) { $scope.estadoCivil = response; }).error(function(error) { alert(error); });
    };

    $scope.preencherIdioma = function() {
        GETRestFulEntidadesFactory.consultarIdioma().success(function(response) { $scope.idioma = response; }).error(function(error) { alert(error); });
    };

    $scope.preencherNacionalidade = function() {
        GETRestFulEntidadesFactory.consultarNacionalidade().success(function(response) { $scope.nacionalidade = response; }).error(function(error) { alert(error); });
    };

    $scope.preencherSegundaNacionalidade = function() {
        GETRestFulEntidadesFactory.consultarSegundaNacionalidade().success(function(response) { $scope.segundaNacionalidade = response; }).error(function(error) { alert(error); });
    };

    $scope.formData = {};
    $scope.formData.date = "";
    $scope.opened = false;

    //Datepicker
    $scope.dateOptions = {
        'year-format': "'yy'",
        'show-weeks': false
    };
});

/*
* Autor: Jean-Pierre Carvalho
* Data actualização: 22-09-2016
* Tipo: Directiva
* Descrição: Criação de uma nova diretiva para inclusão de datepickers personalizadas
*/

entidadesApp.directive("datepickerdatanascimento", function() {
    return {
        restrict: "E",
        scope: {
            ngModel: "=",
            dateOptions: "=",
            opened: "=",
        },
        link: function($scope, element, attrs) {
            $scope.opendatepickerdatanascimento = function(event) {
                console.log("open");
                event.preventDefault();
                event.stopPropagation();
                $scope.opened = true;
            };
        },
        templateUrl: 'datepickerDataNascimento.html'
    }
});

entidadesApp.directive("datepickerhorainicial", function() {
    return {
        restrict: "E",
        scope: {
            ngModel: "=",
            dateOptions: "=",
            opened: "=",
        },
        link: function($scope, element, attrs) {
            $scope.opendatepickerhorainicial = function(event) {
                console.log("open");
                event.preventDefault();
                event.stopPropagation();
                $scope.opened = true;
            };
        },
        templateUrl: 'datepickerHoraInicialContacto.html'
    }
});

entidadesApp.directive("datepickerhorafinal", function() {
    return {
        restrict: "E",
        scope: {
            ngModel: "=",
            dateOptions: "=",
            opened: "=",
        },
        link: function($scope, element, attrs) {
            $scope.opendatepickerhorafinal = function(event) {
                event.preventDefault();
                event.stopPropagation();
                $scope.opened = true;
            };
        },
        templateUrl: 'datepickerHoraFinalContacto.html'
    }
});

entidadesApp.directive('dadosgerais', function($compile){
      return {
        restrict: 'E',
        templateUrl: 'dadosGerais.html',
  /*      link: function(scope, element, attrs) {
           scope.insert = function() {
             var container = angular.element('<div ng-include="\'tempTest.html\'"></div>');
             element.before($compile(container)(scope));
           }
        }*/
      }
    });

entidadesApp.directive('dadospessoais', function($compile){
      return {
        restrict: 'E',
        templateUrl: 'dadosPessoais.html',
  /*      link: function(scope, element, attrs) {
           scope.insert = function() {
             var container = angular.element('<div ng-include="\'tempTest.html\'"></div>');
             element.before($compile(container)(scope));
           }
        }*/
      }
    });

entidadesApp.directive('enderecos', function($compile){
      return {
        restrict: 'E',
        templateUrl: 'enderecosEdadosBancarios.html',
  /*      link: function(scope, element, attrs) {
           scope.insert = function() {
             var container = angular.element('<div ng-include="\'tempTest.html\'"></div>');
             element.before($compile(container)(scope));
           }
        }*/
      }
    });

entidadesApp.directive('documentos', function($compile){
      return {
        restrict: 'E',
        templateUrl: 'outrosDadosDocumentos.html',
  /*      link: function(scope, element, attrs) {
           scope.insert = function() {
             var container = angular.element('<div ng-include="\'tempTest.html\'"></div>');
             element.before($compile(container)(scope));
           }
        }*/
      }
    });


entidadesApp.controller('EntidadesController', ['$scope', '$http', function($scope, $http /*$rootScope, , $http, $filter, $timeout, $location, $uibModal, $log, RestFulEntidadesService*/ ) {

    $scope.servidor = "actuarial.pt:5000";

    $scope.entidadesConsultaHref = "#/entidades/consultar";
    $scope.entidadesInserirHref = "#/entidades/inserir/entidade";
    $scope.entidadesInserirEntidadeSingularHref = "#/entidades/inserir/entidade/singular";
    $scope.entidadesAlterarHref = "#/entidades/alterar/dados";
    $scope.entidadesSingularesHref = "#/entidades/singulares/consulta/dados";

    $scope.tituloEntidades = "Entidades";
    $scope.tituloConsultar = "Consultar";
    $scope.descricaoConsultar = "Descrição simples";

    //main.html
    $scope.nomeEntidadeLabel = "Jean-Pierre Carvalho";
    $scope.designacaoentidadeLabel = "Potencial Cliente";

    $scope.dadosEntidadeLabel = "Dados da entidade";
    $scope.informacoesLabel = "Informações";

    $scope.$on('$viewContentLoaded', function() {
        App.initAjax();
        Layout.setSidebarMenuActiveLink('set', $('#sidebar_menu_link_profile'));
    });

}]);

entidadesApp.controller('ConsultarModalController', function($rootScope, $scope, $uibModal, $log) {

    // Modal de consultar
    var $ctrlModalConsultar = this;

    $ctrlModalConsultar.animationsEnabled = true;

    $ctrlModalConsultar.abrirModalInserirEntidades = function(size) {
        var modalInstance = $uibModal.open({
            animation: $ctrlModalConsultar.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'consultarModal.html',
            controller: 'ConsultarModalController',
            controllerAs: '$ctrlModalConsultar',
            size: size,
            resolve: {
                items: function() {
                    return $ctrlModalConsultar.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $ctrlModalConsultar.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $ctrlModalConsultar.openComponentModal = function() {
        var modalInstance = $uibModal.open({
            animation: $ctrlModalConsultar.animationsEnabled,
            component: 'modalComponent',
            resolve: {
                items: function() {
                    return $ctrlModalConsultar.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $ctrlModalConsultar.selected = selectedItem;
        }, function() {
            $log.info('modal-component dismissed at: ' + new Date());
        });
    };

    $ctrlModalConsultar.toggleAnimation = function() {
        $ctrlModalConsultar.animationsEnabled = !$ctrlModalConsultar.animationsEnabled;
    };
});

entidadesApp.controller('InserirModalController', ['$scope', '$controller', '$uibModal', '$log', function($scope, $controller, $uibModal, $log) {


    // Modal de inserir
    var $ctrlModalInserir = this;

    $ctrlModalInserir.animationsEnabled = true;

    $ctrlModalInserir.abrirModalInserirEntidades = function(size) {
        var modalInstance = $uibModal.open({
            animation: $ctrlModalInserir.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'inserirModal.html',
            controller: 'InserirModalController',
            controllerAs: '$ctrlModalInserir',
            size: size,
            resolve: {
                items: function() {
                    return $ctrlModalInserir.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $ctrlModalInserir.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $ctrlModalInserir.openComponentModal = function() {
        var modalInstance = $uibModal.open({
            animation: $ctrlModalInserir.animationsEnabled,
            component: 'modalComponent',
            resolve: {
                items: function() {
                    return $ctrlModalInserir.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $ctrlModalInserir.selected = selectedItem;
        }, function() {
            $log.info('modal-component dismissed at: ' + new Date());
        });
    };

    $ctrlModalInserir.toggleAnimation = function() {
        $ctrlModalInserir.animationsEnabled = !$ctrlModalInserir.animationsEnabled;
    };
}]);

// Lixo!!!
entidadesApp.controller('ModalInstanceCtrl', function($uibModalInstance, items) {
    var $ctrlModalInserir = this;
    $ctrlModalInserir.items = items;
    $ctrlModalInserir.selected = {
        item: $ctrlModalInserir.items[0]
    };

    $ctrlModalInserir.ok = function() {
        $uibModalInstance.close($ctrlModalInserir.selected.item);
    };

    $ctrlModalInserir.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});

entidadesApp.component('modalComponent', {
    templateUrl: 'myModalContent.html',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: function() {
        var $ctrlModalInserir = this;

        $ctrlModalInserir.$onInit = function() {
            $ctrlModalInserir.items = $ctrlModalInserir.resolve.items;
            $ctrlModalInserir.selected = {
                item: $ctrlModalInserir.items[0]
            };
        };

        $ctrlModalInserir.ok = function() {
            $ctrlModalInserir.close({ $value: $ctrlModalInserir.selected.item });
        };

        $ctrlModalInserir.cancel = function() {
            $ctrlModalInserir.dismiss({ $value: 'cancel' });
        };
    }
});
