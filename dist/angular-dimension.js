(function() {
"use strict";
/* global moment, angular */

var module = angular.module("angularDimension", [
	"ngMaterial",
	"ngAnimate",
	"ngAria",
	"pascalprecht.translate"
]);

module.config(["$translateProvider", function($translateProvider) {
	$translateProvider.translations('fr', {
        "ERROR_MAX": "La précision est de {{count}} caractères maximum",
        "ERROR_STEP": "Le nombre de décimales doit être inférieur ou égal à {{count}}",
        "ERROR_NUMBER": "La valeur saisie est incorrecte"
    });
}]);
(function () {
    'use strict';

    var ComponentAngularDimensionInput = {
        controller: 'AngularDimensionInput',
        controllerAs: 'vm',
        template: '<div class="angular-dimension-input" ng-form="angularDimension">' +
                    '<md-input-container>' +
                        '<label>{{vm.label}}</label>' +
                        '<div layout="row" flex layout-align="center center">' +
                            '<input flex-order="1" type="number" ng-model="vm.value" ng-maxlength="vm.precision" step="{{vm.step}}">' +
                            '<span flex-order="2" class="md-body-2 angular-dimension-input-unit">{{vm.unit}}</span>' +
                       '</div>' +
                       '<div ng-messages="angularDimension.$error">' +
                            '<div ng-message="maxlength">{{\'ERROR_MAX\' | translate: {count: vm.precision} }}</div>' +
                            '<div ng-message="step">{{\'ERROR_STEP\' | translate: {count: vm.scale} }}</div>' +
                            '<div ng-message="number">{{\'ERROR_NUMBER\' | translate }}</div>' +
                       '</div>' +
                    '</md-input-container>' +
                  '</div>',
        bindings: {
            label: '@',
            unit: '@',
            value: '=',
            precision: '@',
            scale: '@'
        }
    };

    angular
        .module('angularDimension')
        .component('angularDimensionInput', ComponentAngularDimensionInput);
})();
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
})();