/**
* 用户管理控制器
*/

Ext.define('App.view.sys.user.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userlist',

    requires: [
        'App.store.sys.User'
    ],

    init: function () { // 页面初始化
        var view = this.getView();
        var store = Ext.create('store.userlist');
        view.setStore(store);
        view.down('pagingtoolbar').setStore(store);
        store.reload();
        this.getView().down('pagingtoolbar').moveFirst();
    },

    renderSex: function (value) { // 渲染性别
        if (value == 0) {
            return '男'
        } else if (value == 1) {
            return '女';
        } else {
            return value;
        }
    },

    onAddClick: function () { // 点击添加按钮
        var win = Ext.create('App.view.sys.user.Add');
        win.show();
    },

    onEditClick: function () { // 点击编辑按钮
        var selected = this.getView().getSelectionModel().getSelected();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请先选择一行！');
            return;
        }
        var win = Ext.create('App.view.sys.user.Edit');
        win.down('form').getForm().loadRecord(selected.items[0]);
        win.show();
    },

    onDeleteClick: function () { // 点击删除按钮
        var selected = this.getView().getSelectionModel().getSelected();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请先选择一行！');
            return;
        }
        Ext.confirm('消息', '确定删除？', function () {
            Ext.Ajax.request({
                url: '/api/User/Delete?id=' + selected.items[0].data.ID,
                method: 'POST',
                success: function (response, opts) {
                    var obj = Ext.JSON.decode(response.responseText);
                    if (obj.Code == 200) {
                        Ext.ComponentQuery.query('userlist')[0].getStore().load();
                    } else {
                        Ext.Msg.alert('错误', obj.Msg);
                    }
                },
                failure: function (response, opts) {
                    Ext.Msg.alert('错误', response.responseText);
                }
            });
        });
    }
});