/**
* 配置仓库
*/

Ext.define('App.store.sys.Config', {
    extend: 'Ext.data.Store',
    alias: 'store.configlist',
    storeId: 'configlist',

    model: 'App.model.sys.Config',

    proxy: {
        type: 'ajax',
        url: '/api/Config/List',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    }
});