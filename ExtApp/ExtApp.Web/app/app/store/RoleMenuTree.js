
Ext.define('App.store.authority.RoleMenuTree', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.rolemenutree',
    storeId: 'rolemenutree',

    model: 'App.model.authority.Menu',
    defaultRootId: '0',
    defaultRootText: '顶级菜单',
    rootVisible: true,
    nodeParam: 'PID',

    proxy: {
        type: 'ajax',
        url: '/api/RoleMenu/GetChildNodes',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});