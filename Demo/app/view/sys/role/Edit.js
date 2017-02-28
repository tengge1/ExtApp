/**
* 编辑角色
*/

Ext.define('App.view.sys.role.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.roleedit',

    requires: [
        'App.view.sys.role.EditController'
    ],

    controller: 'roleedit',

    title: '编辑角色',
    layout: 'fit',
    iconCls: 'Group',
    width: 350,
    modal: true,

    items: {
        xtype: 'tabpanel',
        items: [{
            title: '基本信息',
            xtype: 'form',
            layout: 'form',
            defaults: {
                margin: '5 15 5 15'
            },
            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 40
            },
            items: [{
                xtype: 'hiddenfield',
                name: 'ID'
            }, {
                xtype: 'textfield',
                fieldLabel: '编码',
                name: 'Code',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: '名称',
                name: 'Name',
                allowBlank: false
            }, {
                xtype: 'numberfield',
                fieldLabel: '排序',
                name: 'Layer',
                value: 0,
                allowBlank: false
            }, {
                xtype: 'combo',
                fieldLabel: '状态',
                name: 'Status',
                store: [[
                    1, '启用'
                ], [
                    0, '禁用'
                ]],
                value: 1,
                editable: false
            }, {
                xtype: 'textarea',
                fieldLabel: '备注',
                name: 'Memo'
            }]
        }]
    },

    buttons: [{
        text: '确定',
        iconCls: 'Accept',
        handler: 'onOKClick'
    }, {
        text: '取消',
        iconCls: 'Cancel',
        handler: 'onCancelClick'
    }]
});