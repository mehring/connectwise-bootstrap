(function() {
  'use strict';

  angular
    .module('cwbootstrap')
    .filter('numericOnly', numericOnly);

  /** @ngInject */
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

})();
