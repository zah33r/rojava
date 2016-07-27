'use strict';

/**
 * @ngdoc function
 * @name rojavaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rojavaApp
 */
angular.module('rojavaApp')
  .controller('MainCtrl', function () {
    this.informationArea = [
      'Top News',
      'New Music',
      'New Video',
      'New Post',
      'New Artist'
    ];
  });
