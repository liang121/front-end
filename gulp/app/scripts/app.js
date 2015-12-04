// var App = angular.module("Login",['ui.router','ngCookies']);
// App.config(function($stateProvider, $urlRouterProvider){
// 	$stateProvider
// 		.state("login",{
// 			url:"/login",
// 			templateUrl:"../templates/login.html"
// 		})
// 		.state("overview",{
// 			url:"/overview",
// 			templateUrl:"../templates/overview.html"
// 		})
// 		.state("work",{
// 			url:"/work",
// 			templateUrl:"../templates/work.html"
// 		})
// 		.state("producer",{
// 			url:"/producer",
// 			templateUrl:"../templates/producer.html"
// 		})
// 		.state("contact",{
// 			url:"/contact",
// 			templateUrl:"../templates/contact.html"
// 		})
// 		$urlRouterProvider.otherwise("/login")
// })
// App.controller('loginCtrl',function($scope,$http,$window,$cookieStore){
// 			console.log(1);
// 			$cookieStore.remove("username");
// 			$window.alert($cookieStore.get("username"));
// 			var user = function(username,password){
// 				this.userName = username;
// 				this.password = password;
// 			};
// 			var users;
// 			$scope.submit = function(){
// 				users = new user($scope.username,$scope.password)
// 				console.log(users);
// 				$cookieStore.put("username",$scope.username);
// 				$window.alert($cookieStore.get("username"));

// 			$http.post('http://localhost:3000/api/login',users)
// 				.success(function(data, status, headers, config) {
// 					console.log(data.authentication);
// 					if(data.authentication=="success"){
// 						window.location.href="root.html";
// 					}
// 	        	}).error(function(data, status, headers, config) {
// 	        		console.log(data);
// 	            	console.log("http get error.");
// 	        	});
// 	        }

// 		});