/**
* 字典子项仓库
*/

Ext.define('App.store.sys.DicItem', {
    extend: 'Ext.data.Store',
    alias: 'store.dicitemlist',
    storeId: 'dicitemlist',

    model: 'App.model.sys.DicItem',

    data: {
        Total: 5,
        Items: [{ "ID": 1, "Dict": { "ID": 3, "Code": "LogLevel", "Type": 0, "Name": "日志等级", "Status": 0, "Memo": "" }, "Code": "Fatel", "Name": "崩溃", "Layer": 1, "Status": 0, "Memo": "", "PID": 3, "id": "App.model.sys.DicItem-6" }, { "ID": 2, "Dict": { "ID": 3, "Code": "LogLevel", "Type": 0, "Name": "日志等级", "Status": 0, "Memo": "" }, "Code": "Error", "Name": "错误", "Layer": 2, "Status": 0, "Memo": "", "PID": 3, "id": "App.model.sys.DicItem-7" }, { "ID": 3, "Dict": { "ID": 3, "Code": "LogLevel", "Type": 0, "Name": "日志等级", "Status": 0, "Memo": "" }, "Code": "Warn", "Name": "警告", "Layer": 3, "Status": 0, "Memo": "", "PID": 3, "id": "App.model.sys.DicItem-8" }, { "ID": 4, "Dict": { "ID": 3, "Code": "LogLevel", "Type": 0, "Name": "日志等级", "Status": 0, "Memo": "" }, "Code": "Info", "Name": "消息", "Layer": 4, "Status": 0, "Memo": "", "PID": 3, "id": "App.model.sys.DicItem-9" }, { "ID": 5, "Dict": { "ID": 3, "Code": "LogLevel", "Type": 0, "Name": "日志等级", "Status": 0, "Memo": "" }, "Code": "Debug", "Name": "调试", "Layer": 5, "Status": 0, "Memo": "", "PID": 3, "id": "App.model.sys.DicItem-10" }]
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