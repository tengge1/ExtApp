
Ext.define('App.app.store.Menu', {
    extend: 'Ext.data.Store',
    alias: 'store.menulist',
    storeId: 'menulist',

    model: 'App.app.model.Menu',

    proxy: {
        type: 'ajax',
        url: '/api/Menu/List',
        reader: 'json'
    },

    autoSync: true,
    autoLoad: true
});