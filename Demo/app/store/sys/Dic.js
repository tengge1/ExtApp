/**
* 字典仓库
*/

Ext.define('App.store.sys.Dic', {
    extend: 'Ext.data.Store',
    alias: 'store.diclist',
    storeId: 'diclist',

    model: 'App.model.sys.Dic',

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    }
});