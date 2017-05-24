
Ext.define('App.app.store.MenuTree', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.menutree',
    storeId: 'menutree',

    model: 'App.app.model.Menu',
    defaultRootId: '0',
    rootVisible: true,
    nodeParam: 'PID',

    root: {
        id: 0,
        text: '顶级菜单',
        Name: '顶级菜单',
        expanded: true
    },

    proxy: {
        type: 'ajax',
        url: '/api/Menu/GetChildNodes',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});