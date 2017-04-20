
Ext.define('App.store.dic.LogSource', {
    extend: 'Ext.data.Store',
    alias: 'store.logsourcelist',
    storeId: 'logsourcelist',

    model: 'App.model.core.Dic',

    proxy: {
        type: 'ajax',
        url: '/api/Dic/GetItems?code=LogSource',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});