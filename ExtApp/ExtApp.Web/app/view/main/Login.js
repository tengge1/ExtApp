
Ext.define('App.view.main.Login', {
    extend: 'Ext.container.Container',
    alias: 'widget.login',

    requires: [
        'App.view.main.LoginController'
    ],

    controller: 'login',

    layout: 'center',

    items: [{
        xtype: 'form',
        title: 'ExtJs权限管理系统',
        frame: true,
        width: 320,
        iconCls: 'Lock',
        bodyPadding: 10,
        defaultType: 'textfield',
        buttonAlign: 'center',

        items: [{
            allowBlank: false,
            fieldLabel: '用户名',
            name: 'Username',
            iconCls: 'User',
            emptyText: '请输入用户名'
        }, {
            allowBlank: false,
            fieldLabel: '密　码',
            name: 'Password',
            iconCls: 'Lock',
            emptyText: '请输入密码',
            inputType: 'password'
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
