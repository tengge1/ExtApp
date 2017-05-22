
Ext.define('App.main.ChangePwd', {
    extend: 'Ext.window.Window',
    alias: 'widget.changepwd',

    requires: [
        'App.main.ChangePwdController'
    ],

    controller: 'changepwd',

    title: '修改密码',
    layout: 'fit',
    iconCls: 'Lock',
    modal: true,
    resizable: false,

    items: {
        xtype: 'form',
        defaults: {
            xtype: 'textfield',
            inputType: 'password'
        },
        items: [{
            name: 'oldPwd',
            fieldLabel: '原密码',
            emptyText: '请填写原密码',
            allowBlank: false,
            margin: '15 10 5 10'
        }, {
            name: 'newPwd',
            fieldLabel: '新密码',
            emptyText: '请填写新密码',
            allowBlank: false,
            margin: '5 10 5 10'
        }, {
            name: 'confirmPwd',
            fieldLabel: '确认密码',
            emptyText: '请再次填写新密码',
            allowBlank: false,
            margin: '5 10 15 10'
        }]
    },

    buttons: [{
        text: '确定',
        iconCls: 'Accept',
        handler: 'onClickOK'
    }, {
        text: '取消',
        iconCls: 'Cancel',
        handler: 'onClickCancel'
    }]
});