
App.controller('TabsCtrl', function ($scope, $window,$http,$timeout) {
	
	$scope.mytime = new Date();
/////////////////get datas from services/////////////////////////
	$http.get('http://localhost:3000/api/location')
		.success(function(data, status, headers, config) {
			$scope.subjectLocation = data.locations;
		}).error(function(data, status, headers, config){
			console.log("http get error");
		})
	$http.get('http://localhost:3000/api/category')
	.success(function(data, status, headers, config) {
		$scope.subjectCategorys= data.categories;
	}).error(function(data, status, headers, config){
		console.log("http get error");
	})

	$scope.randomNum = Math.floor((Math.random() * 10000000000) + 1);
	$scope.user={};
//////////////////////next buttons///////////////////////////
	$scope.informationNext = function(){
		 $timeout(function(){
        	document.getElementById("query").children[0].click();
    	});
	}
	$scope.queryNext = function(){
		$timeout(function(){
        	document.getElementById("confirmation").children[0].click();
   		});
	}
//////////////////////ratings////////////////////////////////
	$scope.rate = 7;
	$scope.max = 10;
	$scope.isReadonly = false;
	$scope.hoveringOver = function(value) {
		$scope.overStar = value;
		$scope.percent = 100 * (value / $scope.max);
	};
//////////////////////send email//////////////////////////////
	var email = 'liangmoyu1@gmail.com';
	var subject = 'confirmation';
	$scope.email=function() {
		console.log("1");
		var body_message = $('#conf').text();
	    var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' +body_message;
	    console.log($("#conf").text());
	    window.open(mailto_link);
	};

});