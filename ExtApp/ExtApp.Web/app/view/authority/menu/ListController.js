
Ext.define('App.view.authority.menu.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menulist',

    onAddClick: function () {
        var view = Ext.create('App.view.authority.menu.Add');
        view.controller.reset();
        view.show();
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
        view.down('form').getForm().reset();
        view.down('form').getForm().loadRecord(selected[0]);
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
    },

    onSaveClick: function () {
        var me = this;
        var view = this.getView();
        var form = view.down('form');
        var ID = form.form.getValues()["ID"];
        if (ID == '') {
            App.notify('消息', '请选择菜单！');
            return;
        }

        if (ID == '0') {
            App.notify('消息', '无法编辑顶级菜单！');
            return;
        }

        if (!form.isValid()) {
            App.notify('消息', '请填写完整！');
            return;
        }
        var values = form.getValues();

        App.post('/api/Menu/Edit', values, function (data) {
            var obj = JSON.parse(data);
            if (obj.Code == 200) { // 成功
                me.refreshTree();
                App.notify('消息', obj.Msg);
            } else { // 失败
                App.alert('消息', obj.Msg);
            }
        });
    }
});