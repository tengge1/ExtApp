
Ext.define('App.app.store.MessageReceive', {
    extend: 'Ext.data.Store',
    alias: 'store.messagereceivelist',
    storeId: 'messagereceivelist',

    model: 'App.app.model.MessageReceive',

    proxy: {
        type: 'ajax',
        url: '/api/MessageReceive/List',
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