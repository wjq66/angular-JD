var productList = angular.module('jdProject', []);

productList.controller('productLisCtrl', ['$scope', '$http',

    function($scope, $http) {
        // $scope.products = [];
        $http({
            method: 'GET',
            url: 'data/products.json'
        }).then(function successCallback(response) {
            console.log(response.data);
            $scope.products = response.data;

        }, function errorCallback(response) {
            console.log('错误：'+response.data);
        });
    }

])
