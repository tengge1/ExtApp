
// ---------- 角色Store ------------

Ext.define('App.store.authority.Role', {
    extend: 'Ext.data.Store',
    alias: 'store.rolelist',
    storeId: 'rolelist',

    model: 'App.model.authority.Role',

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