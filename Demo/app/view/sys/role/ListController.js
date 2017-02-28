/**
* 角色列表控制器
*/

Ext.define('App.view.sys.role.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.rolelist',

    requires: [
        'App.store.sys.Role',
        'App.view.sys.role.Edit'
    ],

    init: function () {
        var view = this.getView();
        var store = Ext.create('store.rolelist');
        view.down('gridpanel').setStore(store);
        view.down('pagingtoolbar').setStore(store);
        store.reload();
        view.down('pagingtoolbar').moveFirst();
    },

    renderStatus: function (value, cellmeta, record, rowIndex, columnIndex, store) {
        if (value == 1) {
            return '启用';
        } else if (value == 0) {
            return '禁用';
        } else if (value == -1) {
            return '删除';
        } else {
            return value;
        }
    },

    refresh: function () { // 刷新
        var view = this.getView();
        view.down('pagingtoolbar').moveFirst();
    },

    onSearchClick: function () { // 搜索
        var view = this.getView();
        var form = view.down('form').getForm();
        var values = form.getValues();
        var store = view.down('gridpanel').getStore();
        store.load({
            params: values
        });
    },

    onResetClick: function () { // 重置
        var view = this.getView();
        var form = view.down('searchform').getForm();
        form.reset();
    },

    onAddClick: function () { // 点击添加按钮
        var win = Ext.widget('roleedit');
        win.setTitle('添加角色');
        win.controller.reset();
        win.show();
    },

    onEditClick: function () { // 点击编辑按钮
        var view = this.getView();
        var grid = view.down('gridpanel');
        var selected = grid.getSelectionModel().getSelected();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请先选择一行');
            return;
        }
        var win = Ext.widget('roleedit');
        win.down('form').getForm().loadRecord(selected.items[0]);
        win.show();
    },

    onDeleteClick: function () { // 点击删除按钮
        var selected = this.getView().getSelectionModel().getSelected();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请先选择一行');
            return;
        }
        var view = this.getView();
        Ext.Msg.confirm('消息', '要删除该记录？', function (buttonId, value, opt) {
            if (buttonId == 'yes') {
                Ext.Ajax.request({
                    url: '/api/Role/Delete?id=' + selected.items[0].data.ID,
                    method: 'POST',
                    success: function (response, opts) {
                        var obj = Ext.JSON.decode(response.responseText);
                        if (obj.Code == 200) {
                            view.getStore().load();
                        } else {
                            Ext.Msg.alert('消息', obj.Msg);
                        }
                    },
                    failure: function (response, opts) {
                        Ext.alert('消息', response.responseText);
                    }
                });
            }
        });
    }
});