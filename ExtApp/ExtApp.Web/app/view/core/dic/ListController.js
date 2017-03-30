
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

    onTreeItemClick: function (view, record, item, index, e, eOpts) { // 点击菜单树的节点
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

    onAddItemClick: function () { // 添加字典子项
        var tree = this.getView().items.items[0];
        var selected = tree.getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请先选择字典！');
            return;
        }

        var win = Ext.widget('dicadditem');
        win.setTitle('添加子项 - ' + selected[0].data.Name + '[' + selected[0].data.Code + ']');
        var controller = win.getController();
        controller.setDicID(selected[0].data.ID);
        win.show();
    },

    onEditItemClick: function () { // 编辑字典子项
        var me = this;
        var view = me.getView();
        var grid = view.down('gridpanel');
        var selected = grid.getSelectionModel().getSelected();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请先选择字典子项！');
            return;
        }

        var win = Ext.widget('dicedititem');
        win.setTitle('编辑子项 - ' + selected.items[0].data.Name + '[' + selected.items[0].data.Code + ']');
        win.down('form').getForm().loadRecord(selected.items[0]);
        win.show();
    },

    onDeleteItemClick: function () { // 删除字典子项
        var me = this;
        var view = me.getView();
        var grid = view.down('gridpanel');
        var selected = grid.getSelectionModel().getSelected();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请先选择字典子项！');
            return;
        }
        Ext.Msg.confirm('消息', '要删除该记录？', function (buttonId, value, opt) {
            if (buttonId == 'yes') {
                Ext.Ajax.request({
                    url: '/api/DicItem/Delete?id=' + selected.items[0].data.ID,
                    method: 'POST',
                    success: function (response, opts) {
                        var obj = Ext.JSON.decode(response.responseText);
                        if (obj.Code == 200) {
                            me.refreshDicItem();
                        } else {
                            Ext.Msg.alert('消息', obj.Msg);
                        }
                    },
                    failure: function (response, opts) {
                        Ext.alert('消息', response.responseText);
                    }
                });
            }
        });
    }
});