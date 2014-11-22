(function(){
	"use strict";
	var app = angular.module("Lenkyun", ['ngMaterial', 'ngRoute']);
	
	app.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when('/registration', {
				templateUrl: './components/register.html',
				controller: 'BookCtrl',
				controllerAs: 'book'
			})
		$locationProvider.html5Mode(true);
	});
	
	app.controller('WebController', function($scope, $mdSidenav, $mdDialog){
		$scope.signedIn = false;
		$scope.menu = {
			items: [{
				name: "Sign In",
				contentSwitch: "<paper-input label='Username'></paper-input>\n" +
							   "<paper-input label='Password'></paper-input>",
				showSwitch: false,
				func: function(ev){
					this.showSwitch = !this.showSwitch;
				}
			}]
		};
	});
})();