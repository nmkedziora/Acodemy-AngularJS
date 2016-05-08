angular.module('app')
    .controller('NavbarController', function($scope) {
        $scope.search = "";
        $scope.clearSearch = clearSearch;

        function clearSearch() {
            $scope.search = "";
        };
    });
