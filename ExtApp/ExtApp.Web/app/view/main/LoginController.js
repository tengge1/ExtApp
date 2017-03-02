/**
* 登录视图控制器
*/

Ext.define('App.view.main.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: [
        'App.util.Config'
    ],

    init: function () {
        var me = this;
        Ext.getBody().on('keypress', function (e) {
            if (e.keyCode == Ext.EventObject.ENTER) {
                me.onLoginClick();
            }
        });
    },

    onLoginClick: function () { // 点击登录按钮
        var form = this.getView().down('form').getForm();
        if (!form.isValid()) {
            return;
        }

        var values = form.getValues();

        // 调用api控制器
        var mask = Ext.create('Ext.LoadMask', {
            target: this.getView(),
            msg: '正在登录...',
            indicator: true,
            centered: true
        });
        mask.show();
        Ext.Ajax.request({
            url: '/api/Login/Login?username=' + values.username + '&password=' + values.password,
            method: 'POST',
            success: function (response, opts) {
                var obj = Ext.JSON.decode(response.responseText);
                if (obj.Code == 200) {
                    var config = Ext.create('util.config');
                    config.setState('login');
                    window.location.reload();
                } else {
                    Ext.Msg.alert('消息', obj.Msg);
                }
            },
            failure: function (response, opts) {
                mask.hide();
                Ext.Msg.alert('错误', response.statusText);
            }
        });
    },

    onResetClick: function () { // 点击重置按钮
        this.getView().down('form').getForm().reset();
    }
});