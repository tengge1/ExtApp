/**
* 配置节点仓库
*/

Ext.define('App.store.sys.ConfigSection', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.configsectionlist',
    storeId: 'configsectionlist',

    model: 'App.model.sys.ConfigSection',

    proxy: {
        type: 'memory',
        reader: 'json'
    }
});