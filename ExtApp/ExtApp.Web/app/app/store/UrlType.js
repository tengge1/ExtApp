
Ext.define('App.app.store.UrlType', {
    extend: 'Ext.data.Store',
    alias: 'store.urltypelist',
    storeId: 'urltypelist',

    model: 'App.app.model.Dic',

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