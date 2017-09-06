/* global moment, angular */

var module = angular.module("angularDimension", [
	"ngMaterial",
	"ngAnimate",
	"ngAria",
	"pascalprecht.translate"
]);

module.config(["$translateProvider", function($translateProvider) {
	$translateProvider.translations('fr', {
        "ERROR_MAX": "La précision est de {{count}} caractères maximum.",
        "ERROR_STEP": "Le nombre de décimales doit être inférieur ou égal à {{count}}.",
		"ERROR_NUMBER": "La valeur saisie est incorrecte.",
		"ERROR_REQUIRED": "Le champ {{label}} est requis."
    });
}]);