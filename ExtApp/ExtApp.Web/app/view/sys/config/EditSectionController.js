/**
* 编辑配置节点控制器
*/

Ext.define('App.view.sys.config.EditSectionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.configsectionedit',

    onSaveClick: function () { // 点击保存按钮
        var me = this;
        var view = me.getView();
        var form = view.down('form');
        if (!form.isValid()) {
            return;
        }
        var values = form.getValues();

        // PID
        if (values.PID == '') {
            delete values.PID;
        } else {
            values.PSection = {
                ID: values.PID
            };
        }

        Ext.Ajax.request({
            url: '/api/ConfigSection/Edit',
            method: 'POST',
            jsonData: values,

            success: function (response, opts) {
                var data = response.responseText;
                var obj = Ext.JSON.decode(data);
                if (obj.Code == 200) {
                    view.hide();
                    var controller = Ext.ComponentQuery.query('configlist')[0].getController();
                    controller.refreshConfigSection();

                } else {
                    Ext.Msg.alert('消息', obj.Msg);
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