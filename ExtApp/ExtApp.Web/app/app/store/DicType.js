
Ext.define('App.app.store.DicType', {
    extend: 'Ext.data.Store',
    alias: 'store.dictypelist',
    storeId: 'dictypelist',

    model: 'App.app.model.Dic',

    proxy: {
        type: 'ajax',
        url: '/api/Dic/GetItems?code=DicType',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});