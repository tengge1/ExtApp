
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

    refresh: function () { // 刷新
        this.getView().down('pagingtoolbar').moveFirst();
    },

    onAddClick: function () { // 添加
        var win = Ext.create('App.view.personnel.user.Edit');
        win.setTitle('添加用户');
        win.controller.reset();
        win.show();
    },

    onEditClick: function () { // 编辑
        var selected = this.getView().down('gridpanel').getSelectionModel().getSelected();
        if (selected.length == 0) {
            App.notify('消息', '请选择！');
            return;
        }
        var win = Ext.create('App.view.personnel.user.Edit');
        win.down('form').form.loadRecord(selected.items[0]);
        win.setTitle('编辑用户');
        win.show();
    },

    onDeleteClick: function () { // 删除
        var view = this.getView();
        var selected = view.down('gridpanel').getSelectionModel().getSelected();
        if (selected.length == 0) {
            App.notify('消息', '请选择！');
            return;
        }
        App.confirm('消息', '确定删除？', function () {
            App.post('/api/User/Delete?ID=' + selected.items[0].data.ID, function (data) {
                var obj = JSON.parse(data);
                if (obj.Code == 200) {
                    view.down('pagingtoolbar').moveFirst();
                    App.notify('消息', obj.Msg);
                } else {
                    App.alert('错误', obj.Msg);
                }
            })
        });
    },

    onSearchClick: function () { // 搜索
        var view = this.getView();
        var values = view.down('searchform').form.getValues();
        view.down('gridpanel').getStore().load({
            params: values
        });
    },

    onResetClick: function () { // 重置
        this.getView().down('searchform').form.reset();
    },
});