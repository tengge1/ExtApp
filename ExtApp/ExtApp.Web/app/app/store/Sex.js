
Ext.define('App.app.store.Sex', {
    extend: 'Ext.data.Store',
    alias: 'store.sexlist',
    storeId: 'sexlist',

    model: 'App.app.model.Dic',

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