

/* App */
var MetronicApp = angular.module("MetronicApp", [
    "ui.router",
    "ui.bootstrap",
    "oc.lazyLoad",
    "ngSanitize"
]);

/* Configurar ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
MetronicApp.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        // global configs go here
    });
}]);

/*//AngularJS v1.3.x workaround for old style controller declarition in HTML
MetronicApp.config(['$controllerProvider', function($controllerProvider) {
    // this option might be handy for migrating old apps, but please don't use it
    // in new ones!
    $controllerProvider.allowGlobals();
}]);*/

/********************************************

/* Setup global settings */
MetronicApp.factory('settings', ['$rootScope', function($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageSidebarClosed: false, // sidebar menu state
            pageContentWhite: true, // set page content layout
            pageBodySolid: false, // solid body color state
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
        assetsPath: '../assets',
        globalPath: '../assets/global',
        layoutPath: '../assets/layouts/layout',
        bowerPath: '../bower_components'
    };

    $rootScope.settings = settings;

    return settings;
}]);

/* Setup App Main Controller */
MetronicApp.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.$on('$viewContentLoaded', function() {
        //App.initComponents(); // init core components
        //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive 
    });
}]);

/***
Layout Partials.
By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial 
initialization can be disabled and Layout.init() should be called on page load complete as explained above.
***/

/* Setup Layout Part - Header */
MetronicApp.controller('HeaderController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initHeader(); // init header
    });
}]);

// Sidebar setup
MetronicApp.controller('SidebarController', ['$scope', function($scope) {

    $scope.entidadesConsultaHref = "#/entidades/consultar";
    $scope.entidadesInserirHref = "#/entidades/inserir/entidade";
    $scope.entidadesAlterarHref = "#/entidades/alterar/dados";
    $scope.entidadesSingularesHref = "#/entidades/singulares/consulta/dados";
    

    $scope.$on('$includeContentLoaded', function() {
        Layout.initSidebar(); // init sidebar
    });

}]);

/* Setup Layout Part - Quick Sidebar */
MetronicApp.controller('QuickSidebarController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        setTimeout(function() {
            QuickSidebar.init(); // init quick sidebar        
        }, 2000)
    });
}]);

/* Setup Layout Part - Theme Panel */
MetronicApp.controller('ThemePanelController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Demo.init(); // init theme panel
    });
}]);

/* Setup Layout Part - Footer */
MetronicApp.controller('FooterController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initFooter(); // init footer
    });
}]);

