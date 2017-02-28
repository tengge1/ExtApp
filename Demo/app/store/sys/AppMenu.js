/**
* 系统菜单存储
*/

Ext.define('App.store.sys.AppMenu', {
    extend: 'Ext.data.Store',

    model: 'App.model.sys.AppMenu',

    proxy: {
        type: 'ajax',
        url: '/api/AppMenu/List',
        reader: 'json'
    },

    autoSync: true,
    autoLoad: true
});