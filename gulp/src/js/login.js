var loginApp = angular.module('Login', ['ui.router','ngCookies'])
		loginApp.controller('loginCtrl',function($scope,$http,$window,$cookieStore){
			$cookieStore.remove("username");
			$window.alert($cookieStore.get("username"));
			var user = function(username,password){
				this.userName = username;
				this.password = password;
			};
			var users;
			$scope.submit = function(){
				users = new user($scope.username,$scope.password)
				//console.log(users);
				$cookieStore.put("username",$scope.username);
				//$window.alert($cookieStore.get("username"));

			$http.post('http://localhost:3000/api/login',users)
				.success(function(data, status, headers, config) {
					console.log(data.authentication);
					if(data.authentication=="success"){
						window.location.href="templates/root.html";
					}
	        	}).error(function(data, status, headers, config) {
	        		console.log(data);
	            	console.log("http get error.");
	        	});
	        }

		});