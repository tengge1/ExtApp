/**
* 添加用户
*/

Ext.define('App.view.sys.user.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.useradd',

    requires: [
        'App.view.sys.user.AddController'
    ],

    controller: 'useradd',

    title: '添加用户',
    layout: 'fit',
    modal: true,
    iconCls: 'User',
    width: 500,

    items: {
        xtype: 'form',
        layout: 'column',
        border: false,
        defaults: {
            margin: 10,
            columnWidth: 0.5
        },
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 60
        },
        items: [{
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: '姓名',
            allowBlank: false
        }, {
            xtype: 'combo',
            name: 'Sex',
            fieldLabel: '性别',
            allowBlank: false,
            emptyText: '请选择',
            editable: false,
            store: [[
                0,
                '男'
            ], [
                1,
                '女'
            ]]
        }, {
            xtype: 'textfield',
            name: 'Username',
            fieldLabel: '用户名',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'Password',
            fieldLabel: '密码',
            allowBlank: false
        }, {
            xtype: 'combo',
            name: 'Role',
            fieldLabel: '角色',
            allowBlank: false,
            emptyText: '请选择',
            editable: false,
            displayField: 'Name',
            valueField: 'ID'
        }, {
            xtype: 'combo',
            name: 'Dept',
            fieldLabel: '机构',
            allowBlank: false,
            emptyText: '请选择',
            editable: false,
            displayField: 'Name',
            valueField: 'ID'
        }, {
            xtype: 'numberfield',
            name: 'Layer',
            fieldLabel: '排序',
            value: 0,
            allowBlank: false
        }, {
            xtype: 'textarea',
            name: 'Memo',
            fieldLabel: '备注'
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