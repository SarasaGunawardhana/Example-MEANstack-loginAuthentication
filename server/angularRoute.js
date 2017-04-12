app.config(function ($routeProvider) {

		$routeProvider.when('/', {
				templateUrl: '../views/login.html',
				controller: 'loginController'
		}).when('/index', {
				templateUrl: '../views/login.html',
				controller: 'loginController'
		}).when('/home', {
				templateUrl: '../views/home.html',
				controller: 'studentController'
		}).otherwise({
				redirectTo: "/"
		});
});
