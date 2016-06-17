(function() {
    angular
        .module('app')
        .controller('modalDeleteController', ["$scope", "$modalInstance", "deleteProduct", modalDeleteController]);

    function modalDeleteController($scope, $modalInstance, deleteProduct) {
        $scope.deleteType = 'this';
        $scope.product = deleteProduct;
        $scope.ok = function() {
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    }
})();