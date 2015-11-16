(function() {
  'use strict';

  angular
    .module('seed')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
