
Ext.define('App.view.core.config.EditSection', {
    extend: 'Ext.window.Window',
    alias: 'widget.configsectionedit',

    requires: [
        'App.view.core.config.EditSectionController'
    ],

    layout: 'fit',
    title: '编辑配置节点',
    modal: true,
    controller: 'configsectionedit',

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
            xtype: 'numberfield',
            name: 'Layer',
            value: 0,
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