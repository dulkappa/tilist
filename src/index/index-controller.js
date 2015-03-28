angular
    .module('tilist')
    .controller('IndexCtrl', function($scope, settingConst){
	$scope.title = settingConst.title;
	$scope.hw = 'hello, world!';
    })
    .controller('TilistCtrl', function($scope){
	$scope.tiles = [
	    {text: 'learn angular', done: true},
	    {text: 'study MCSA:70-412', done: false}
	];

	$scope.addTile = function(){
	    $scope.tiles.push({text: $scope.tileText, done:false});
	    $scope.tileText = '';
	};

	$scope.toggleTile = function(tile){
	    tile.done = ! tile.done;
	};

	$scope.remaining = function(){
	    var count = 0;
	    angular.forEach($scope.tiles, function(tile){
		count += tile.done ? 0 : 1;
	    });
	    return count;
	};

    });
