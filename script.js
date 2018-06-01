	// create the module and name it taxApp
	var taxApp = angular.module('taxApp', ['ngRoute']);

	// configure our routes 
	taxApp.config(function($routeProvider) {
		$routeProvider

			// route for the home pge
			.when('/', {
				templateUrl : 'views/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'views/about.html',
				controller  : 'aboutController'
			})

				// route for the conferences page
			.when('/conferences', {
				templateUrl : 'views/conferences.html',
				controller  : 'conferencesController'
			})
	});

	taxApp.directive("headerDirective", function() {
		return {
			restrict : "E",
			templateUrl : 'shared/header.html'
		};
	});

	taxApp.directive("footerDirective", function() {
		return {
			restrict : "E",
			templateUrl : 'shared/footer.html'
		};
	});

	// create the controller and inject Angular's $scope
	taxApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	taxApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	taxApp.controller('conferencesController', function($scope) {
		$scope.message = 'Look! I am the conferences page.';
	});


	

	