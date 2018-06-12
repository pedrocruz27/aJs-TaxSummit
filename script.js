//language object
function myLang(key, lang) {
	this.key = key;
	this.lang = lang;
}
//array to store languages
var langArray = [];

//just the key of the language
var myArray = ["en", "pt"];

// create the module and name it taxApp
	var taxApp = angular.module('taxApp', ['ngRoute', 'pascalprecht.translate']);

	taxApp.constant('translations', {});

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

		$translateProvider.preferredLanguage('en');
		$translateProvider.useLoader('customLoader');
		$translateProvider.forceAsyncReload(true);
		
	  }]);


	  //it loads the first translations
	  taxApp.factory('customLoader', function ($q, translations) {
		return function (options) {
		  var deferred = $q.defer();
		  if(translations[options.key] === undefined){
				for( i = 0; i < myArray.length; i++) {
					jQuery.ajax({
						type: "GET",
						url: 'http://localhost:3000/translations_' + myArray[i],
						async: false,
						success: function(data) {
							translations[myArray[i]] = data;
							deferred.resolve(data);
							langArray.push(new myLang(myArray[i], data));						
						}
					});	
				}
		  }
		  else
		  {
				deferred.resolve(translations[options.key]);		
		  }	  
		  console.log(translations);
		  return deferred.promise;
		}
	});

	//service to add more translations after inital ones
	taxApp.service('translateServ', ['translations', '$translate',  function (translations, $translate) {
		var obj1, obj2, sum;
		this.addTranslation = function(lang, trans){
			for (var i in langArray) {
				if (langArray[i].key == lang) {
					obj1 = langArray[i].lang; 
				}
			}
			obj2 = trans;
			sum = $.extend( obj1, obj2);
			translations[lang] = sum;
			$translate.refresh();
		}
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

	taxApp.controller('attendeesController', function($scope, $http) {
		$scope.message = 'Look! I am an about page.';

	});

	taxApp.controller('conferencesController', function($scope) {
		$scope.message = 'Look! I am the conferences page.';
	});

	
	//changes language via the selected dropdown in the header
	taxApp.controller('Ctrl', ['$translate', '$scope', 'translations','translateServ', function ($translate, $scope, translations, translateServ) {
 
		$scope.languages = [
			{name:'EN', value:'en'},
			{name:'PT', value:'pt'},
		];
		  
		$scope.selectedLanguage = 'en';

		$scope.changeLanguage = function (langKey) {
		  $translate.use(langKey);
		};
	  
		$scope.addMultiTranslation = function(){
			var engTrans = {
				"HEADLINE": "Hello there! (changed)"
				};
			var ptTrans = {
				"HEADLINE": "Tasse bem??! (mudado)"
				};
			translateServ.addTranslation("en", engTrans);
			translateServ.addTranslation("pt", ptTrans);
		}
		
	}]);



	

	