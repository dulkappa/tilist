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
	    // {text: 'dulkappa', done: false}
	];
	for (var i = 0; i < localStorage.length; i++){
	    var k = localStorage.key(i);
	    var d = JSON.parse(localStorage.getItem(k));
	    $scope.tiles.push(d);
	};

	$scope.addTile = function(){
	    var tile = {text: $scope.tileText, done:false};
	    $scope.tiles.push(tile);
	    localStorage.setItem($scope.tileText, JSON.stringify(tile));
	    $scope.tileText = '';
	};

	$scope.toggleTile = function(tile){
	    tile.done = ! tile.done;
	    localStorage.setItem(tile.text, JSON.stringify(tile));
	};

	$scope.deleteTile = function(i){
	    localStorage.removeItem($scope.tiles[i].text);
	    console.log($scope.tiles[i].text);
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
