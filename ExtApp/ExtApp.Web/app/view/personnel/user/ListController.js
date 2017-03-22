
Ext.define('App.view.personnel.user.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userlist',

    requires: [
        'App.store.personnel.User'
    ],

    init: function () { // 页面初始化
        var view = this.getView();
        var store = Ext.create('store.userlist');
        view.down('gridpanel').setStore(store);
        view.down('pagingtoolbar').setStore(store);
        store.reload();
        view.down('pagingtoolbar').moveFirst();
    },

    onAddClick: function () { // 添加
        var win = Ext.create('App.view.personnel.user.Edit');
        win.setTitle('添加用户');
        win.show();
    },

    onEditClick: function () { // 编辑
        var selected = this.getView().getSelectionModel().getSelected();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请先选择一行！');
            return;
        }
        var win = Ext.create('App.view.sys.user.Edit');
        win.down('form').getForm().loadRecord(selected.items[0]);
        win.show();
    },

    onDeleteClick: function () { // 删除
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