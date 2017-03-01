/**
* 用户仓库
*/

Ext.define('App.store.sys.User', {
    extend: 'Ext.data.Store',
    alias: 'store.userlist',
    storeId: 'userlist',

    model: 'App.model.sys.User',

    data: [{ "ID": 1, "Username": "admin", "Password": "123", "Name": "管理员", "Sex": 0, "UserRole": { "ID": 5, "Code": "cjgly", "Name": "超级管理员", "Layer": 0, "Status": 1, "Memo": null }, "UserDept": { "ID": 3, "PDept": null, "Code": "001", "Name": "中国移动", "Layer": 10, "Status": 0, "Memo": null }, "Layer": 0, "Status": 0, "Memo": "超级管理员", "RoleID": 5, "RoleName": "超级管理员", "DeptID": 3, "DeptName": "中国移动", "id": "App.model.sys.User-3" }, { "ID": 9, "Username": "haha", "Password": "123", "Name": "测试", "Sex": 0, "UserRole": { "ID": 6, "Code": "zjl", "Name": "总经理", "Layer": 0, "Status": 1, "Memo": null }, "UserDept": { "ID": 2021, "PDept": null, "Code": "002", "Name": "中国联通", "Layer": 20, "Status": 0, "Memo": null }, "Layer": 2, "Status": 0, "Memo": "备注。。。", "RoleID": 6, "RoleName": "总经理", "DeptID": 2021, "DeptName": "中国联通", "id": "App.model.sys.User-4" }],

    proxy: {
        type: 'memory',
        reader: 'json',
        startParam: 'pageNum',
        limitParam: 'pageSize',
        extraParams: {
            keyword: ''
        }
    }
});