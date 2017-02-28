/**
* 添加字典子项
*/

Ext.define('App.view.sys.dic.AddItem', {
    extend: 'Ext.window.Window',
    alias: 'widget.dicadditem',

    requires: [
        'App.view.sys.dic.AddItemController'
    ],

    layout: 'fit',
    title: '添加字典子项',
    modal: true,
    controller: 'dicadditem',

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