/* Routing para todas as páginas */
MetronicApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    // Reenviar caso não exista página designada
    $urlRouterProvider

    .otherwise("/dashboard.html");

    $stateProvider

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state('dashboard', {
        url: "/dashboard.html",
        templateUrl: "views/dashboard.html",
        data: { pageTitle: 'Admin Dashboard Template' },
        controller: "DashboardController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'MetronicApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                        '../assets/global/plugins/morris/morris.css',
                        '../assets/global/plugins/morris/morris.min.js',
                        '../assets/global/plugins/morris/raphael-min.js',
                        '../assets/global/plugins/jquery.sparkline.min.js',

                        '../assets/pages/scripts/dashboard.min.js',
                        'js/controllers/DashboardController.js',
                    ]
                });
            }]
        }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("profile", {
        url: "/profile",
        templateUrl: "views/profile/main.html",
        data: { pageTitle: 'User Profile' },
        controller: "UserProfileController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'MetronicApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                    files: [
                        '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                        '../assets/pages/css/profile.css',

                        '../assets/global/plugins/jquery.sparkline.min.js',
                        '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',

                        '../assets/pages/scripts/profile.min.js',

                        'js/controllers/UserProfileController.js'
                    ]
                });
            }]
        }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("profile.dashboard", {
        url: "/dashboard",
        templateUrl: "views/profile/dashboard.html",
        data: { pageTitle: 'User Profile' }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("profile.account", {
        url: "/account",
        templateUrl: "views/profile/account.html",
        data: { pageTitle: 'User Account' }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("profile.help", {
        url: "/help",
        templateUrl: "views/profile/help.html",
        data: { pageTitle: 'User Help' }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("entidades", {
        url: "/entidades",
        templateUrl: "views/entidades/main.html",
        data: { pageTitle: 'Entidades' },
        controller: "EntidadesController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'MetronicApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                    files: [
                        '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                        '../assets/pages/css/profile.css',

                        '../assets/global/plugins/jquery.sparkline.min.js',
                        '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',

                        '../assets/pages/scripts/profile.min.js',

                        'js/controllers/EntidadesController.js'
                    ]
                });
            }]
        }
    })

    /*
     * Descrição: Consulta de entidades singulares e colectivas
     * Created by: 01-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("entidadesConsultar", {
        url: "/entidades/consultar",
        templateUrl: "views/entidades/consultarEntidades/consultar.html",
        data: { pageTitle: 'Entidades - Consultar' },
        controller: "EntidadesController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'MetronicApp',
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'js/controllers/EntidadesController.js'
                    ]
                });
            }]
        }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 01-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("entidadesSingularesConsulta", {
        url: "/entidades/singulares/consulta",
        templateUrl: "views/entidades/entidadesSingulares/main.html",
        data: { pageTitle: 'Entidades - Consultar' },
        controller: "EntidadesController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'MetronicApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                    files: [
                        '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                        '../assets/pages/css/profile.css',

                        '../assets/global/plugins/jquery.sparkline.min.js',
                        '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',

                        '../assets/pages/scripts/profile.min.js',

                        'js/controllers/EntidadesController.js'
                    ]
                });
            }]
        }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 01-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("entidadesSingularesConsulta.dashboard", {
        url: "/dashboard",
        templateUrl: "views/entidades/entidadesSingulares/dashboard.html",
        data: { pageTitle: 'User Profile' }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("entidadesSingularesConsulta.dados", {
        url: "/dados",
        templateUrl: "views/entidades/entidadesSingulares/dados.html",
        data: { pageTitle: 'User Account' }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("entidadesSingularesConsulta.help", {
        url: "/help",
        templateUrl: "views/entidades/entidadesSingulares/help.html",
        data: { pageTitle: 'User Help' }
    })


    .state("entidadesInserirEntidade", {
        url: "/entidades/inserir/entidade",
        templateUrl: "views/entidades/inserirEntidades/inserir.html",
        data: { pageTitle: 'Entidades - Inserir' },
        controller: "EntidadesController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'MetronicApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                    files: [


                        '../bower_components/bootstrap-select/dist/css/bootstrap-select.min.css',
                        '../bower_components/bootstrap-select/dist/js/bootstrap-select.min.js',


                        '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                        '../assets/pages/css/profile.css',
                        '../assets/global/plugins/select2/css/select2.min.css',
                        '../assets/global/plugins/select2/css/select2-bootstrap.min.css',


                        '../assets/global/plugins/jquery.sparkline.min.js',
                        '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',
                        '../assets/global/plugins/select2/js/select2.full.min.js',
                        '../assets/pages/scripts/components-select2.min.js',

                        '../assets/pages/scripts/profile.min.js',
                        'js/controllers/Modalcontroller.js',
                        'js/controllers/EntidadesController.js'
                    ]
                });
            }]
        }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("entidadesInserir", {
        url: "/entidades/inserir/entidade/singular",
        templateUrl: "views/entidades/inserirEntidades/entidadesSingulares/main.html",
        data: { pageTitle: 'Entidades - Inserir' },
        controller: 'InserirEntidadeSingularController',
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'MetronicApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                    files: [
                        '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                        '../assets/pages/css/profile.css',
                        '../assets/global/plugins/select2/css/select2.min.css',
                        '../assets/global/plugins/select2/css/select2-bootstrap.min.css',


                        '../assets/global/plugins/jquery.sparkline.min.js',
                        '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',
                        '../assets/global/plugins/select2/js/select2.full.min.js',
                        '../assets/pages/scripts/components-select2.min.js',

                        '../assets/pages/scripts/profile.min.js',

                        'js/controllers/EntidadesController.js'
                    ]
                });
            }]
        }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("entidadesInserir.dashboard", {
        url: "/dashboard",
        templateUrl: "views/entidades/inserirEntidades/entidadesSingulares/dashboard.html",
        data: { pageTitle: 'User Profile' }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("entidadesInserir.dados", {
        url: "/dados",
        templateUrl: "views/entidades/inserirEntidades/entidadesSingulares/dados.html",
        data: { pageTitle: 'User Account' }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("entidadesInserir.help", {
        url: "/help",
        templateUrl: "views/entidades/inserirEntidades/entidadesSingulares/help.html",
        data: { pageTitle: 'User Help' }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("entidadesAlterar", {
        url: "/entidades/alterar",
        templateUrl: "views/entidades/alterarEntidades/main.html",
        data: { pageTitle: 'Entidades - Alterar' },
        controller: "EntidadesController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'MetronicApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                    files: [
                        '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                        '../assets/pages/css/profile.css',
                        '../assets/global/plugins/select2/css/select2.min.css',
                        '../assets/global/plugins/select2/css/select2-bootstrap.min.css',


                        '../assets/global/plugins/jquery.sparkline.min.js',
                        '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',
                        '../assets/global/plugins/select2/js/select2.full.min.js',
                        '../assets/pages/scripts/components-select2.min.js',

                        '../assets/pages/scripts/profile.min.js',

                        'js/controllers/EntidadesController.js'
                    ]
                });
            }]
        }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("entidadesAlterar.dashboard", {
        url: "/dashboard",
        templateUrl: "views/entidades/alterarEntidades/dashboard.html",
        data: { pageTitle: 'User Profile' }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("entidadesAlterar.dados", {
        url: "/dados",
        templateUrl: "views/entidades/alterarEntidades/dados.html",
        data: { pageTitle: 'User Account' }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("entidadesAlterar.help", {
        url: "/help",
        templateUrl: "views/entidades/alterarEntidades/help.html",
        data: { pageTitle: 'User Help' }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("entidadesAnular", {
        url: "/entidades/anular",
        templateUrl: "views/entidades/anular.html",
        data: { pageTitle: 'Entidades - Anular' },
        controller: "EntidadesController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'MetronicApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                    files: [
                        '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                        '../assets/pages/css/profile.css',

                        '../assets/global/plugins/jquery.sparkline.min.js',
                        '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',

                        '../assets/pages/scripts/profile.min.js',

                        'js/controllers/EntidadesController.js'
                    ]
                });
            }]
        }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("entidadesReactivar", {
        url: "/entidades/reactivar",
        templateUrl: "views/entidades/reactivar.html",
        data: { pageTitle: 'Entidades - Reactivar' },
        controller: "EntidadesController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'MetronicApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                    files: [
                        '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                        '../assets/pages/css/profile.css',

                        '../assets/global/plugins/jquery.sparkline.min.js',
                        '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',

                        '../assets/pages/scripts/profile.min.js',

                        'js/controllers/EntidadesController.js'
                    ]
                });
            }]
        }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("parametrizacoesCNP", {
        url: "/parametrizacoes/cnp",
        templateUrl: "views/parametrizacoes/cnp.html",
        data: { pageTitle: 'Parametrizações - CNP' },
        controller: "ParametrizacoesController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'MetronicApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                    files: [
                        'js/controllers/ParametrizacoesController.js'
                    ]
                });
            }]
        }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state("parametrizacoesCAE", {
        url: "/parametrizacoes/cae",
        templateUrl: "views/parametrizacoes/cae.html",
        data: { pageTitle: 'Parametrizações - CAE' },
        controller: "ParametrizacoesController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'MetronicApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                    files: [
                        'js/controllers/ParametrizacoesController.js'
                    ]
                });
            }]
        }
    })

    /*
     * Descrição: Pesquisa de entidades singulares
     * Created by: 16-09-2016
     * Data actualização: 16-09-2016
     * Desenvolvedor: Jean-Pierre Carvalho
     */

    .state('todo', {
        url: "/todo",
        templateUrl: "views/todo.html",
        data: { pageTitle: 'Todo' },
        controller: "TodoController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'MetronicApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                    files: [
                        '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                        '../assets/apps/css/todo-2.css',
                        '../assets/global/plugins/select2/css/select2.min.css',
                        '../assets/global/plugins/select2/css/select2-bootstrap.min.css',

                        '../assets/global/plugins/select2/js/select2.full.min.js',

                        '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',

                        '../assets/apps/scripts/todo-2.min.js',

                        'js/controllers/TodoController.js'
                    ]
                });
            }]
        }
    })

}]);

/* Init global settings and run the app */
MetronicApp.run(["$rootScope", "settings", "$state", function($rootScope, settings, $state) {
    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.$settings = settings; // state to be accessed from view
}]);
