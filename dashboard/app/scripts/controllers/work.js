 // var App = angular.module("DashboardApp", []);

App.controller("WorkCtrl", function($scope, $http, AddEditDel){
//App.controller("userInfo", function($scope, $http){

	$http.get('http://localhost:3000/api/work').success(function(data, status, headers, config) {
		$scope.contents=data.works;
	}).error(function(data, status, headers, config) {
		console.log("http get error.");
	});
	
	$scope.visible=false;
	$scope.cardShow=true;
	$scope.listShow=false;
	$scope.showList=function() {
		$scope.visible=!$scope.visible;
	}
	$scope.setList=function() {
		$scope.cardShow=false;
		$scope.listShow=true;
		$scope.visible=!$scope.visible;
	}
	$scope.setCard=function() {
		$scope.cardShow=true;
		$scope.listShow=false;
		$scope.visible=!$scope.visible;
	}
	$scope.addItem=function() {
		AddEditDel.setFlag(true, true, false, false);
		$scope.$emit('addItem');
		var myListener=$scope.$on("addSubmit", function(e, addContent) {
			if(addContent==false) {
				xx=1;
			}else{
				$scope.contents.push(addContent);
			}
			myListener();
		});
	}
	
	$scope.editItem=function() {
		var index=$scope.contents.indexOf(this.content);
		AddEditDel.setFlag(true, false, true, false);
		$scope.$emit('delItem');
		var myListener=$scope.$on("editSubmit", function(e, editContent) {
			if(editContent==false) {
			}else{
				$scope.contents[index].title=editContent.title;
				$scope.contents[index].author=editContent.author;
				$scope.contents[index].like=editContent.like;
				$scope.contents[index].comment=editContent.comment;
			}
			myListener();
		});
	}
	$scope.delItem=function() {
		var index=$scope.contents.indexOf(this.content);
		AddEditDel.setFlag(true, false, false, true);
		$scope.$emit('delItem');
		var myListener=$scope.$on("deleteSubmit", function(e, flag) {
			if(flag==false) {
			}else{
				$scope.contents.splice(index, 1);
			}
			myListener();
		});
	}
});