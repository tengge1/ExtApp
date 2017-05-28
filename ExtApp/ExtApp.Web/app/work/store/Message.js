
Ext.define('App.work.store.Message', {
    extend: 'Ext.data.Store',
    alias: 'store.messagelist',
    storeId: 'messagelist',

    model: 'App.work.model.Message',

    proxy: {
        type: 'ajax',
        url: '/api/Message/List',
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