/**
* 添加字典
*/

Ext.define('App.view.sys.dic.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.dicadd',

    requires: [
        'App.view.sys.dic.AddController'
    ],

    layout: 'fit',
    title: '添加字典',
    modal: true,
    controller: 'dicadd',

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
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: '名称',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'Code',
            fieldLabel: '编码',
            allowBlank: false
        }, {
            xtype: 'combo',
            name: 'Type',
            fieldLabel: '类型',
            store: [[
                0,
                '系统'
            ], [
                1,
                '用户'
            ]],
            allowBlank: false,
            emptyText: '请选择类型',
            editable: false
        }, {
            xtype: 'textarea',
            name: 'Memo',
            fieldLabel: '备注'
        }]
    }],

    buttons: [{
        text: '确定',
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