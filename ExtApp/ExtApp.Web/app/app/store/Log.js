
Ext.define('App.app.store.Log', {
    extend: 'Ext.data.Store',
    alias: 'store.loglist',
    storeId: 'loglist',

    model: 'App.app.model.Log',

    proxy: {
        type: 'ajax',
        url: '/api/Log/List',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        },
        startParam: 'firstResult',
        limitParam: 'maxResults'
    },

    autoSync: true,
    autoLoad: true
});