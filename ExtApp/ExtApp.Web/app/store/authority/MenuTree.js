
// ------------------ 菜单树Store -----------------------

Ext.define('App.store.authority.MenuTree', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.menutreelist',
    storeId: 'menutreelist',

    model: 'App.model.personnel.Dept',

    proxy: {
        type: 'ajax',
        url: '/api/Dept/List',
        reader: 'json'
    },

    autoSync: true,
    autoLoad: true
});