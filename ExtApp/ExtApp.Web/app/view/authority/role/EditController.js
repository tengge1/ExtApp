
// --------- 编辑角色控制器 ---------

Ext.define('App.view.authority.role.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.roleedit',

    reset: function () { // 重置
        this.getView().down('form').getForm().reset();
    },

    onOKClick: function () { // 点击确定按钮
        var view = this.getView();
        var form = view.down('form').getForm();
        if (!form.isValid()) {
            return;
        }
        var values = form.getValues();

        var url = '/api/Role/Edit';
        if (values.ID == '') {
            values.ID = 0;
            url = '/api/Role/Add';
        }

        App.post(url, values, function (r) {
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