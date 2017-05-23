
Ext.define('App.app.store.Config', {
    extend: 'Ext.data.Store',
    alias: 'store.configlist',
    storeId: 'configlist',

    model: 'App.app.model.Config',

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