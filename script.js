var translationsEN = {
	HEADLINE: 'What an awesome module!',
	PARAGRAPH: 'Srsly!',
	PASSED_AS_TEXT: 'Hey there! I\'m passed as text value!',
	PASSED_AS_ATTRIBUTE: 'I\'m passed as attribute value, cool ha?',
	PASSED_AS_INTERPOLATION: 'Beginners! I\'m interpolated!',
	VARIABLE_REPLACEMENT: 'Hi {{name}}',
	MISSING_TRANSLATION: 'Oops! I have not been translated into German...',
	BUTTON_LANG_DE: 'German',
	BUTTON_LANG_EN: 'English'
  };
  
  var translationsDE= {
	HEADLINE: 'Was für ein großartiges Modul!',
	PARAGRAPH: 'Ernsthaft!',
	PASSED_AS_TEXT: 'Hey! Ich wurde als text übergeben!',
	PASSED_AS_ATTRIBUTE: 'Ich wurde als Attribut übergeben, cool oder?',
	PASSED_AS_INTERPOLATION: 'Anfänger! Ich bin interpoliert!',
	VARIABLE_REPLACEMENT: 'Hi {{name}}',
	// MISSING_TRANSLATION is ... missing :)
	BUTTON_LANG_DE: 'Deutsch',
	BUTTON_LANG_EN: 'Englisch'
  };
	
	// create the module and name it taxApp
	var taxApp = angular.module('taxApp', ['ngRoute', 'pascalprecht.translate']);

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

	//configure our translations
	taxApp.config(['$translateProvider', function ($translateProvider) {
		// add translation tables
		$translateProvider.translations('en', translationsEN);
		$translateProvider.translations('de', translationsDE);
		$translateProvider.fallbackLanguage('en');
		$translateProvider.preferredLanguage('en');
	  }]);


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



	taxApp.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {
 
		$scope.languages = [
			{name:'EN', value:'en'},
			{name:'DE', value:'de'},
		  ]
		  
		$scope.selectedLanguage = 'en';

		$scope.changeLanguage = function (langKey) {
		  $translate.use(langKey);
		};
	  }]);


	

	