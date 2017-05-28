
Ext.define('App.app.user.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.useredit',

    reset: function () { // 重置
        this.getView().down('form').reset();
    },

    onSaveClick: function () { // 保存
        var win = this.getView();
        var form = win.down('form').form;
        if (!form.isValid()) {
            return;
        }
        var values = form.getValues();

        // 性别
        if (values.SexID != null) {
            values.Sex = {
                ID: values.SexID
            };
        }

        // 机构
        if (values.DeptID != null) {
            values.Dept = {
                ID: values.DeptID
            };
        }

        // 角色
        if (values.RoleID != null) {
            values.Role = {
                ID: values.RoleID
            };
        }

        var url = '';
        if (values.ID == '' || values.ID == 0) {
            url = '/api/User/Add';
        } else {
            url = '/api/User/Edit';
        }

        App.post(url, values, function (data) {
            var obj = JSON.parse(data);
            if (obj.Code == 200) { // 添加成功
                win.hide();
                var view = Ext.ComponentQuery.query('userlist')[0];
                view.down('pagingtoolbar').moveFirst();
                App.notify('消息', obj.Msg);
            } else { // 添加失败
                App.alert('错误', obj.Msg);
            }
        });
    },

    onCancelClick: function () { // 点击取消按钮
        this.getView().hide();
    }
});