
Ext.define('App.view.core.config.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.configlist',

    requires: [
        'App.view.core.config.EditSection',
        'App.view.core.config.Edit'
    ],

    init: function () {
        var view = this.getView();
        var search = view.down('searchfield');
        var store = search.store;
        var tree = view.down('treepanel');
        tree.setStore(store);
    },

    onAddSectionClick: function () {
        var win = Ext.create('App.view.core.config.EditSection');
        win.setTitle('添加配置节');
        win.down('form').getForm().reset();
        win.show();
    },

    onEditSectionClick: function () {
        var view = this.getView();
        var tree = view.down('treepanel');
        var selected = tree.getSelection();
        if (selected.length == 0) {
            App.notify('消息', '请选择配置节');
            return;
        }
        var win = Ext.create('App.view.core.config.EditSection');
        win.setTitle('编辑配置节');
        win.down('form').getForm().loadRecord(selected[0]);
        win.show();
    },

    onDeleteSectionClick: function () {
        var tree = this.getView().down('treepanel');
        var selected = tree.getSelection();
        if (selected.length == 0) {
            App.notify('消息', '请选择配置节点');
            return;
        }
        App.confirm('消息', '要删除该配置节？', function () {
            App.post('/api/ConfigSection/Delete?ID=' + selected[0].data.ID, function (r) {
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
        var view = this.getView();
        var grid = view.down('gridpanel');
        grid.setTitle(text + ' - 系统配置');
        grid.getStore().load({
            params: {
                PID: id
            }
        });
    },

    onAddClick: function () {
        var tree = this.getView().down('treepanel');
        var selected = tree.getSelection();
        if (selected.length == 0) {
            App.notify('消息', '请选择配置节！');
            return;
        }

        var win = Ext.create('App.view.core.config.Edit');
        win.setTitle('添加配置');
        var form = win.down('form').getForm();
        form.reset();
        form.setValues({
            PID: selected[0].data.ID
        });
        win.show();
    },

    onEditClick: function () {
        var grid = this.getView().down('gridpanel');
        var selected = grid.getSelection();
        if (selected.length == 0) {
            App.notify('消息', '请先选择配置！');
            return;
        }

        var win = Ext.create('App.view.core.config.Edit');
        win.setTitle('编辑配置');
        var form = win.down('form').getForm();
        form.reset();
        form.loadRecord(selected[0]);
        win.show();
    },

    onDeleteClick: function () {
        var view = this.getView();
        var grid = view.down('gridpanel');
        var selected = grid.getSelectionModel().getSelected();
        if (selected.length == 0) {
            App.notify('消息', '请选择配置！');
            return;
        }
        App.confirm('消息', '要删除该配置？', function () {
            App.post('/api/Config/Delete?ID=' + selected.items[0].data.ID, function (r) {
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