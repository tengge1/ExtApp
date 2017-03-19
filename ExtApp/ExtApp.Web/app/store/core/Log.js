
// ----------------- 日志Store -------------------

Ext.define('App.store.core.Log', {
    extend: 'Ext.data.Store',
    alias: 'store.loglist',
    storeId: 'loglist',

    model: 'App.model.core.Log',

    proxy: {
        type: 'ajax',
        url: '/api/Log/List',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        },
        startParam: 'firstResult',
        limitParam: 'fetchSize'
    },

    autoSync: true,
    autoLoad: true
});