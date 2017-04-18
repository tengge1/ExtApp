
Ext.define('App.store.dic.DeptType', {
    extend: 'Ext.data.Store',
    alias: 'store.depttypelist',
    storeId: 'depttypelist',

    model: 'App.model.core.Dic',

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