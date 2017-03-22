
Ext.define('App.store.core.Config', {
    extend: 'Ext.data.Store',
    alias: 'store.configlist',
    storeId: 'configlist',

    model: 'App.model.sys.Config',

    proxy: {
        type: 'ajax',
        url: '/api/Config/List',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    }
});