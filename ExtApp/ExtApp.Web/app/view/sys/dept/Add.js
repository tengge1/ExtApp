/**
* 添加机构
*/

Ext.define('App.view.sys.dept.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.deptadd',

    requires: [
        'App.view.sys.dept.AddController'
    ],

    controller: 'deptadd',

    title: '添加机构',
    layout: 'fit',
    modal: true,
    iconCls: 'Applicationsidetree',

    items: {
        xtype: 'form',
        border: false,
        defaults: {
            margin: 10
        },
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 60
        },
        items: [{
            xtype: 'hiddenfield',
            name: 'PID'
        }, {
            xtype: 'textfield',
            name: 'PName',
            fieldLabel: '上级机构',
            readOnly: true
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: '机构名称',
            allowBlank: false
        }, {
            xtype: 'numberfield',
            name: 'Layer',
            fieldLabel: '排　　序',
            allowBlank: false,
            value: 0
        }, {
            xtype: 'combo',
            store: [[
                0, '启用'
            ], [
                -1, '禁用'
            ]],
            name: 'Status',
            value: 0,
            editable: false,
            fieldLabel: '状　　态'
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