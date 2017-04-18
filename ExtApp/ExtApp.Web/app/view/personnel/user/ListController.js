
Ext.define('App.view.personnel.user.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userlist',

    requires: [
        'App.store.personnel.User'
    ],

    init: function () {
        var view = this.getView();
        var store = Ext.create('store.userlist');
        view.down('gridpanel').setStore(store);
        view.down('pagingtoolbar').setStore(store);
        store.reload();
        view.down('pagingtoolbar').moveFirst();
    },

    refresh: function () {
        this.getView().down('pagingtoolbar').moveFirst();
    },

    onAddClick: function () {
        var win = Ext.create('App.view.personnel.user.Edit');
        win.setTitle('添加用户');
        win.down('textfield[name=Password]').show();
        win.down('combo[name=Status]').hide();
        win.controller.reset();
        win.show();
    },

    onEditClick: function () {
        var selected = this.getView().down('gridpanel').getSelectionModel().getSelected();
        if (selected.length == 0) {
            App.notify('消息', '请选择！');
            return;
        }
        var win = Ext.create('App.view.personnel.user.Edit');
        win.setTitle('编辑用户');
        win.down('textfield[name=Password]').hide();
        win.down('combo[name=Status]').show();
        win.down('combo[name=SexID]').getStore().load({
            callback: function () {
                win.down('form').form.loadRecord(selected.items[0]);
            }
        });
        win.show();
    },

    onDeleteClick: function () {
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

    onSearchClick: function () {
        var view = this.getView();
        var values = view.down('searchform').form.getValues();
        view.down('gridpanel').getStore().load({
            params: values
        });
    },

    onResetClick: function () {
        this.getView().down('searchform').form.reset();
    }
});