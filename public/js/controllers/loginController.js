app.controller("loginController", function ($scope, $location) {

    $scope.name= "Sarasa Gunawardhana";
    $scope.drivers = [{
      firstName: 'John',
      lastName: 'Smith',
      birthday: '2000-10-01',
      vehicle: 'Nissan-GTR',
      ranking: 1
      }, {
      firstName: 'Mike',
      lastName: 'Black',
      birthday: '2002-06-12',
      vehicle: 'Merc SLK 500',
      ranking: 2
    }];
});
