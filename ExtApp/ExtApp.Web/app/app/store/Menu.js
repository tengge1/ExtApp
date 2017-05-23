
Ext.define('App.store.authority.Menu', {
    extend: 'Ext.data.Store',
    alias: 'store.menulist',
    storeId: 'menulist',

    model: 'App.model.authority.Menu',

    proxy: {
        type: 'ajax',
        url: '/api/Menu/List',
        reader: 'json'
    },

    autoSync: true,
    autoLoad: true
});