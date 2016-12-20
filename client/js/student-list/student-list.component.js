'use strict';
// Register `studentList` component, along with its associated controller and template
angular.
module('studentList').
component('studentList', {
  templateUrl: 'js/student-list/student-list.template.html',
  controller: ['$http', function StudentListController($http) {
    var self = this;
    self.orderProp = 'lastName';

    $http.get('/api/students').then(function(response) {
      self.students = response.data;
    });
  }]
});
