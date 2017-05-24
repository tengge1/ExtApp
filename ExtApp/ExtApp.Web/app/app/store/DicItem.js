
Ext.define('App.app.store.DicItem', {
    extend: 'Ext.data.Store',
    alias: 'store.dicitemlist',
    storeId: 'dicitemlist',

    model: 'App.app.model.DicItem',

    proxy: {
        type: 'ajax',
        url: '/api/DicItem/List',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        },
        startParam: 'firstResult',
        limitParam: 'maxResults'
    },

    autoSync: true,
    autoLoad: false
});