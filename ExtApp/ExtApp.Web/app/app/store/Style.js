
Ext.define('App.app.store.Style', {
    extend: 'Ext.data.Store',
    alias: 'store.stylelist',
    storeId: 'stylelist',

    model: 'App.app.model.Dic',

    proxy: {
        type: 'ajax',
        url: '/api/Dic/GetItems?code=FrameStyle',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});