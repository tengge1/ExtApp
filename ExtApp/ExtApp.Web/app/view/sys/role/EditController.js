/**
* 编辑角色控制器
*/

Ext.define('App.view.sys.role.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.roleedit',

    reset: function () { // 重置
        this.getView().down('form').getForm().reset();
    },

    getValues: function () { // 获取
        return this.getView().down('form').getForm().getValues();
    },

    setValues: function (values) { // 赋值
        this.getView().down('form').getForm().setValues(values);
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

        Ext.Ajax.request({
            url: url,
            method: 'POST',
            params: values,
            success: function (response, opts) {
                var obj = Ext.JSON.decode(response.responseText);
                if (obj.Code == 200) {
                    view.hide();
                    Ext.ComponentQuery.query('rolelist')[0].controller.refresh();
                } else {
                    Ext.Msg.alert('消息', response.responseText);
                }
            },
            failure: function (response, opts) {
                Ext.Msg.alert('消息', response.responseText);
            }
        });
    },

    onCancelClick: function () { // 点击取消按钮
        this.getView().hide();
    }
});