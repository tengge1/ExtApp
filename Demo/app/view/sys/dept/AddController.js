/**
* 添加机构控制器
*/

Ext.define('App.view.sys.dept.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deptadd',

    setParentMenu: function (PID, PName) { // 设置父节点的id和名称
        var form = this.getView().down('form').getForm();
        form.findField('PID').setValue(PID);
        form.findField('PName').setValue(PName);
    },

    onSaveClick: function () { // 点击保存按钮
        var win = this.getView();
        var form = win.down('form');
        if (!form.isValid()) {
            return;
        }
        var values = form.getValues();
        if (values.PID != '0') {
            values.PDept = {
                ID: values.PID
            };
        }
        Ext.Ajax.request({
            url: '/api/Dept/Add',
            method: 'POST',
            jsonData: values,
            success: function (response, opts) {
                var data = response.responseText;
                var obj = Ext.JSON.decode(data);
                if (obj.Code == 200) { // 添加成功
                    win.hide();
                    var list = Ext.ComponentQuery.query('deptlist')[0];
                    list.getController().refresh();
                } else { // 添加失败
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