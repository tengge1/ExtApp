
Ext.define('App.store.dic.LogLevel', {
    extend: 'Ext.data.Store',
    alias: 'store.loglevellist',
    storeId: 'loglevellist',

    model: 'App.model.core.Dic',

    proxy: {
        type: 'ajax',
        url: '/api/Dic/GetItems?code=LogLevel',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});