(function() {
  'use strict';

  const { BrowserWindow } = require('electron').remote

  angular
  .module('app.core')
  .controller('TitleBarCtrl', TitleBarCtrl);

  TitleBarCtrl.$inject = ['$scope'];

  function TitleBarCtrl ($scope) {
    var win = BrowserWindow.getFocusedWindow();
    $scope.text = "test";

    $scope.close = function() {
      win.close();
    };
    $scope.maximize = function() {
      win.isMaximized() ? win.unmaximize() : win.maximize();
    };
    $scope.minimize = function() {
      win.minimize();
    }
  }
}());