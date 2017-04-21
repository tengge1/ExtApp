
Ext.define('App.store.authority.MenuTreeAuth', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.menutreeauth',
    storeId: 'menutreeauth',

    model: 'App.model.authority.Menu',
    defaultRootId: '0',
    defaultRootText: '顶级菜单',
    rootVisible: true,
    nodeParam: 'PID',

    proxy: {
        type: 'ajax',
        url: '/api/Menu/GetChildNodes',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        },
        extraParams: {
            authorize: true
        }
    },

    autoSync: true,
    autoLoad: true
});