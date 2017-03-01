/**
* 配置控制器
*/

Ext.define('App.view.sys.config.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.configlist',

    requires: [
        'App.store.sys.ConfigSection',
        'App.view.sys.config.AddSection',
        'App.view.sys.config.EditSection',
        'App.store.sys.Config',
        'App.view.sys.config.Add',
        'App.view.sys.config.Edit'
    ],

    init: function () { // 页面初始化
        var me = this;
        var view = this.getView();
        var tree = view.down('treepanel');
        var store = Ext.create('store.configsectionlist');
        tree.setStore(store);
        //store.reload();
    },

    refreshConfigSection: function () { // 刷新配置节点
        var me = this;
        var view = me.getView();
        var tree = view.down('treepanel');
        var store = tree.getStore();
        //store.reload();
    },

    refreshConfig: function () { // 刷新配置
        var me = this;
        var view = me.getView();
        var grid = view.down('grid');
        var store = grid.getStore();
        //store.reload();
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

    onAddSectionClick: function () { // 点击添加按钮
        var me = this;
        var view = me.getView();
        var tree = view.down('treepanel');
        var selected = tree.getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请选择上级配置节点！');
            return;
        }
        var win = Ext.widget('configsectionadd');
        var con = win.getController();
        con.setPID(selected[0].data.ID);
        win.show();
    },

    onEditSectionClick: function () { // 点击编辑按钮
        var me = this;
        var view = me.getView();
        var tree = view.down('treepanel');
        var selected = tree.getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请选择配置节点');
            return;
        }
        var win = Ext.widget('configsectionedit');
        win.down('form').getForm().loadRecord(selected[0]);
        win.show();
    },

    onDeleteSectionClick: function () { // 点击删除按钮
        var me = this;
        var view = me.getView();
        var tree = view.down('treepanel');
        var selected = tree.getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请选择配置节点');
            return;
        }
        Ext.Msg.confirm('消息', '要删除该配置节点？', function (buttonId, value, opt) {
            if (buttonId == 'yes') {
                Ext.Ajax.request({
                    url: '/api/ConfigSection/Delete?id=' + selected[0].data.ID,
                    method: 'POST',
                    success: function (response, opts) {
                        var obj = Ext.JSON.decode(response.responseText);
                        if (obj.Code == 200) {
                            me.refreshConfigSection();
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
        grid.setTitle(text + ' - 系统配置');
        var store = Ext.create('store.configlist');
        store.load({
            params: {
                PID: id
            },
            callback: function () {
                grid.setStore(store);
            }
        });
    },

    onAddClick: function () { // 添加子项
        var view = this.getView();
        var tree = view.down('treepanel');
        var selected = tree.getSelection();
        if (selected.length == 0) {
            Ext.notify('消息', '请选择配置节点！');
            return;
        }

        var win = Ext.widget('configadd');
        win.setTitle('添加子项 - ' + selected[0].data.Name);
        var controller = win.getController();
        controller.setPID(selected[0].data.ID);
        win.show();
    },

    onEditClick: function () { // 编辑子项
        var me = this;
        var view = me.getView();
        var grid = view.down('gridpanel');
        var selected = grid.getSelectionModel().getSelected();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请先选择配置！');
            return;
        }

        var win = Ext.widget('configedit');
        win.setTitle('编辑子项 - ' + selected.items[0].data.Name + '[' + selected.items[0].data.Code + ']');
        win.down('form').getForm().loadRecord(selected.items[0]);
        win.show();
    },

    onDeleteClick: function () { // 删除配置
        var me = this;
        var view = me.getView();
        var grid = view.down('gridpanel');
        var selected = grid.getSelectionModel().getSelected();
        if (selected.length == 0) {
            Ext.notify('消息', '请选择配置！');
            return;
        }
        Ext.Msg.confirm('消息', '要删除该记录？', function (buttonId, value, opt) {
            if (buttonId == 'yes') {
                Ext.Ajax.request({
                    url: '/api/Config/Delete?id=' + selected.items[0].data.ID,
                    method: 'POST',
                    success: function (response, opts) {
                        var obj = Ext.JSON.decode(response.responseText);
                        if (obj.Code == 200) {
                            me.refreshConfig();
                            Ext.notify('消息', '删除成功！');
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