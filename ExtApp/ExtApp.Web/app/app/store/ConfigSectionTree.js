
Ext.define('App.app.store.ConfigSectionTree', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.configsectiontree',
    storeId: 'configsectiontree',

    model: 'App.app.model.ConfigSection',
    defaultRootId: '0',
    defaultRootText: '顶级配置',
    rootVisible: true,

    proxy: {
        type: 'ajax',
        url: '/api/ConfigSection/GetChildNodes',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});