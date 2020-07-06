(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var NxAbstractStorage = nx.AbstractStorage || require('@feizheng/next-abstract-storage');
  var NxGmStoreEngine = nx.GmStoreEngine || require('@feizheng/next-gm-store-engine');

  var NxGmStorage = nx.declare('nx.GmStorage', {
    extends: NxAbstractStorage,
    methods: {
      init: function (inPrefix) {
        this.base({
          engine: NxGmStoreEngine,
          prefix: inPrefix || ''
        });
      },
      serialize: function (inTarget) {
        return inTarget;
      },
      keys: function () {
        return GM_listValues();
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxGmStorage;
  }
})();
