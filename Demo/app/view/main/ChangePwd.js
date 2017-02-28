/**
* 修改密码
*/

Ext.define('App.view.main.ChangePwd', {
    extend: 'Ext.window.Window',
    alias: 'widget.changepwd',

    requires: [
        'App.view.main.ChangePwdController'
    ],

    controller: 'changepwd',

    title: '修改密码',
    layout: 'fit',
    modal: true,

    items: {
        xtype: 'form',
        defaults: {
            xtype: 'textfield',
            inputType: 'password'
        },
        items: [{
            name: 'oldPwd',
            fieldLabel: '旧密码',
            margin: '15 10 5 10'
        }, {
            name: 'newPwd',
            fieldLabel: '新密码',
            margin: '5 10 5 10'
        }, {
            name: 'confirmPwd',
            fieldLabel: '确认密码',
            margin: '5 10 15 10'
        }]
    },

    buttons: [{
        xtype: 'button',
        text: '确定',
        listeners: {
            click: 'onClickOK'
        }
    }, {
        xtype: 'button',
        text: '取消',
        listeners: {
            click: 'onClickCancel'
        }
    }]
});