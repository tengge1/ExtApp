
Ext.define('App.app.store.DicTree', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.dictree',
    storeId: 'dictree',

    model: 'App.app.model.Dic',
    defaultRootId: '0',
    defaultRootText: '所有字典',
    rootVisible: true,

    proxy: {
        type: 'ajax',
        url: '/api/Dic/GetChildNodes',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});