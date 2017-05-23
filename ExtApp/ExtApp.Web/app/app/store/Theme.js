
Ext.define('App.store.dic.Theme', {
    extend: 'Ext.data.Store',
    alias: 'store.themelist',
    storeId: 'themelist',

    model: 'App.model.core.Dic',

    proxy: {
        type: 'ajax',
        url: '/api/Dic/GetItems?code=ExtJsTheme',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});