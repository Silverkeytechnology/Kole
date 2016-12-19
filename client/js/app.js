angular.module("koleWebClient", ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "allStudentsList.html",
            controller: "StudentListController",
            resolve: {
              students: function(Students){
                return Students.getAllStudents();
              }
            }
          })
        })
    .service("Students", function($http) {
      this.getAllStudents = function() {
        return $http.get("/api/students")
          .then(function(response) {
            return response;
          }, function(response) {
              alert("Error finding students!");
          });
      }
      //more service methods here
    })
    .controller("StudentListController", function(allStudents, $scope) {
      $scope.allStudents = allStudents.data;
    });
