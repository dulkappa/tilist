angular
  .module('tilist')
  .controller('IndexCtrl', function($scope, settingConst){
    $scope.title = settingConst.title;
    $scope.hw = 'hello, world!';
  })
  .factory('IndexService', function(){
    return {
      getTiles: function(){
        return JSON.parse(localStorage.getItem('tilist_tiles')) || [];
      },

      setTiles: function(tiles){
        return localStorage.setItem('tilist_tiles', JSON.stringify(tiles));
      }
    }
  })
  .controller('TilistCtrl', function($scope, IndexService){
    $scope.tiles = [];

    $scope.tiles = IndexService.getTiles();

    $scope.addTile = function(){
      var tile = {text: $scope.tileText, done:false};
      $scope.tiles.push(tile);
      IndexService.setTiles($scope.tiles);
      $scope.tileText = '';
    };

    $scope.toggleTile = function(tile){
      tile.done = ! tile.done;
      IndexService.setTiles($scope.tiles);
    };

    $scope.deleteTile = function(i){
      $scope.tiles.splice(i, 1);
      IndexService.setTiles($scope.tiles);
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
