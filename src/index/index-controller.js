angular
    .module('tilist')
    .controller('IndexCtrl', function($scope, settingConst){
	$scope.title = settingConst.title;
	$scope.hw = 'hello, world!';
    })
    .controller('TilistCtrl', function($scope){
	$scope.tiles = [
	    // use as todo list
	    // {text: 'learn angular', done: true},
	    // use as member list
	    {text: 'Shintaro Ishikawa', done: false}
	];

	$scope.addTile = function(){
	    $scope.tiles.push({text: $scope.tileText, done:false});
	    $scope.tileText = '';
	};

	$scope.toggleTile = function(tile){
	    tile.done = ! tile.done;
	};

	$scope.deleteTile = function(i){
	    $scope.tiles.splice(i, 1);
	};

	$scope.completed = function(){
	    var count = 0;
	    angular.forEach($scope.tiles, function(tile){
		count += tile.done ? 1 : 0;
	    });
	    return count;
	};

	$scope.remaining = function(){
	    var count = 0;
	    angular.forEach($scope.tiles, function(tile){
		count += tile.done ? 0 : 1;
	    });
	    return count;
	};

    });
