
Ext.define('App.view.core.dic.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.diclist',

    requires: [
        'App.view.core.dic.Edit',
        'App.view.core.dic.EditItem'
    ],

    init: function () {
        var view = this.getView();
        var search = view.down('searchfield');
        var store = search.store;
        var tree = view.down('treepanel');
        tree.setStore(store);
    },

    onAddClick: function () {
        var win = Ext.create('App.view.core.dic.Edit');
        win.setTitle('添加字典');
        win.down('form').getForm().reset();
        win.show();
    },

    onEditClick: function () {
        var tree = this.getView().down('treepanel');
        var selected = tree.getSelection();
        if (selected.length == 0) {
            App.notify('消息', '请选择字典！');
            return;
        }
        var win = Ext.create('App.view.core.dic.Edit');
        win.setTitle('编辑字典');
        win.down('form').getForm().loadRecord(selected[0]);
        win.show();
    },

    onDeleteClick: function () {
        var tree = this.getView().down('treepanel');
        var selected = tree.getSelection();
        if (selected.length == 0) {
            App.notify('消息', '请选择字典！');
            return;
        }
        App.confirm('消息', '要删除该字典？', function () {
            App.post('/api/Dic/Delete?ID=' + selected[0].data.ID, function (r) {
                var obj = JSON.parse(r);
                if (obj.Code == 200) {
                    tree.getStore().reload();
                    App.notify('消息', obj.Msg);
                } else {
                    App.alert('消息', obj.Msg);
                }
            });
        });
    },

    onTreeItemClick: function (view, record, item, index, e, eOpts) {
        var id = record.data.ID;
        var text = record.data.text;
        var grid = this.getView().down('gridpanel');
        grid.setTitle(text + ' - 字典项');
        grid.getStore().load({
            params: {
                PID: id
            }
        });
    },

    onAddItemClick: function () {
        var tree = this.getView().down('treepanel');
        var selected = tree.getSelection();
        if (selected.length == 0) {
            App.notify('消息', '请选择字典！');
            return;
        }

        var win = Ext.create('App.view.core.dic.EditItem');
        win.setTitle('添加子项');
        var form = win.down('form').getForm();
        form.reset();
        form.setValues({
            PID: selected[0].data.ID
        });
        win.show();
    },

    onEditItemClick: function () {
        var tree = this.getView().down('gridpanel');
        var selected = tree.getSelection();
        if (selected.length == 0) {
            App.notify('消息', '请选择字典项！');
            return;
        }

        var win = Ext.create('App.view.core.dic.EditItem');
        win.setTitle('添加子项');
        var form = win.down('form').getForm();
        form.reset();
        form.loadRecord(selected[0]);
        win.show();
    },

    onDeleteItemClick: function () {
        var view = this.getView();
        var grid = view.down('gridpanel');
        var selected = grid.getSelectionModel().getSelected();
        if (selected.length == 0) {
            App.notify('消息', '请选择字典项！');
            return;
        }
        App.confirm('消息', '要删除该字典项？', function () {
            App.post('/api/DicItem/Delete?ID=' + selected.items[0].data.ID, function (r) {
                var obj = JSON.parse(r);
                if (obj.Code == 200) {
                    view.down('gridpanel').getStore().reload();
                    App.notify('消息', obj.Msg);
                } else {
                    App.alert('消息', obj.Msg);
                }
            });
        });
    }
});