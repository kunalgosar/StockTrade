// Main angular application

angular.module('routerApp', ['routerRoutes'])

.controller('mainController', function() {
  var vm = this;
  vm.titleMessage = 'Welcome to vStock!';
})

.controller('homeController', function() {
  var vm = this;
  vm.titleMessage = 'Welcome to the home page of vStock';
})

.controller('aboutController', function() {
  var vm = this;
  vm.titleMessage = 'This is the about page';
})

.controller('contactController', function() {
  var vm = this;
  vm.titleMessage = 'Contact Us!';
})

.controller('loginController', function() {
  var vm = this;
  vm.titleMessage = 'Log in here!';
})

.controller('signupController', function() {
  var vm = this;
  vm.titleMessage = 'Sign up here!';
})

.controller('termofuseController', function() {
  var vm = this;
  vm.titleMessage = 'These are the terms of use';
});
