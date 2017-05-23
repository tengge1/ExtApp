
Ext.define('App.store.dic.LogType', {
    extend: 'Ext.data.Store',
    alias: 'store.logtypelist',
    storeId: 'logtypelist',

    model: 'App.model.core.Dic',

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