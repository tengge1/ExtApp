/**
* 添加配置页面
*/

Ext.define('App.view.sys.config.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.configadd',

    requires: [
        'App.view.sys.config.AddController'
    ],

    layout: 'fit',
    title: '添加配置',
    modal: true,
    controller: 'configadd',

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