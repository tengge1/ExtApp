/**
* 编辑机构
*/

Ext.define('App.view.sys.dept.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.deptedit',

    requires: [
        'App.view.sys.dept.EditController'
    ],

    controller: 'deptedit',

    title: '编辑机构',
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
            name: 'ID'
        }, {
            xtype: 'hiddenfield',
            name: 'PID'
        }, {
            xtype: 'textfield',
            name: 'Code',
            fieldLabel: '机构编码',
            readOnly: true
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: '机构名称',
            allowBlank: false
        }, {
            xtype: 'numberfield',
            name: 'Layer',
            fieldLabel: '排序',
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
            fieldLabel: '状态'
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