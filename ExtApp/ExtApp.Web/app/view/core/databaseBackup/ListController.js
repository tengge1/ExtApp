
Ext.define('App.view.core.databaseBackup.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.databasebackuplist',

    requires: [
        'App.store.core.DatabaseBackup'
    ],

    init: function () {
        var view = this.getView();
        var store = Ext.create('store.databasebackuplist');
        view.down('gridpanel').setStore(store);
        view.down('pagingtoolbar').setStore(store);
        store.reload();
        view.down('pagingtoolbar').moveFirst();
    },

    onSearchClick: function () {
        var view = this.getView();
        var form = view.down('form').getForm();
        var values = form.getValues();
        var store = view.down('gridpanel').getStore();
        store.load({
            params: values
        });
    },

    onResetClick: function () {
        var view = this.getView();
        var form = view.down('searchform').getForm();
        form.reset();
    },

    onSaveClick: function () {
        var view = this.getView();
        App.confirm('消息', '是否备份当前数据库？', function () {
            App.post('/api/DatabaseBackup/Backup', function (r) {
                var obj = JSON.parse(r);
                if (obj.Code == 200) {
                    view.down('pagingtoolbar').moveFirst();
                    App.notify('消息', obj.Msg);
                } else {
                    App.alert('消息', obj.Msg);
                }
            });
        });
    },

    onRestoreClick: function () {
        var view = this.getView();
        var selected = view.down('gridpanel').getSelectionModel().getSelected();
        if (selected.length == 0) {
            App.notify('消息', '请选择');
            return;
        }
        App.confirm('消息', '是否还原数据库？', function () {
            App.post('/api/DatabaseBackup/Restore?ID=' + selected.items[0].data.ID, function (r) {
                var obj = JSON.parse(r);
                if (obj.Code == 200) {
                    view.down('pagingtoolbar').moveFirst();
                    App.notify('消息', obj.Msg);
                } else {
                    App.alert('消息', obj.Msg);
                }
            });
        });
    },

    onDeleteClick: function () {
        var view = this.getView();
        var selected = view.down('gridpanel').getSelectionModel().getSelected();
        if (selected.length == 0) {
            App.notify('消息', '请选择');
            return;
        }
        App.confirm('消息', '要删除该记录？', function () {
            App.post('/api/DatabaseBackup/Delete?ID=' + selected.items[0].data.ID, function (r) {
                var obj = JSON.parse(r);
                if (obj.Code == 200) {
                    view.down('gridpanel').getStore().load();
                    App.notify('消息', obj.Msg);
                } else {
                    App.alert('消息', obj.Msg);
                }
            });
        });
    }
});