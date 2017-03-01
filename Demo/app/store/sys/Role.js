/**
* 角色仓库
*/

Ext.define('App.store.sys.Role', {
    extend: 'Ext.data.Store',
    alias: 'store.rolelist',
    storeId: 'rolelist',

    model: 'App.model.sys.Role',

    data: {
        Total: 9,
        Items: [{ "ID": 2005, "Code": "test2", "Name": "测试2", "Layer": 0, "Status": 1, "Memo": null, "id": "App.model.sys.Role-10" }, { "ID": 2003, "Code": "xs", "Name": "学生", "Layer": 0, "Status": 0, "Memo": null, "id": "App.model.sys.Role-11" }, { "ID": 2002, "Code": "js", "Name": "教师", "Layer": 0, "Status": 0, "Memo": null, "id": "App.model.sys.Role-12" }, { "ID": 1005, "Code": "ptzg", "Name": "普通职工", "Layer": 0, "Status": 1, "Memo": null, "id": "App.model.sys.Role-13" }, { "ID": 1004, "Code": "xmjl", "Name": "项目经理", "Layer": 0, "Status": 1, "Memo": null, "id": "App.model.sys.Role-14" }, { "ID": 1003, "Code": "bmzg", "Name": "部门主管", "Layer": 0, "Status": 1, "Memo": null, "id": "App.model.sys.Role-15" }, { "ID": 1002, "Code": "fzjl", "Name": "副总经理", "Layer": 0, "Status": 1, "Memo": null, "id": "App.model.sys.Role-16" }, { "ID": 6, "Code": "zjl", "Name": "总经理", "Layer": 0, "Status": 1, "Memo": null, "id": "App.model.sys.Role-17" }, { "ID": 5, "Code": "cjgly", "Name": "超级管理员", "Layer": 0, "Status": 1, "Memo": null, "id": "App.model.sys.Role-18" }]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        },
        pageParam: 'pageNum',
        limitParam: 'pageSize'
    }
});