/**
* 配置仓库
*/

Ext.define('App.store.sys.Config', {
    extend: 'Ext.data.Store',
    alias: 'store.configlist',
    storeId: 'configlist',

    model: 'App.model.sys.Config',

    data: {
        Total: 1,
        Items: [{ "ID": 1, "Section": { "ID": 2, "PSection": null, "Name": "用户配置", "Layer": 2, "Status": 0, "Memo": "" }, "Name": "用户初始密码", "Key": "UserInitPwd", "Value": "123", "Layer": 1, "Status": 0, "Memo": "用户初始化密码", "PID": 2, "id": "App.model.sys.Config-1" }]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    }
});