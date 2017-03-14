
// -------------- 组织机构管理控制器 ------------------

Ext.define('App.view.personnel.dept.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deptlist',

    init: function () { // 初始化

    },

    refresh: function () { // 刷新树节点，展开到当前位置
        // 获取path
        var tree = this.getView().down('treepanel');
        var store = tree.getStore();
        var selected = tree.getSelection();
        if (selected.length > 0) { // 选中了某个节点
            var path = selected[0].getPath();
            store.load();
            tree.getRootNode().collapse();
            tree.expandPath(path);
        } else { // 没有选中某个节点
            store.load();
            tree.getRootNode().collapse();
            tree.expandAll();
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
        var me = this;
        var selected = this.getView().down('treepanel').getSelection();
        if (selected.length == 0) {
            App.notify('消息', '请选择节点！');
            return;
        }
        App.confirm('消息', '要删除该机构？', function () {
            App.post('/api/Dept/Delete?id=' + selected[0].data.ID, function (data) {
                var obj = JSON.parse(data);
                if (obj.Code == 200) {
                    App.notify('消息', '操作成功');
                    me.refresh();
                } else {
                    App.alert('错误', obj.Msg);
                }
            })
        });
    }
});