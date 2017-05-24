
Ext.define('App.app.store.LogType', {
    extend: 'Ext.data.Store',
    alias: 'store.logtypelist',
    storeId: 'logtypelist',

    model: 'App.app.model.Dic',

    proxy: {
        type: 'ajax',
        url: '/api/Dic/GetItems?code=LogType',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});