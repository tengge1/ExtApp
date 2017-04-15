
Ext.define('App.view.authority.role.AuthController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.roleauth',

    load: function (ID) {
        var view = this.getView();
        view.down('hidden').setValue(ID);
        var tree = view.down('treepanel');
        tree.collapseAll();
        tree.getStore().load({
            param: {
                RoleID: ID
            },
            callback: function () {
                tree.expandAll();
            }
        });
    },

    onOKClick: function () {
        var view = this.getView();
        var form = view.down('form').getForm();
        if (!form.isValid()) {
            return;
        }
        var values = form.getValues();

        App.post('/api/Role/Auth', values, function (r) {
            var obj = JSON.parse(r);
            if (obj.Code == 200) {
                view.hide();
                Ext.ComponentQuery.query('rolelist')[0].controller.refresh();
                App.notify('消息', obj.Msg);
            } else {
                App.alert('消息', obj.Msg);
            }
        });
    },

    onCancelClick: function () { // 点击取消按钮
        this.getView().hide();
    }
});