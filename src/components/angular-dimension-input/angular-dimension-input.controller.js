(function () {
    'use strict';

    angular
        .module('angularDimension')
        .controller('AngularDimensionInput', ["$timeout", AngularDimensionInput]);

    /* @ngInject */
    function AngularDimensionInput($timeout) {
        var vm = this;
        var defaultPrecision = 15;
        var defaultScale = 4;

        vm.$onInit = onInit;

        function onInit() {
            $timeout(function() {
                if(!vm.precision) {
                    vm.precision = defaultPrecision;
                }
    
                if(!vm.scale) {
                    vm.scale = defaultScale;
                }
    
                vm.step = (vm.scale / (Math.pow(10, vm.scale))) / vm.scale;
            });
        }
    }
})();