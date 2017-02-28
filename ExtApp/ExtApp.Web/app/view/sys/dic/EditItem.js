/**
* 编辑字典子项
*/

Ext.define('App.view.sys.dic.EditItem', {
    extend: 'Ext.window.Window',
    alias: 'widget.dicedititem',

    requires: [
        'App.view.sys.dic.EditItemController'
    ],

    layout: 'fit',
    title: '编辑字典子项',
    modal: true,
    controller: 'dicedititem',

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
            xtype: 'hidden',
            name: 'PID'
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
            xtype: 'numberfield',
            name: 'Layer',
            value: '0',
            fieldLabel: '排序',
            allowBlank: false
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