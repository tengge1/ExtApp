
// ------------------ 组织机构Store -----------------------

Ext.define('App.store.personnel.Dept', {
    extend: 'Ext.data.Store',
    alias: 'store.deptlist',
    storeId: 'deptlist',

    model: 'App.model.personnel.Dept',

    proxy: {
        type: 'ajax',
        url: '/api/Dept/List',
        reader: 'json'
    },

    autoSync: true,
    autoLoad: true
});