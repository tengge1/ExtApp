
Ext.define('App.store.dic.Sex', {
    extend: 'Ext.data.Store',
    alias: 'store.sexlist',
    storeId: 'sexlist',

    model: 'App.model.core.Dic',

    proxy: {
        type: 'ajax',
        url: '/api/Dic/GetItems?code=Sex',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});