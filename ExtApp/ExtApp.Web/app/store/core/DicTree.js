
Ext.define('App.store.core.DicTree', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.dictree',
    storeId: 'dictree',

    model: 'App.model.core.Dic',
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