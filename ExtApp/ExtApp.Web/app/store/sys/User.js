/**
* 用户仓库
*/

Ext.define('App.store.sys.User', {
    extend: 'Ext.data.Store',
    alias: 'store.userlist',
    storeId: 'userlist',

    model: 'App.model.sys.User',

    proxy: {
        type: 'ajax',
        url: '/api/User/List',
        reader: 'json',
        startParam: 'firstResult',
        limitParam: 'fetchSize',
        extraParams: {
            name: ''
        }
    }
});