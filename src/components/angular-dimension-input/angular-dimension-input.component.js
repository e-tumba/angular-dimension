(function () {
    'use strict';

    var ComponentAngularDimensionInput = {
        controller: 'AngularDimensionInput',
        controllerAs: 'vm',
        template: '<div class="angular-dimension-input" ng-form="angularDimension">' +
                    '<md-input-container>' +
                        '<label>{{vm.label}}</label>' +
                        '<div layout="row" flex layout-align="center center">' +
                            '<input ng-required="vm.required" flex-order="1" type="number" ng-model="vm.model.value" ng-maxlength="vm.precision" step="{{vm.step}}">' +
                            '<span flex-order="2" class="md-body-2 angular-dimension-input-unit">{{vm.model.unit}}</span>' +
                       '</div>' +
                       '<div ng-messages="angularDimension.$error">' +
                            '<div ng-message="maxlength">{{\'ERROR_MAX\' | translate: {count: vm.precision} }}</div>' +
                            '<div ng-message="step">{{\'ERROR_STEP\' | translate: {count: vm.scale} }}</div>' +
                            '<div ng-message="number">{{\'ERROR_NUMBER\' | translate }}</div>' +
                            '<div ng-message="required">{{\'ERROR_REQUIRED\' | translate: {label: vm.label} }}</div>' +
                       '</div>' +
                    '</md-input-container>' +
                  '</div>',
        bindings: {
            label: '@',
            model: '=',
            precision: '@',
            scale: '@',
            required: '<'
        }
    };

    angular
        .module('angularDimension')
        .component('angularDimensionInput', ComponentAngularDimensionInput);
})();