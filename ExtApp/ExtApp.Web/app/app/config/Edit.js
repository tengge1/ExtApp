
Ext.define('App.app.config.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.configedit',

    requires: [
        'App.app.config.EditController'
    ],

    layout: 'fit',
    title: '编辑配置',
    modal: true,
    controller: 'configedit',

    items: [{
        xtype: 'form',
        layout: 'form',
        border: false,
        defaults: {
            margin: 10
        },
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 40
        },
        items: [{
            xtype: 'hidden',
            name: 'ID',
            value: 0
        }, {
            xtype: 'hidden',
            name: 'PID',
            value: 0
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: '名称',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'Key',
            fieldLabel: 'Key',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'Value',
            fieldLabel: 'Value',
            allowBlank: false
        }, {
            xtype: 'numberfield',
            name: 'Sort',
            value: '0',
            fieldLabel: '排序',
            allowBlank: false
        }, {
            xtype: 'combo',
            name: 'Status',
            store: [[
                1, '启用'
            ], [
                0, '禁用'
            ]],
            value: 1,
            fieldLabel: '状态',
            editable: false,
            allowBlank: false
        }, {
            xtype: 'textarea',
            name: 'Comment',
            fieldLabel: '备注'
        }]
    }],

    buttons: [{
        text: '确定',
        iconCls: 'Accept',
        handler: 'onSaveClick'
    }, {
        text: '取消',
        iconCls: 'Cancel',
        handler: 'onCancelClick'
    }]
});