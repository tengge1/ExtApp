/**
* 日志仓库
*/

Ext.define('App.store.sys.Log', {
    extend: 'Ext.data.Store',
    alias: 'store.loglist',
    storeId: 'loglist',

    model: 'App.model.sys.Log',

    proxy: {
        type: 'ajax',
        url: '/api/Log/List',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        },
        pageParam: 'pageNum',
        limitParam: 'pageSize'
    },

    listeners: {
        load: function (store, records, successful, operation, node, opts) {
            this.removeAll();
            for (var i in records) {
                var record = records[i];
                this.add(record);
            }
        }
    }
});