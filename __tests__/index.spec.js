(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxGmStorage = require('../src/next-gm-storage');

  describe('NxGmStorage.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
