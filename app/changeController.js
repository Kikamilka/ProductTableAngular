(function() {
    angular
        .module('app')
        .controller('modalChangeController', ["$scope", "$modalInstance", "$filter", "changeProduct", modalChangeController]);

    function modalChangeController($scope, $modalInstance, $filter, changeProduct) {
        if (changeProduct != null) {
            $scope.nameProduct = changeProduct.name;
            $scope.emailProduct = changeProduct.email;
            $scope.countProduct = changeProduct.count;
            $scope.priceProduct = changeProduct.price;
        } else {
            $scope.nameProduct = "";
            $scope.emailProduct = "";
            $scope.countProduct = "";
            $scope.priceProduct = "";
        }

        $scope.ok = function() {
            let infoProduct = {
                product: {
                    name: $scope.nameProduct,
                    price: parseFloat($scope.priceProduct, 10),
                    count: parseInt($scope.countProduct, 10),
                    email: $scope.emailProduct
                },
                isEdit: changeProduct == null ? false : true
            }
            console.log(infoProduct);
            $modalInstance.close(infoProduct);
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    }
})();