(function () {
    'use strict';

    angular
        .module('cwbootstrap', [])
        .filter('numericOnly', numericOnly)
        .directive('formLocator', formLocator)
        .directive('ngEnter', ngEnter);

    function numericOnly() {
        var filter = function(input, allowDecimals) {
            if (typeof input == 'undefined') {
                return '';
            } else {
                var returnString = '', i, curChar;
                var allowedChars = '0123456789';
                if (allowDecimals) { allowedChars += '.'; }
                for (i=0;i<input.length;i++) {
                    curChar = input.substr(i,1);
                    if (allowedChars.indexOf(curChar) > -1) {
                        returnString += curChar;
                    }
                }
                return returnString;
            }
        };
        return filter;
    }

    function formLocator() {
        var directive = {
            link: function(scope) {
                scope.$emit('formLocator');
            }
        };
        return directive;
    }

    function ngEnter() {
        var directive = function(scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
        return directive;
    }

})();
