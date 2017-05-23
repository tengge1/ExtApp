
Ext.define('App.app.store.Dept', {
    extend: 'Ext.data.Store',
    alias: 'store.deptlist',
    storeId: 'deptlist',

    model: 'App.app.model.Dept',

    proxy: {
        type: 'ajax',
        url: '/api/Dept/List',
        reader: 'json'
    },

    autoSync: true,
    autoLoad: true
});