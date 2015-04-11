angular
  .module('tilist')
  .controller('IndexCtrl', function($scope, settingConst){
    $scope.title = settingConst.title;
    $scope.hw = 'hello, world!';
  })
  .factory('IndexService', function(){
    addTile = function(tileText){
      var tile = {text: tileText, done:false};

      return tile;
    };

    toggleTile = function(tile){
      tile.done = ! tile.done;
    };

    return {
      getTiles: function(){
        return JSON.parse(localStorage.getItem('tilist_tiles')) || [];
      },

      setTiles: function(tiles){
        return localStorage.setItem('tilist_tiles', JSON.stringify(tiles));
      },

      addTile: addTile,

      toggleTile: toggleTile

    }
  })
  .controller('TilistCtrl', function($scope, IndexService){
    $scope.tiles = [];
    $scope.tiles = IndexService.getTiles();

    $scope.sortableOptions = {
      stop: function(){
        IndexService.setTiles($scope.tiles);
      }
    };

    $scope.addTile = function(){
      var text = $scope.tileText;

      var tile = IndexService.addTile(text);

      $scope.tiles.push(tile);
      IndexService.setTiles($scope.tiles);

      $scope.tileText = '';
    };

    $scope.deleteTile = function(i, e){
      $scope.tiles.splice(i, 1);
      IndexService.setTiles($scope.tiles);
      e.stopPropagation();
    };

    $scope.toggleTile = function(tile){
      IndexService.toggleTile(tile);
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
