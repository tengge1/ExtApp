/**
* 添加配置节点
*/

Ext.define('App.view.sys.config.AddSection', {
    extend: 'Ext.window.Window',
    alias: 'widget.configsectionadd',

    requires: [
        'App.view.sys.config.AddSectionController'
    ],

    layout: 'fit',
    title: '添加配置节点',
    modal: true,
    controller: 'configsectionadd',

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
            xtype: 'numberfield',
            name: 'Layer',
            value: 0,
            fieldLabel: '排序'
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