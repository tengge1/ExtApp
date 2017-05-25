
Ext.define('App.app.Login', {
    extend: 'Ext.container.Container',
    alias: 'widget.login',

    requires: [
        'App.app.LoginController'
    ],

    controller: 'login',

    layout: 'center',

    items: [{
        xtype: 'form',
        title: 'ExtJs权限管理平台',
        frame: true,
        width: 320,
        iconCls: 'Lock',
        bodyPadding: 10,
        defaultType: 'textfield',
        buttonAlign: 'center',

        items: [{
            name: 'Username',
            fieldLabel: '用户名',
            iconCls: 'User',
            emptyText: '请输入用户名',
            allowBlank: false
        }, {
            name: 'Password',
            fieldLabel: '密　码',
            inputType: 'password',
            iconCls: 'Lock',
            emptyText: '请输入密码',
            allowBlank: false
        }],

        buttons: [{
            text: '登录',
            handler: 'onLoginClick'
        }, {
            text: '清空',
            handler: 'onResetClick'
        }]
    }]
});
