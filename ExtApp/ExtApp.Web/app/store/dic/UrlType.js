
Ext.define('App.store.dic.UrlType', {
    extend: 'Ext.data.Store',
    alias: 'store.urltypelist',
    storeId: 'urltypelist',

    model: 'App.model.core.Dic',

    proxy: {
        type: 'ajax',
        url: '/api/Dic/GetItems?code=UrlType',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});