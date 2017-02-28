/**
* 用户管理控制器
*/

Ext.define('App.view.sys.user.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.useredit',

    onSaveClick: function () { // 点击保存按钮
        var win = this.getView();
        var form = win.down('form');
        var values = form.getValues();
        Ext.Ajax.request({
            url: '/api/User/Edit',
            method: 'POST',
            params: values,
            success: function (response, opts) {
                var data = response.responseText;
                var obj = Ext.JSON.decode(data);
                if (obj.Code == 200) { // 添加成功
                    win.hide();
                    var store = Ext.ComponentQuery.query('userlist')[0].getStore();
                    store.load();
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