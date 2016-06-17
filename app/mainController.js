(function() {
    angular
        .module('app')
        .controller('mainController', ["$scope", "$modal", MainController]);

    function MainController($scope, $modal) {
        $scope.sortType = '';
        $scope.sortReverse = false;
        $scope.searchItem = '';
        $scope.products = [{
            name: "Товар 1",
            count: 5,
            price: 12000,
            email: "abc@example.com"
        }, {
            name: "Товар 3",
            count: 5,
            price: 12001,
            email: "def@example.com"
        }, {
            name: "Товар 5",
            count: 4,
            price: 12002,
            email: "abc@example.com"
        }, {
            name: "Товар 4",
            count: 7,
            price: 12020,
            email: "ser"
        }, {
            name: "Товар 2",
            count: 7,
            price: 12020,
            email: "tgy"
        }];

        $scope.openDeleteDialog = function(product) {
            var modalInstance = $modal.open({
                templateUrl: 'modal-delete.html',
                controller: 'modalDeleteController',
                backdrop: 'static',
                size: 'sm',
                resolve: {
                    deleteProduct: function() {
                        return product;
                    }
                }
            });
            modalInstance.result.then(function() {
                $scope.products
                    .splice($scope.products
                        .indexOf(product), 1);
            });
        }

        $scope.openInfoDialog = function(product) {
            var modalInstance = $modal.open({
                templateUrl: 'modal-info.html',
                controller: 'modalInfoController',
                backdrop: 'static',
                size: 'sm',
                resolve: {
                    infoProduct: function() {
                        return product;
                    }
                }
            });
        }

        $scope.openChangeDialog = function(product) {
            var modalInstance = $modal.open({
                templateUrl: 'modal-change.html',
                controller: 'modalChangeController',
                backdrop: 'static',
                size: 'sm',
                resolve: {
                    changeProduct: function() {
                        return product;
                    }
                }
            });
            modalInstance.result.then(function(result) {
                console.log(result);
                if (!result.isEdit) {
                    $scope.products.push({
                        name: result.product.name,
                        price: result.product.price,
                        count: result.product.count,
                        email: result.product.email
                    });
                    console.log("add" + result.product);
                }                
                else {
                    $scope.products[
                        $scope.products
                        .indexOf(product)
                    ] = result.product;
                    console.log($scope.products);
                }
            });
        }
    }
})();