(function(){
	var app = angular.module('myApps', []);

	app.controller('myController', function(){
		this.reviews = [{
			text: "Head 1",
			desc: "desc 1"
		},{
			text: "Head 2",
			desc: "desc 2"
		},{
			text: "Head 3",
			desc: "desc 3"
		}]
	});
})();