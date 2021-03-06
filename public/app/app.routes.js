angular.module('app.routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/404');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'app/views/pages/unauthenticated/home.html',
    authenticated: false
  })

  .state('about', {
    url: '/about',
    templateUrl: 'app/views/pages/unauthenticated/about.html',
    authenticated: false
  })

  .state('contact', {
    url: '/contact',
    templateUrl: 'app/views/pages/unauthenticated/contact.html',
    authenticated: false
  })

  // .state('login', {
  //   url: '/login',
  //   templateUrl: 'app/views/pages/unauthenticated/login.html',
  //   controller: 'mainController',
  //   controllerAs: 'login',
  //   authenticated: false
  // })
  //
  // .state('signup', {
  //   url: '/signup',
  //   templateUrl: 'app/views/pages/unauthenticated/signup.html',
  //   controller: 'signupController',
  //   controllerAs: 'signup',
  //   authenticated: false
  // })

  .state('404', {
    url: '/404',
    templateUrl: 'app/views/pages/404.html',
    authenticated: false
  })

  .state('appUnavailable', {
    url: '/error',
    templateUrl: 'app/views/pages/applicationUnavailable.html',
    authenticated: false
  })

  .state('account', {
    url: '/account',
    templateUrl: 'app/views/pages/authenticated/account.html',
    controller: 'accountController',
    controllerAs: 'account',
    authenticated: true
  })

  .state('updateAccount', {
    url: '/update',
    templateUrl: 'app/views/pages/authenticated/updateAccount.html',
    controller: 'accountController',
    controllerAs: 'account',
    authenticated: true
  })

  .state('transactions', {
    url: '/transactions',
    templateUrl: 'app/views/pages/authenticated/transactions.html',
    controller: 'accountController',
    controllerAs: 'account',
    authenticated: true
  })

  .state('api', {
    url: '/api',
    templateUrl: 'app/views/pages/unauthenticated/api_page.html',
    authenticated: false
  })

  .state('portfolio', {
    url: '/portfolio',
    templateUrl: 'app/views/pages/authenticated/portfolio.html',
    controller: 'stockController',
    controllerAs: 'stocks',
    authenticated: true
  });

})

.config(["$locationProvider", function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);
