
Ext.define('App.view.personnel.user.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',

    requires: [
        'App.view.personnel.user.EditController'
    ],

    controller: 'useredit',

    title: '编辑用户',
    width: 600,
    height: 340,
    layout: 'fit',

    items: {
        xtype: 'form',
        margin: 5,
        border: false,
        layout: 'column',

        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 60,
            margin: 5,
            columnWidth: 0.5
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
            name: 'Password',
            fieldLabel: '密码'
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: '姓名'
        }, {
            xtype: 'combo',
            name: 'Sex',
            fieldLabel: '性别',
            store: [[1, '男'], [2, '女']]
        }, {
            xtype: 'combo',
            name: 'DeptID',
            fieldLabel: '机构'
        }, {
            xtype: 'combo',
            name: 'RoleID',
            fieldLabel: '角色'
        }, {
            xtype: 'textfield',
            name: 'Duty',
            fieldLabel: '职责'
        }, {
            xtype: 'textfield',
            name: 'Phone',
            fieldLabel: '手机号'
        }, {
            xtype: 'textfield',
            name: 'Email',
            fieldLabel: '电子邮箱'
        }, {
            xtype: 'textfield',
            name: 'Birthday',
            fieldLabel: '出生日期'
        }, {
            xtype: 'textfield',
            name: 'Address',
            fieldLabel: '地址'
        }, {
            xtype: 'numberfield',
            name: 'Sort',
            value: 0,
            fieldLabel: '排序'
        }, {
            xtype: 'textarea',
            name: 'Comment',
            fieldLabel: '备注',
            columnWidth: 1
        }]
    },
    buttons: [{
        text: '保存',
        iconCls: 'Accept',
        listeners: {
            click: 'onSaveClick'
        }
    }, {
        text: '取消',
        iconCls: 'Cancel',
        listeners: {
            click: 'onCancelClick'
        }
    }]
});
