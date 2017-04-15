
Ext.define('App.view.authority.menu.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menulist',

    onAddClick: function () {
        var win = Ext.create('App.view.authority.menu.Edit');
        win.setTitle('添加菜单');
        win.controller.reset();
        win.down('menuselect').setReadOnly(false);
        win.show();
    },

    onEditClick: function () {
        var view = this.getView();
        var selected = view.down('treepanel').getSelection();
        if (selected.length == 0) {
            App.notify('消息', '请选择菜单！');
            return;
        }
        var win = Ext.create('App.view.authority.menu.Edit');
        win.setTitle('编辑菜单');
        win.controller.reset();
        win.down('menuselect').setReadOnly(true);
        win.down('form').getForm().loadRecord(selected[0]);
        win.down('menuselect').setRawValue(selected[0].data.PName);
        win.show();
    },

    refreshTree: function () {
        var tree = this.getView().down('treepanel');
        var history = Ext.create('App.util.TreeHistory');
        history.save(tree);
        tree.getStore().load({
            params: {
                PID: 0
            },
            callback: function () {
                tree.collapseAll();
                history.restore(tree);
            }
        });
    },

    onTreeItemClick: function (view, record, item, index, e, eOpts) {
        var view = this.getView();
        var selected = view.down('treepanel').getSelection();
        if (selected.length == 0) {
            App.notify('消息', '请选择菜单！');
            return;
        }
    },

    onDeleteClick: function () { // 点击删除按钮
        var view = this.getView();
        var selected = view.down('treepanel').getSelection();
        if (selected.length == 0) {
            App.notify('消息', '请选择菜单！');
            return;
        }
        App.confirm('消息', '要删除该菜单？', function () {
            App.post('/api/Menu/Delete?ID=' + selected[0].data.ID, function (data) {
                var obj = JSON.parse(data);
                if (obj.Code == 200) {
                    view.controller.refreshTree();
                    App.notify('消息', obj.Msg);
                } else {
                    App.alert('错误', obj.Msg);
                }
            })
        });
    }
});