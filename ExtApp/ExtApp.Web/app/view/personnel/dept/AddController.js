
// ---------------- 组织机构添加Controller --------------------

Ext.define('App.view.personnel.dept.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deptadd',

    onSaveClick: function () { // 点击保存按钮
        var win = this.getView();
        var form = win.down('form');
        if (!form.isValid()) {
            return;
        }
        var values = form.getValues();

        debugger;
        // 上级机构
        if (values.PID != '0') {
            values.PDept = {
                ID: values.PID
            };
        }

        // 类型
        if (values.TypeID != '') {
            values.Type = {
                ID: values.TypeID
            };
        }

        Ext.Ajax.request({
            url: '/api/Dept/Add',
            method: 'POST',
            jsonData: values,
            success: function (response, opts) {
                var data = response.responseText;
                var obj = Ext.JSON.decode(data);
                if (obj.Code == 200) { // 成功
                    win.hide();
                    var list = Ext.ComponentQuery.query('deptlist')[0];
                    list.controller.refresh();
                } else { // 失败
                    Ext.Msg.alert('消息', obj.statusText);
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