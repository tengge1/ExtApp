
Ext.define('App.app.store.OpenType', {
    extend: 'Ext.data.Store',
    alias: 'store.opentypelist',
    storeId: 'opentypelist',

    model: 'App.app.model.Dic',

    proxy: {
        type: 'ajax',
        url: '/api/Dic/GetItems?code=OpenType',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});