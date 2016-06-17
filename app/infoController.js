(function() {
    angular
        .module('app')
        .controller('modalInfoController', ["$scope", "$modalInstance", "$filter", "infoProduct", modalInfoController]);

    function modalInfoController($scope, $modalInstance, $filter, infoProduct) {
        $scope.name = "Name product: " + infoProduct.name;
        $scope.email = "Email supplier: " + infoProduct.email;
        $scope.count = "Name product: " + infoProduct.count;
        $scope.price = "Name product: " + $filter('currency')(infoProduct.price);
        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    }

})();