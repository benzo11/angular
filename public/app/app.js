var app = angular.module('ordersRecords', [
    //Dependancies
    'ngRoute',
    'ngResource',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    //App
    'routes',
    'homeController'

)
    .constant('API_URL', 'http://192.168.33.10/api/v1/');


app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider',
    function($httpProvider, $stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('common', {
                templateUrl: 'index.html',
                abstract: true,
            })
            .state('dashboard', {
                url: '/dashboard',
                parent: 'common',
                templateUrl: 'index.html',
                //template: '<div><h4>dashboard</h4></div>',
                //controller: 'DashboardCtrl'
            })
            .state('crm', {
                url: '/crm',
                parent: 'common',
                //templateUrl: '/app/crm/crm.html',
                template: '<div><h4>CRM</h4></div>',
                //controller: 'CrmCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'tpl.login.html',
            });

        $urlRouterProvider.otherwise('/crm');
    }
]);