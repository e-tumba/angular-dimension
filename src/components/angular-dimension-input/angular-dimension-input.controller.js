(function () {
    'use strict';

    angular
        .module('angularDimension')
        .controller('AngularDimensionInput', AngularDimensionInput);

    /* @ngInject */
    function AngularDimensionInput() {
        var vm = this;
        var defaultPrecision = 15;
        var defaultScale = 4;

        vm.$onInit = onInit;

        function onInit() {
            if(!vm.precision) {
                vm.precision = defaultPrecision;
            }

            if(!vm.scale) {
                vm.scale = defaultScale;
            }

            vm.step = (vm.scale / (Math.pow(10, vm.scale))) / vm.scale;
        }
    }
})();