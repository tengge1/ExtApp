
Ext.define('App.store.dic.DicType', {
    extend: 'Ext.data.Store',
    alias: 'store.dictypelist',
    storeId: 'dictypelist',

    model: 'App.model.core.Dic',

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