App.controller('overview',function($scope,$cookieStore,$location,$http){
	$http.get('http://localhost:3000/api/profile')
		.success(function(data, status, headers, config) {
			var user = $cookieStore.get("username");
			if(user=="minh"){
				$scope.userNick = data.profiles[0].nickname;
				$scope.userName = data.profiles[0].username;
				$scope.imgUrl = "../" + data.profiles[0].profileImage;
			}
			else{
				$scope.userNick = data.profiles[1].nickname;
				$scope.userName = data.profiles[1].username;
				$scope.imgUrl = "../" + data.profiles[1].profileImage;
			}
			
		}).error(function(data, status, headers, config){
			console.log("http get error");
		})
});