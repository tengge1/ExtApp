/**
* 编辑字典
*/

Ext.define('App.view.sys.dic.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.dicedit',

    requires: [
        'App.view.sys.dic.EditController'
    ],

    layout: 'fit',
    title: '编辑字典',
    modal: true,
    controller: 'dicedit',

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
            name: 'ID'
        }, {
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