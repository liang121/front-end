var xixi = "string";
function goodbyeWorld(){
	console.log("Goodbye World!");
}
var haha = "string";
function helloWorld(){
	console.log("Hello World!");
}
var root_partial = angular.module("root_partial",['ui.router','ngCookies']);
root_partial.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		// .state("root",{
		// 	url:"/root",
		// 	templateUrl:"../templates/overview.html"
		// })
		.state("overview",{
			url:"/overview",
			templateUrl:"overview.html"
		})
		.state("work",{
			url:"/work",
			templateUrl:"work.html"
		})
		.state("producer",{
			url:"/producer",
			templateUrl:"producer.html"
		})
		.state("contact",{
			url:"/contact",
			templateUrl:"contact.html"
		})
		$urlRouterProvider.otherwise("/work")
})
root_partial.controller('userInfo',function($scope,$cookieStore){
	var auth = $cookieStore.get("username");
	// if(auth!="minh"&&auth!="darth"){
	// 	window.location.href="login.html";
	// }
	$('#navbar span:first-of-type').text($cookieStore.get("username"));
	var d = new Date();
    var day = d.getDate();
    var month = d.getMonth()+1;
    var year = d.getFullYear();
    var dateString = day + "/" + month + "/" + year;
	$('#navbar span:first-of-type + span').text(dateString);

})
root_partial.controller('Logout',function($scope,$cookieStore){
	
	$scope.logout = function(){
		$cookieStore.remove("username");
		window.alert($cookieStore.get("username"));
		window.location.href="login.html";
	}
	
})