define('supervisor', (function(window) {
  'use strict';

  return {
    ready: function() {
      // Tell through a message
      if (window.parent && window.parent.postMessage) {
        window.parent.postMessage('ready', '*');
      }
      // Tell through a JSInterface
      if (window.JSInterface && window.JSInterface.ready) {
        window.JSInterface.ready();
      }
    },

    reload: function() {
      if (window.JSInterface && window.JSInterface.reload) {
        // Use the JS interface
        window.JSInterface.reload();
      } else {
        // No JS interface available, use a regular reload
        window.location.reload();
      }
    }
  };

})(window));