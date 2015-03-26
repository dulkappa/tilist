angular
	.module('tilist')
	.controller('IndexCtrl', function($scope, settingConst){
		$scope.title = settingConst.title;
		$scope.hw = 'hello, world!';
});