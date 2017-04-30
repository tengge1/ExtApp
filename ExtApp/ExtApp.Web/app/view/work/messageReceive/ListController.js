
Ext.define('App.view.work.messageReceive.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.messagereceivelist',

    requires: [
        'App.store.work.MessageReceive'
    ],

    init: function () {
        var view = this.getView();
        var store = Ext.create('store.messagereceivelist');
        view.down('gridpanel').setStore(store);
        view.down('pagingtoolbar').setStore(store);
        store.reload();
        view.down('pagingtoolbar').moveFirst();
    },

    onViewClick: function () {
        var selected = this.getView().down('gridpanel').getSelectionModel().getSelected();
        if (selected.length == 0) {
            App.notify('消息', '请选择！');
            return;
        }
        var win = Ext.create('App.view.work.messageReceive.Edit');
        win.setTitle('查看消息');
        win.down('form').getForm().loadRecord(selected.items[0]);
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
            App.post('/api/MessageReceive/Delete?ID=' + selected.items[0].data.ID, function (data) {
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

    onSendClick: function () {
        var view = this.getView();
        var selected = view.down('gridpanel').getSelectionModel().getSelected();
        if (selected.length == 0) {
            App.notify('消息', '请选择！');
            return;
        }
        App.post('/api/Message/Send?ID=' + selected.items[0].data.ID, function (data) {
            var obj = JSON.parse(data);
            if (obj.Code == 200) {
                view.down('pagingtoolbar').moveFirst();
                App.notify('消息', obj.Msg);
            } else {
                App.alert('错误', obj.Msg);
            }
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