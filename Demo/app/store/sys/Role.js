/**
* 角色仓库
*/

Ext.define('App.store.sys.Role', {
    extend: 'Ext.data.Store',
    alias: 'store.rolelist',
    storeId: 'rolelist',

    model: 'App.model.sys.Role',

    proxy: {
        type: 'ajax',
        url: '/api/Role/List',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        },
        pageParam: 'pageNum',
        limitParam: 'pageSize'
    }
});