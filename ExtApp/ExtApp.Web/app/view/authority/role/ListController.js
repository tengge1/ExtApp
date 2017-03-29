
Ext.define('App.view.authority.role.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.rolelist',

    requires: [
        'App.store.authority.Role',
        'App.view.authority.role.Edit'
    ],

    init: function () {
        var view = this.getView();
        var store = Ext.create('store.rolelist');
        view.down('gridpanel').setStore(store);
        view.down('pagingtoolbar').setStore(store);
        store.reload();
        view.down('pagingtoolbar').moveFirst();
    },

    refresh: function () { // 刷新
        var view = this.getView();
        view.down('pagingtoolbar').moveFirst();
    },

    onSearchClick: function () { // 搜索
        var view = this.getView();
        var form = view.down('form').getForm();
        var values = form.getValues();
        var store = view.down('gridpanel').getStore();
        store.load({
            params: values
        });
    },

    onResetClick: function () { // 重置
        var view = this.getView();
        var form = view.down('searchform').getForm();
        form.reset();
    },

    onAddClick: function () { // 点击添加按钮
        var win = Ext.widget('roleedit');
        win.setTitle('添加角色');
        win.controller.reset();
        win.show();
    },

    onEditClick: function () { // 点击编辑按钮
        var view = this.getView();
        var grid = view.down('gridpanel');
        var selected = grid.getSelectionModel().getSelected();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请先选择一行');
            return;
        }
        var win = Ext.widget('roleedit');
        win.down('form').getForm().loadRecord(selected.items[0]);
        win.show();
    },

    onDeleteClick: function () { // 点击删除按钮
        var view = this.getView();
        var selected = view.down('gridpanel').getSelectionModel().getSelected();
        if (selected.length == 0) {
            App.alert('消息', '请选择');
            return;
        }
        App.confirm('消息', '要删除该记录？', function () {
            App.post('/api/Role/Delete?ID=' + selected.items[0].data.ID, function (r) {
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