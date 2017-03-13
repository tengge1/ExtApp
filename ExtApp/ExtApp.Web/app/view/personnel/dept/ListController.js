
// -------------- 组织机构管理控制器 ------------------

Ext.define('App.view.personnel.dept.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deptlist',

    init: function () { // 初始化
        var me = this;
        var view = me.getView();

        //var store = Ext.create('App.store.personnel.DeptTree');
        //view.down('treepanel').setStore(store);
        //store = Ext.create('App.store.personnel.DeptTree');
        //view.down('deptselect').setStore(store);
        //store.load();
    },

    refresh: function () { // 刷新树节点，展开到当前位置
        // 获取path
        var store = this.getView().getStore();
        var selected = this.getView().getSelection();
        if (selected.length > 0) {
            var path = selected[0].getPath();
            store.load();
            this.getView().getRootNode().collapse();
            this.getView().expandPath(path);
        } else {
            store.load();
            this.getView().getRootNode().collapse();
            this.getView().expandAll();
        }
    },

    onAddClick: function () { // 点击添加按钮
        var win = Ext.create('App.view.personnel.dept.Add');
        win.show();
    },

    onEditClick: function () { // 点击编辑按钮
        var selected = this.getView().getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请选择节点！');
            return;
        }
        var win = Ext.create('App.view.personnel.dept.Edit');
        win.down('form').getForm().loadRecord(selected[0]);
        win.show();
    },

    onRefreshClick: function () { // 点击刷新按钮
        this.refresh();
    },

    onDeleteClick: function () { // 点击删除按钮
        var selected = this.getView().getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('消息', '请选择节点！');
            return;
        }
        var me = this;
        Ext.Msg.confirm('消息', '要删除该记录？', function (buttonId, value, opt) {
            if (buttonId == 'yes') {
                Ext.Ajax.request({
                    url: '/api/Dept/Delete?id=' + selected[0].data.ID,
                    method: 'POST',
                    success: function (response, opts) {
                        var obj = Ext.JSON.decode(response.responseText);
                        if (obj.Code == 200) {
                            me.refresh();
                        } else {
                            Ext.Msg.alert('错误', obj.Msg);
                        }
                    },
                    failure: function (response, opts) {
                        Ext.Msg.alert('错误', response.responseText);
                    }
                });
            }
        });
    }
});