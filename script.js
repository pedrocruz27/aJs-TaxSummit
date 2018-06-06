var translationsEN = {

	//header
	HEADER_CONFERENCES: "Conferences",
	HEADER_ATENDEES: "Atendees",
	HEADER_SPEAKERS: "Speakers",
	HEADER_CALENDAR: "Calendar",
	HEADER_HELP: "Help",

	//home
	HOME_JUMBO_SLOGAN: "The Challanges of a Digital World",
	HOME_JUMBO_DATE: "Lisbon 23-25 October",
	HOME_JUMBO_DAYS: "Days",
	HOME_JUMBO_HOURS: "Hours",
	HOME_JUMBO_MINUTES: "Minutes",

	HOME_WHAT_IS: "What is the Tax Summit?",

	HOME_DISCOVER_ACTIVITIES: "Take a look at our activities",
	HOME_ACTIVITIES_TALKS: "Talks",
	HOME_ACTIVITIES_PROGRAM: "Program",
	HOME_ACTIVITIES_SPEAKERS: "Speakers"
	
  };
  
  var translationsPT = {

	//header
	HEADER_CONFERENCES: "Conferências",
	HEADER_ATENDEES: "Participantes",
	HEADER_SPEAKERS: "Oradores",
	HEADER_CALENDAR: "Calendário",
	HEADER_HELP: "Ajuda",

	//home
	HOME_JUMBO_SLOGAN: "Os Desafios do Mundo Digital",
	HOME_JUMBO_DATE: "Lisboa 23-25 Outubro",
	HOME_JUMBO_DAYS: "Dias",
	HOME_JUMBO_HOURS: "Horas",
	HOME_JUMBO_MINUTES: "Minutos",

	HOME_WHAT_IS: "O que é a Tax Summit?",

	HOME_DISCOVER_ACTIVITIES: "Descobre as nossas atividades",
	HOME_ACTIVITIES_TALKS: "Discursos",
	HOME_ACTIVITIES_PROGRAM: "Programa",
	HOME_ACTIVITIES_SPEAKERS: "Oradores"

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
			.when('/attendees', {
				templateUrl : 'views/attendees.html',
				controller  : 'attendeesController'
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
		$translateProvider.translations('pt', translationsPT);
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

	taxApp.controller('attendeesController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	taxApp.controller('conferencesController', function($scope) {
		$scope.message = 'Look! I am the conferences page.';
	});


	//changes language via the selected dropdown in the header
	taxApp.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {
 
		$scope.languages = [
			{name:'EN', value:'en'},
			{name:'PT', value:'pt'},
		];
		  
		$scope.selectedLanguage = 'en';

		$scope.changeLanguage = function (langKey) {
		  $translate.use(langKey);
		};
	  }]);


	

	