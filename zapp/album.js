function AlbumCtrl($scope, $http) {
	$scope.url = "images.json";
	$scope.images = [];
	$scope.imageCategories = {};
	$scope.currentImage = {};
	
	$scope.setCurrentImage = function(image) {
		$scope.currentImage = image;
	}
	
	$scope.fetch = function() {
		alert("fetching: " + $scope.url);
		$http.get($scope.url).success($scope.handleImagesLoaded);
	}
	
	$scope.handleImagesLoaded = function(data, status) {
		alert("handle");
		$scope.images = data;
		$scope.currentImage = $scope.images[0];
	    $scope.imageCategories = _.uniq(_.pluck($scope.images, "category"));
	}
	
	$scope.fetch();
}
