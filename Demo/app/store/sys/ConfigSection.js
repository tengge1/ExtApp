/**
* 配置节点仓库
*/

Ext.define('App.store.sys.ConfigSection', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.configsectionlist',
    storeId: 'configsectionlist',

    model: 'App.model.sys.ConfigSection',

    data: [{ "text": "所有配置", "root": true, "isFirst": true, "isLast": true, "depth": 0, "index": 0, "parentId": null, "allowDrag": false, "expanded": true, "children": [], "ID": 0, "PID": 0, "expandable": true, "checked": null, "leaf": false, "cls": "", "iconCls": "", "icon": "", "allowDrop": true, "loaded": true, "loading": false, "href": "", "hrefTarget": "", "qtip": "", "qtitle": "", "qshowDelay": 0, "visible": true }, { "text": "组织机构配置", "leaf": true, "ID": 1, "PID": 0, "Name": "组织机构配置", "Layer": 1, "Status": 0, "Memo": "", "parentId": 0, "index": 0, "depth": 1, "expanded": false, "expandable": true, "checked": null, "cls": "", "iconCls": "", "icon": "", "root": false, "isLast": false, "isFirst": true, "allowDrop": true, "allowDrag": true, "loaded": false, "loading": false, "href": "", "hrefTarget": "", "qtip": "", "qtitle": "", "qshowDelay": 0, "children": null, "visible": true }, { "text": "用户配置", "leaf": true, "ID": 2, "PID": 0, "Name": "用户配置", "Layer": 2, "Status": 0, "Memo": "", "parentId": 0, "index": 1, "depth": 1, "expanded": false, "expandable": true, "checked": null, "cls": "", "iconCls": "", "icon": "", "root": false, "isLast": false, "isFirst": false, "allowDrop": true, "allowDrag": true, "loaded": false, "loading": false, "href": "", "hrefTarget": "", "qtip": "", "qtitle": "", "qshowDelay": 0, "children": null, "visible": true }, { "text": "权限配置", "leaf": false, "ID": 3, "PID": 0, "Name": "权限配置", "Layer": 3, "Status": 0, "Memo": "", "parentId": 0, "index": 2, "depth": 1, "expanded": true, "expandable": true, "checked": null, "cls": "", "iconCls": "", "icon": "", "root": false, "isLast": false, "isFirst": false, "allowDrop": true, "allowDrag": true, "loaded": true, "loading": false, "href": "", "hrefTarget": "", "qtip": "", "qtitle": "", "qshowDelay": 0, "children": null, "visible": true }, { "text": "角色配置", "leaf": true, "ID": 4, "PID": 3, "Name": "角色配置", "Layer": 1, "Status": 0, "Memo": "", "parentId": 3, "index": 0, "depth": 2, "expanded": false, "expandable": true, "checked": null, "cls": "", "iconCls": "", "icon": "", "root": false, "isLast": false, "isFirst": true, "allowDrop": true, "allowDrag": true, "loaded": false, "loading": false, "href": "", "hrefTarget": "", "qtip": "", "qtitle": "", "qshowDelay": 0, "children": null, "visible": true }, { "text": "系统菜单配置", "leaf": true, "ID": 5, "PID": 3, "Name": "系统菜单配置", "Layer": 2, "Status": 0, "Memo": "", "parentId": 3, "index": 1, "depth": 2, "expanded": false, "expandable": true, "checked": null, "cls": "", "iconCls": "", "icon": "", "root": false, "isLast": true, "isFirst": false, "allowDrop": true, "allowDrag": true, "loaded": false, "loading": false, "href": "", "hrefTarget": "", "qtip": "", "qtitle": "", "qshowDelay": 0, "children": null, "visible": true }, { "text": "数据字典配置", "leaf": true, "ID": 6, "PID": 0, "Name": "数据字典配置", "Layer": 4, "Status": 0, "Memo": "", "parentId": 0, "index": 3, "depth": 1, "expanded": false, "expandable": true, "checked": null, "cls": "", "iconCls": "", "icon": "", "root": false, "isLast": false, "isFirst": false, "allowDrop": true, "allowDrag": true, "loaded": false, "loading": false, "href": "", "hrefTarget": "", "qtip": "", "qtitle": "", "qshowDelay": 0, "children": null, "visible": true }, { "text": "系统日志配置", "leaf": true, "ID": 7, "PID": 0, "Name": "系统日志配置", "Layer": 5, "Status": 0, "Memo": "", "parentId": 0, "index": 4, "depth": 1, "expanded": false, "expandable": true, "checked": null, "cls": "", "iconCls": "", "icon": "", "root": false, "isLast": false, "isFirst": false, "allowDrop": true, "allowDrag": true, "loaded": false, "loading": false, "href": "", "hrefTarget": "", "qtip": "", "qtitle": "", "qshowDelay": 0, "children": null, "visible": true }, { "text": "文件配置", "leaf": false, "ID": 8, "PID": 0, "Name": "文件配置", "Layer": 6, "Status": 0, "Memo": "", "parentId": 0, "index": 5, "depth": 1, "expanded": true, "expandable": true, "checked": null, "cls": "", "iconCls": "", "icon": "", "root": false, "isLast": true, "isFirst": false, "allowDrop": true, "allowDrag": true, "loaded": true, "loading": false, "href": "", "hrefTarget": "", "qtip": "", "qtitle": "", "qshowDelay": 0, "children": null, "visible": true }, { "text": "上传配置", "leaf": true, "ID": 9, "PID": 8, "Name": "上传配置", "Layer": 1, "Status": 0, "Memo": "", "parentId": 8, "index": 0, "depth": 2, "expanded": false, "expandable": true, "checked": null, "cls": "", "iconCls": "", "icon": "", "root": false, "isLast": false, "isFirst": true, "allowDrop": true, "allowDrag": true, "loaded": false, "loading": false, "href": "", "hrefTarget": "", "qtip": "", "qtitle": "", "qshowDelay": 0, "children": null, "visible": true }, { "text": "下载配置", "leaf": true, "ID": 10, "PID": 8, "Name": "下载配置", "Layer": 2, "Status": 0, "Memo": "", "parentId": 8, "index": 1, "depth": 2, "expanded": false, "expandable": true, "checked": null, "cls": "", "iconCls": "", "icon": "", "root": false, "isLast": true, "isFirst": false, "allowDrop": true, "allowDrag": true, "loaded": false, "loading": false, "href": "", "hrefTarget": "", "qtip": "", "qtitle": "", "qshowDelay": 0, "children": null, "visible": true }],

    proxy: {
        type: 'ajax',
        url: '/api/ConfigSection/List',
        reader: 'json'
    },

    listeners: {
        load: function (store, records, successful, operation, node, opts) {
            this.getRootNode().removeAll();
            for (var i in records) {
                var record = records[i];
                var node = this.getById(record.data.PID); // 父节点

                // 判断有无子节点
                var leaf = true;
                for (var j in records) {
                    if (record.data.ID == records[j].data.PID) {
                        leaf = false;
                        break;
                    }
                }

                // 添加节点
                node.appendChild({
                    text: record.data.Name,
                    leaf: leaf,
                    ID: record.data.ID,
                    PID: record.data.PID,
                    Name: record.data.Name,
                    Layer: record.data.Layer,
                    Status: record.data.Status,
                    Memo: record.data.Memo
                });
            }
        },
    }
});