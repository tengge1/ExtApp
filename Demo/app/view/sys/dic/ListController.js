/**
* 字典列表控制器
*/

Ext.define('App.view.sys.dic.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.diclist',

    requires: [
        'App.store.sys.Dic',
        'App.view.sys.dic.Add',
        'App.view.sys.dic.Edit',
        'App.store.sys.DicItem',
        'App.view.sys.dic.AddItem',
        'App.view.sys.dic.EditItem'
    ],

    init: function () { // 页面初始化
        //var me = this;
        //var view = this.getView();
        //var tree = view.down('treepanel');
        //var store = Ext.create('store.diclist');
        //var root = tree.getRootNode();
        //root.removeAll();
        //root.appendChild({
        //    text: '用户字典',
        //    leaf: false
        //});
        //root.appendChild({
        //    text: '系统字典',
        //    leaf: false
        //});
        //store.load({
        //    callback: function () {
        //        for (var i in store.data.items) {
        //            var item = store.data.items[i];
        //            if (item.data.Type == 0) { // 系统字典
        //                root.childNodes[1].appendChild({
        //                    text: item.data.Name + '[' + item.data.Code + ']',
        //                    leaf: true,
        //                    ID: item.data.ID,
        //                    Name: item.data.Name,
        //                    Code: item.data.Code,
        //                    Type: item.data.Type,
        //                    Memo: item.data.Memo
        //                });
        //            } else { // 用户字典
        //                root.childNodes[0].appendChild({
        //                    text: item.data.Name + '[' + item.data.Code + ']',
        //                    leaf: true,
        //                    ID: item.data.ID,
        //                    Name: item.data.Name,
        //                    Code: item.data.Code,
        //                    Type: item.data.Type,
        //                    Memo: item.data.Memo
        //                });
        //            }
        //        }
        //        tree.expandAll();
        //    }
        //});
    },

    refreshDic: function () { // 刷新字典列表
        var view = this.getView();
        var tree = view.down('treepanel');
        var store = Ext.create('store.diclist');
        tree.collapseAll();
        var root = tree.getRootNode();
        root.removeAll();
        root.appendChild({
            text: '用户字典',
            leaf: false
        });
        root.appendChild({
            text: '系统字典',
            leaf: false
        });
        store.load({
            callback: function () {
                for (var i in store.data.items) {
                    var item = store.data.items[i];
                    if (item.data.Type == 0) { // 系统字典
                        root.childNodes[1].appendChild({
                            text: item.data.Name + '[' + item.data.Code + ']',
                            leaf: true,
                            ID: item.data.ID,
                            Name: item.data.Name,
                            Code: item.data.Code,
                            Type: item.data.Type,
                            Memo: item.data.Memo
                        });
                    } else { // 用户字典
                        root.childNodes[0].appendChild({
                            text: item.data.Name + '[' + item.data.Code + ']',
                            leaf: true,
                            ID: item.data.ID,
                            Name: item.data.Name,
                            Code: item.data.Code,
                            Type: item.data.Type,
                            Memo: item.data.Memo
                        });
                    }
                }
                tree.expandAll();
            }
        });
    },

    refreshDicItem: function () { // 刷新字典子项列表
        var view = this.getView();
        var grid = view.down('grid');
        grid.getStore().reload();
    },

    renderStatus: function (value) { // 渲染状态
        if (value == 0) {
            return '启用';
        } else if (value == -1) {
            return '禁用';
        } else {
            return value;
        }
    },

    onAddClick: function () { // 点击添加按钮
        Ext.widget('dicadd').show();
    },

    onEditClick: function () { // 点击编辑按钮
        var me = this;
        var view = this.getView();
        var tree = view.items.items[0];
        var selected = tree.getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请先选择一行');
            return;
        }
        var win = Ext.widget('dicedit');
        win.down('form').getForm().loadRecord(selected[0]);
        win.show();
    },

    onDeleteClick: function () { // 点击删除按钮
        var me = this;
        var view = this.getView();
        var tree = view.items.items[0];
        var selected = tree.getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请先选择一行');
            return;
        }
        Ext.Msg.confirm('消息', '要删除该记录？', function (buttonId, value, opt) {
            if (buttonId == 'yes') {
                Ext.Ajax.request({
                    url: '/api/Dic/Delete?id=' + selected[0].data.ID,
                    method: 'POST',
                    success: function (response, opts) {
                        var obj = Ext.JSON.decode(response.responseText);
                        if (obj.Code == 200) {
                            me.refreshDic();
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
    },

    onTreeItemClick: function (view, record, item, index, e, eOpts) { // 点击菜单树的节点
        var id = record.data.ID;
        var text = record.data.text;
        var view = this.getView();
        var grid = view.down('gridpanel');
        grid.setTitle(text + ' - 字典子项');
        var store = Ext.create('store.dicitemlist');
        store.load({
            params: {
                dicID: id
            },
            callback: function () {
                grid.setStore(store);
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