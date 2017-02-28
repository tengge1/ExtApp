/**
* 字典子项仓库
*/

Ext.define('App.store.sys.DicItem', {
    extend: 'Ext.data.Store',
    alias: 'store.dicitemlist',
    storeId: 'dicitemlist',

    model: 'App.model.sys.DicItem',

    proxy: {
        type: 'ajax',
        url: '/api/DicItem/List',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    }
});