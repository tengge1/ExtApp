
Ext.define('App.app.store.RoleAll', {
    extend: 'Ext.data.Store',
    alias: 'store.roleall',
    storeId: 'roleall',

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
        limitParam: 'maxResults',
        params: {
            startParam: 0,
            limitParam: 1000
        }
    }
});