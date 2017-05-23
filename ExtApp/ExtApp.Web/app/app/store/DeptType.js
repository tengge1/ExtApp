
Ext.define('App.app.store.DeptType', {
    extend: 'Ext.data.Store',
    alias: 'store.depttypelist',
    storeId: 'depttypelist',

    model: 'App.app.model.Dic',

    proxy: {
        type: 'ajax',
        url: '/api/Dic/GetItems?code=DeptType',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});