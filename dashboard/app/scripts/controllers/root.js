
App.controller('userInfo',function($scope,$cookieStore,$location,$http, AddEditDel){
	var auth = $cookieStore.get("username");
	$scope.$on('addItem', function(e){
		$scope.backcoverShow=AddEditDel.getBack();
		$scope.addShow=AddEditDel.getAdd();
		$scope.editShow=AddEditDel.getEdit();
		$scope.delShow=AddEditDel.getDel();
	});
	$scope.$on('editItem', function(e){
		$scope.backcoverShow=AddEditDel.getBack();
		$scope.addShow=AddEditDel.getAdd();
		$scope.editShow=AddEditDel.getEdit();
		$scope.delShow=AddEditDel.getDel();
	});
	$scope.$on('delItem', function(e){
		$scope.backcoverShow=AddEditDel.getBack();
		$scope.addShow=AddEditDel.getAdd();
		$scope.editShow=AddEditDel.getEdit();
		$scope.delShow=AddEditDel.getDel();
	});

	$scope.addSubmit=function(flag) {
		if(flag=="submit"){
			var addContent={};
			addContent.title=$scope.addTitle;
			addContent.author=$scope.addAuthor;
			addContent.like=$scope.addLike;
			addContent.comment=$scope.addComment;
			$scope.$broadcast("addSubmit", addContent);
		}else{
			$scope.$broadcast("addSubmit", false);
		}
		AddEditDel.setFlag(false, false, false, false);
		$scope.backcoverShow=AddEditDel.getBack();
		$scope.addShow=AddEditDel.getAdd();
		$scope.editShow=AddEditDel.getEdit();
		$scope.delShow=AddEditDel.getDel();
	};
	$scope.delete=function(flag) {
		if(flag==1){
			$scope.$broadcast("deleteSubmit", true);
		}else{
			$scope.$broadcast("deleteSubmit", false);
		}
		AddEditDel.setFlag(false, false, false, false);		
		$scope.backcoverShow=AddEditDel.getBack();
		$scope.addShow=AddEditDel.getAdd();
		$scope.editShow=AddEditDel.getEdit();
		$scope.delShow=AddEditDel.getDel();
	};
	$scope.editSubmit=function(flag) {
		if(flag==1){
			var editContent={};
			editContent.title=$scope.editTitle;
			editContent.author=$scope.editAuthor;
			editContent.like=$scope.editLike;
			editContent.comment=$scope.editComment;
			$scope.$broadcast("editSubmit", editContent);
		}else{
			$scope.$broadcast("editSubmit", false);
		}
		AddEditDel.setFlag(false, false, false, false);		
		$scope.backcoverShow=AddEditDel.getBack();
		$scope.addShow=AddEditDel.getAdd();
		$scope.editShow=AddEditDel.getEdit();
		$scope.delShow=AddEditDel.getDel();
	};

	


	if(auth!="minh"&&auth!="darth"){
		$location.path("/login");
	}
	var users = {
			params: {
				user: auth},
		};
	$http.get('http://localhost:3000/api/getuser', users).success(
		function(data, status, headers, config) {
			$('#navbar span:first-of-type').text(data.name);
			var d = new Date();
		    var day = d.getDate();
		    var month = d.getMonth()+1;
		    var year = d.getFullYear();
		    var dateString = day + "/" + month + "/" + year;
			$('#navbar span:first-of-type + span').text(dateString);
	    }).error(
	    	function(data, status, headers, config) {
	            console.log("error in the page");
	        });
	$scope.logout = function(){
		$cookieStore.remove("username");
		$location.path("/login");
	}
})
