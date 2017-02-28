/**
* 系统菜单管理控制器
*/

Ext.define('App.view.sys.appMenu.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.appmenulist',

    init: function () { // 默认展开根节点
        this.getView().expandAll();
    },

    refresh() { // 刷新树节点，展开到当前位置
        // 获取path
        var store = this.getView().getStore();
        var selected = this.getView().getSelection();
        var path = selected[0].getPath();
        store.load();
        this.getView().getRootNode().collapse();
        this.getView().expandPath(path);
    },

    onTreeItemExpand: function (node, eOpts) { // 展开树的节点
        node.removeAll();
        var store = Ext.create('App.store.sys.AppMenu');
        store.load({
            callback: function (records, operation, success) {
                var data = store.getData();
                var array = new Array();
                data.each(function (i) {
                    if (i.data.PID == node.data.ID) {
                        // 查询有无子节点
                        var leaf = true;
                        data.each(function (i1) {
                            if (i1.data.PID == i.data.ID) {
                                leaf = false;
                            }
                        });
                        array.push({
                            text: i.data.Name,
                            leaf: leaf,
                            expanded: false,
                            iconCls: i.data.Icon,

                            ID: i.data.ID,
                            Name: i.data.Name,
                            Code: i.data.Code,
                            PID: i.data.PID,
                            UrlType: i.data.UrlType,
                            Url: i.data.Url,
                            IconType: i.data.IconType,
                            Icon: i.data.Icon,
                            Layer: i.data.Layer,
                            Status: i.data.Status
                        });
                    }
                });
                node.appendChild(array);
            }
        });
    },

    renderUrlType: function (value) { // 渲染链接类型
        if (value == 0) {
            return '';
        } else if (value == 1) {
            return 'ExtJs类';
        } else if (value == 2) {
            return 'Url地址';
        } else {
            return value;
        }
    },

    renderIconType: function (value) { // 渲染图标类型
        if (value == 0) {
            return '';
        } else if (value == 1) {
            return 'css样式';
        } else if (value == 2) {
            return '图标Url';
        } else {
            return value;
        }
    },

    renderStatus: function (value) { // 渲染状态
        if (value == 0) {
            return '启用';
        } else {
            return '禁用';
        }
    },

    onAddClick: function () { // 点击添加按钮
        var selected = this.getView().getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请选择节点！');
            return;
        }
        var win = Ext.create('App.view.sys.appMenu.Add');
        win.getController().setParentMenu(selected[0].data.ID, selected[0].data.Name);
        win.show();
    },

    onEditClick: function () { // 点击编辑按钮
        var selected = this.getView().getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请选择节点！');
            return;
        }
        var win = Ext.create('App.view.sys.appMenu.Edit');
        win.down('form').getForm().loadRecord(selected[0]);
        win.show();
    },

    onDeleteClick: function () { // 点击删除按钮
        var selected = this.getView().getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请选择节点！');
            return;
        }
        Ext.Ajax.request({
            url: '/api/AppMenu/Delete?id=' + selected[0].data.ID,
            method: 'POST',
            success: function (response, opts) {
                var obj = Ext.JSON.decode(response.responseText);
                if (obj.Code == 200) {
                    var store = Ext.ComponentQuery.query('appmenulist')[0].getStore();
                    store.load();
                } else {
                    Ext.Msg.alert('错误', obj.Msg);
                }
            },
            failure: function (response, opts) {
                Ext.Msg.alert('错误', response.responseText);
            }
        });
    }
});