/**
* 编辑用户
*/

Ext.define('App.view.sys.user.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',

    requires: [
        'App.view.sys.user.EditController'
    ],

    controller: 'useredit',

    title: '编辑用户',
    width: 300,
    height: 200,
    layout: 'fit',

    items: {
        xtype: 'form',
        margin: 5,
        border: false,
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 60
        },
        items: [{
            xtype: 'hiddenfield',
            name: 'ID'
        }, {
            xtype: 'textfield',
            name: 'Username',
            fieldLabel: '用户名'
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: '姓名'
        }]
    },
    buttons: [{
        text: '保存',
        listeners: {
            click: 'onSaveClick'
        }
    }, {
        text: '取消',
        listeners: {
            click: 'onCancelClick'
        }
    }]
});
