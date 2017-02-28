/**
* 用户添加控制器
*/

Ext.define('App.view.sys.user.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.useradd',

    requires: [
        'App.store.sys.Role',
        'App.store.sys.Dept'
    ],

    init: function () { // 页面初始化
        var view = this.getView();
        var form = view.down('form');
        var fields = form.getForm().getFields();

        // 角色
        var rolestore = Ext.create('store.rolelist');
        rolestore.load({
            callback: function () {
                var role = fields.items[4];
                role.setStore(rolestore);
            }
        });

        // 机构
        var deptstore = Ext.create('store.deptlist');
        deptstore.load({
            callback: function () {
                var dept = fields.items[5];
                dept.setStore(deptstore);
            }
        });
    },

    onSaveClick: function () { // 点击保存按钮
        var view = this.getView();
        var form = view.down('form');
        if (!form.isValid()) {
            Ext.notify('消息', '请填写完整！');
            return;
        }

        var values = form.getValues();

        // 角色
        values.UserRole = {
            ID: values.Role
        };

        // 机构
        values.UserDept = {
            ID: values.Dept
        };

        // 状态
        values.Status = 0;

        Ext.Ajax.request({
            url: '/api/User/Add',
            method: 'POST',
            jsonData: values,
            success: function (response, opts) {
                var data = response.responseText;
                var obj = Ext.JSON.decode(data);
                if (obj.Code == 200) { // 添加成功
                    view.hide();
                    var store = Ext.ComponentQuery.query('userlist')[0].getStore();
                    store.reload();
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