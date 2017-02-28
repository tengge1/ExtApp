/**
* 修改密码控制器
*/

Ext.define('App.view.main.ChangePwdController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.changepwd',

    onClickOK: function () { // 点击确定按钮
        var view = this.getView();
        Ext.Ajax.request({
            url: '/api/Login/ChangePwd?oldPwd=&newPwd=&confirmPwd=',
            method: 'POST',
            success: function (response, opts) {
                var obj = Ext.JSON.decode(response.responseText);
                if (obj.Code == 200) {
                    view.hide();
                    Ext.Msg.alert('消息', '密码修改成功！');
                } else {
                    Ext.Msg.alert('消息', obj.Msg);
                }
            },
            failure: function (response, opts) {
                Ext.Msg.alert('错误', response.responseText);
            }
        });
    },

    onClickCancel: function () { // 点击取消按钮
        this.getView().hide();
    }
});