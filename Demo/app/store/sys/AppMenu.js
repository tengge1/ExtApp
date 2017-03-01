/**
* 系统菜单存储
*/

Ext.define('App.store.sys.AppMenu', {
    extend: 'Ext.data.Store',

    model: 'App.model.sys.AppMenu',

    proxy: {
        type: 'memory',
        reader: 'json'
    },

    data: [{ "ID": 1, "Name": "系统管理", "Code": "001", "PID": 0, "UrlType": 0, "Url": null, "IconType": 1, "Icon": "Computer", "Layer": 5, "Status": 0, "Memo": null, "id": "App.model.sys.AppMenu-15" }, { "ID": 4, "Name": "在线办公", "Code": "002", "PID": 0, "UrlType": 0, "Url": null, "IconType": 0, "Icon": null, "Layer": 10, "Status": 0, "Memo": null, "id": "App.model.sys.AppMenu-16" }, { "ID": 5, "Name": "组织机构管理", "Code": "001002", "PID": 1, "UrlType": 1, "Url": "App.view.sys.dept.List", "IconType": 1, "Icon": "Building", "Layer": 10, "Status": 0, "Memo": null, "id": "App.model.sys.AppMenu-17" }, { "ID": 6, "Name": "用户管理", "Code": "001003", "PID": 1, "UrlType": 1, "Url": "App.view.sys.user.List", "IconType": 1, "Icon": "User", "Layer": 20, "Status": 0, "Memo": null, "id": "App.model.sys.AppMenu-18" }, { "ID": 2, "Name": "权限管理", "Code": "001001", "PID": 1, "UrlType": 0, "Url": null, "IconType": 1, "Icon": "Userkey", "Layer": 30, "Status": 0, "Memo": null, "id": "App.model.sys.AppMenu-19" }, { "ID": 8, "Name": "数据字典", "Code": "001004", "PID": 1, "UrlType": 0, "Url": "App.view.sys.dic.List", "IconType": 1, "Icon": "Book", "Layer": 40, "Status": 0, "Memo": null, "id": "App.model.sys.AppMenu-20" }, { "ID": 9, "Name": "系统配置", "Code": "001005", "PID": 1, "UrlType": 1, "Url": "App.view.sys.config.List", "IconType": 1, "Icon": "Wrench", "Layer": 50, "Status": 0, "Memo": null, "id": "App.model.sys.AppMenu-21" }, { "ID": 10, "Name": "系统日志", "Code": "001006", "PID": 1, "UrlType": 1, "Url": "App.view.sys.logs.List", "IconType": 1, "Icon": "Page", "Layer": 60, "Status": 0, "Memo": null, "id": "App.model.sys.AppMenu-22" }, { "ID": 7, "Name": "角色管理", "Code": "001001002", "PID": 2, "UrlType": 1, "Url": "App.view.sys.role.List", "IconType": 1, "Icon": "Group", "Layer": 10, "Status": 0, "Memo": null, "id": "App.model.sys.AppMenu-23" }, { "ID": 3, "Name": "系统菜单管理", "Code": "001001001", "PID": 2, "UrlType": 1, "Url": "App.view.sys.appMenu.List", "IconType": 1, "Icon": "Applicationsidetree", "Layer": 20, "Status": 0, "Memo": null, "id": "App.model.sys.AppMenu-24" }, { "ID": 1002, "Name": "通知公告", "Code": "002001", "PID": 4, "UrlType": 0, "Url": null, "IconType": 0, "Icon": null, "Layer": 10, "Status": 0, "Memo": null, "id": "App.model.sys.AppMenu-25" }, { "ID": 1003, "Name": "工作日志", "Code": "002002", "PID": 4, "UrlType": 0, "Url": null, "IconType": 0, "Icon": null, "Layer": 20, "Status": 0, "Memo": null, "id": "App.model.sys.AppMenu-26" }, { "ID": 1004, "Name": "邮件收发", "Code": "002003", "PID": 4, "UrlType": 0, "Url": null, "IconType": 0, "Icon": null, "Layer": 30, "Status": 0, "Memo": null, "id": "App.model.sys.AppMenu-27" }, { "ID": 1005, "Name": "发送通知公告", "Code": "002001001", "PID": 1002, "UrlType": 0, "Url": null, "IconType": 0, "Icon": null, "Layer": 10, "Status": 0, "Memo": null, "id": "App.model.sys.AppMenu-28" }],

    autoSync: true,
    autoLoad: true
});