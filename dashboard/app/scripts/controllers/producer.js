App.controller('producerCtrl', function ($timeout, $scope, $window, $http) {
	$scope.search = function(){
		$scope.queryShow = true;
		$timeout(function(){
			document.getElementById("pac-input").value = "football field";},1000);
	}

	$http.get('http://localhost:3000/api/vedio')
		.success(function(data, status, headers, config) {
			$scope.videoObjects = data.vedio;
			console.log(data.vedio);
		}).error(function(data, status, headers, config){
			console.log("http get error");
		});
		
	// $scope.play = function(){
	// 	this.v.url += "?autoplay=1"
	// }
	$scope.today = function() {
    $scope.dt = new Date();
	  };
	  $scope.today();

	  $scope.clear = function () {
	    $scope.dt = null;
	  };

	  // Disable weekend selection
	  $scope.disabled = function(date, mode) {
	    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	  };

	  $scope.toggleMin = function() {
	    $scope.minDate = $scope.minDate ? null : new Date();
	  };
	  $scope.toggleMin();
	  $scope.maxDate = new Date(2020, 5, 22);

	  $scope.open = function($event) {
	    $scope.status.opened = true;
	  };

	  $scope.setDate = function(year, month, day) {
	    $scope.dt = new Date(year, month, day);
	  };

	  $scope.dateOptions = {
	    formatYear: 'yy',
	    startingDay: 1
	  };

	  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	  $scope.format = $scope.formats[0];

	  $scope.status = {
	    opened: false
	  };

	  var tomorrow = new Date();
	  tomorrow.setDate(tomorrow.getDate() + 1);
	  var afterTomorrow = new Date();
	  afterTomorrow.setDate(tomorrow.getDate() + 2);
	  $scope.events =
	    [
	      {
	        date: tomorrow,
	        status: 'full'
	      },
	      {
	        date: afterTomorrow,
	        status: 'partially'
	      }
	    ];
	  $scope.getDayClass = function(date, mode) {
	    if (mode === 'day') {
	      var dayToCheck = new Date(date).setHours(0,0,0,0);

	      for (var i=0;i<$scope.events.length;i++){
	        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

	        if (dayToCheck === currentDay) {
	          return $scope.events[i].status;
	        }
	      }
	    }

	    return '';
	  };

 })
App.directive('s',function($timeout){
	return{
		scope:{},
		restrict:'A',
		link:function(scope,element,attrs){
			element.bind("mouseover",function(){
				$timeout(function(){
					angular.element("#pac-input").focus();},2000);
				
			})
			

		}
	}
})
App.filter("trustUrl", ['$sce', function ($sce) {
        return function (recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    }]);

