
Ext.define('App.store.dic.Style', {
    extend: 'Ext.data.Store',
    alias: 'store.stylelist',
    storeId: 'stylelist',

    model: 'App.model.core.Dic',

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