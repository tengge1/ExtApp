
Ext.define('App.app.store.Role', {
    extend: 'Ext.data.Store',
    alias: 'store.rolelist',
    storeId: 'rolelist',

    model: 'App.app.model.Role',

    proxy: {
        type: 'ajax',
        url: '/api/Role/List',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        },
        startParam: 'firstResult',
        limitParam: 'maxResults'
    }
});