/**
* 编辑配置页面
*/

Ext.define('App.view.sys.config.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.configedit',

    requires: [
        'App.view.sys.config.EditController'
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