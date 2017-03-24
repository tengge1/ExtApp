
Ext.define('App.store.authority.RoleAll', {
    extend: 'Ext.data.Store',
    alias: 'store.roleall',
    storeId: 'roleall',

    model: 'App.model.authority.Role',

    proxy: {
        type: 'ajax',
        url: '/api/Role/List',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    }
});