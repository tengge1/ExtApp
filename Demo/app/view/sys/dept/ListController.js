/**
* 组织机构管理控制器
*/

Ext.define('App.view.sys.dept.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deptlist',

    init: function () { // 默认展开根节点
        //this.getView().expandAll();
    },

    refresh() { // 刷新树节点，展开到当前位置
        // 获取path
        var store = this.getView().getStore();
        var selected = this.getView().getSelection();
        if (selected.length > 0) {
            var path = selected[0].getPath();
            store.load();
            this.getView().getRootNode().collapse();
            this.getView().expandPath(path);
        } else {
            store.load();
            this.getView().getRootNode().collapse();
            this.getView().expandAll();
        }
    },

    onTreeItemExpand: function (node, eOpts) { // 展开树的节点
        node.removeAll();
        var store = Ext.create('App.store.sys.Dept');
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

                            ID: i.data.ID,
                            PID: i.data.PID,
                            PName: i.data.PName,
                            Code: i.data.Code,
                            Name: i.data.Name,
                            Layer: i.data.Layer,
                            Status: i.data.Status,
                            Memo: i.data.Memo
                        });
                    }
                });
                node.appendChild(array);
            }
        });
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
        var win = Ext.create('App.view.sys.dept.Add');
        win.getController().setParentMenu(selected[0].data.ID, selected[0].data.Name);
        win.show();
    },

    onEditClick: function () { // 点击编辑按钮
        var selected = this.getView().getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请选择节点！');
            return;
        }
        var win = Ext.create('App.view.sys.dept.Edit');
        win.down('form').getForm().loadRecord(selected[0]);
        win.show();
    },

    onRefreshClick: function () { // 点击刷新按钮
        this.refresh();
    },

    onDeleteClick: function () { // 点击删除按钮
        var selected = this.getView().getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请选择节点！');
            return;
        }
        var me = this;
        Ext.Msg.confirm('消息', '要删除该记录？', function (buttonId, value, opt) {
            if (buttonId == 'yes') {
                Ext.Ajax.request({
                    url: '/api/Dept/Delete?id=' + selected[0].data.ID,
                    method: 'POST',
                    success: function (response, opts) {
                        var obj = Ext.JSON.decode(response.responseText);
                        if (obj.Code == 200) {
                            me.refresh();
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
    }
});