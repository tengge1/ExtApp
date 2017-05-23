
Ext.define('App.store.dic.IconType', {
    extend: 'Ext.data.Store',
    alias: 'store.icontypelist',
    storeId: 'icontypelist',

    model: 'App.model.core.Dic',

    proxy: {
        type: 'ajax',
        url: '/api/Dic/GetItems?code=IconType',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});