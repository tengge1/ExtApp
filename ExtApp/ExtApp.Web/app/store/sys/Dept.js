/**
* 组织机构存储
*/

Ext.define('App.store.sys.Dept', {
    extend: 'Ext.data.Store',
    alias: 'store.deptlist',
    storeId: 'deptlist',

    model: 'App.model.sys.Dept',

    proxy: {
        type: 'ajax',
        url: '/api/Dept/List',
        reader: 'json'
    },

    autoSync: true,
    autoLoad: true
});