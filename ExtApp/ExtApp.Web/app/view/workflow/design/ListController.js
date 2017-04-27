
Ext.define('App.view.workflow.design.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.workflowlist',

    init: function () {
        var view = this.getView();
        var store = Ext.create('App.store.workflow.Workflow');
        view.down('gridpanel').setStore(store);
        view.down('pagingtoolbar').setStore(store);
        store.reload();
        view.down('pagingtoolbar').moveFirst();
    },

    refresh: function () {
        this.getView().down('pagingtoolbar').moveFirst();
    },

    onAddClick: function () {
        var win = Ext.create('App.view.workflow.design.Edit');
        win.setTitle('添加工作流');
        win.down('form').getForm().reset();
        win.show();
    },

    onEditClick: function () {
        var selected = this.getView().down('gridpanel').getSelectionModel().getSelected();
        if (selected.length == 0) {
            App.notify('消息', '请选择！');
            return;
        }
        var win = Ext.create('App.view.workflow.design.Edit');
        win.setTitle('编辑工作流');
        win.down('form').loadRecord(selected.items[0]);
        win.show();
    },

    onDeleteClick: function () {
        var view = this.getView();
        var selected = view.down('gridpanel').getSelectionModel().getSelected();
        if (selected.length == 0) {
            App.notify('消息', '请选择！');
            return;
        }
        App.confirm('消息', '确定删除？', function () {
            App.post('/api/Workflow/Delete?ID=' + selected.items[0].data.ID, function (data) {
                var obj = JSON.parse(data);
                if (obj.Code == 200) {
                    view.down('pagingtoolbar').moveFirst();
                    App.notify('消息', obj.Msg);
                } else {
                    App.alert('错误', obj.Msg);
                }
            })
        });
    },

    onDesignClick: function () {
        var selected = this.getView().down('gridpanel').getSelectionModel().getSelected();
        if (selected.length == 0) {
            App.notify('消息', '请选择！');
            return;
        }
        App.openInNewTab(selected.items[0].data.Name + '-设计', 'app/view/workflow/design/designer.html?ID=' + selected.items[0].data.ID);
    },

    onSearchClick: function () {
        var view = this.getView();
        var values = view.down('searchform').form.getValues();
        view.down('gridpanel').getStore().load({
            params: values
        });
    },

    onResetClick: function () {
        this.getView().down('searchform').form.reset();
    }
});