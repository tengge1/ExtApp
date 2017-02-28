/**
* 添加菜单
*/

Ext.define('App.view.sys.appMenu.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.appmenuedit',

    requires: [
        'App.view.sys.appMenu.EditController'
    ],

    controller: 'appmenuedit',

    title: '编辑菜单',
    width: 500,
    layout: 'fit',
    modal: true,
    iconCls: 'Applicationsidetree',

    items: {
        xtype: 'form',
        border: false,
        layout: 'column',
        defaults: {
            margin: 10,
            columnWidth: 0.5
        },
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 60
        },
        items: [{
            xtype: 'hiddenfield',
            name: 'ID'
        }, {
            xtype: 'hiddenfield',
            name: 'PID'
        }, {
            xtype: 'textfield',
            name: 'Code',
            fieldLabel: '菜单编码',
            readOnly: true
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: '菜单名称',
            allowBlank: false
        }, {
            xtype: 'combo',
            store: [[
                0, '未设置'
            ], [
                1, 'ExtJs类名'
            ], [
                2, 'Url地址'
            ]],
            name: 'UrlType',
            value: 0,
            editable: false,
            fieldLabel: '菜单类型'
        }, {
            xtype: 'textfield',
            name: 'Url',
            fieldLabel: '类名/Url'
        }, {
            xtype: 'combo',
            store: [[
                0, '未设置'
            ], [
                1, 'css样式'
            ], [
                2, '图片url'
            ]],
            name: 'IconType',
            value: 0,
            editable: false,
            fieldLabel: '图标类型'
        }, {
            xtype: 'textfield',
            name: 'Icon',
            fieldLabel: '图标'
        }, {
            xtype: 'numberfield',
            name: 'Layer',
            fieldLabel: '菜单排序',
            allowBlank: false,
            value: 0
        }, {
            xtype: 'combo',
            store: [[
                0, '启用'
            ], [
                -1, '禁用'
            ]],
            name: 'Status',
            value: 0,
            editable: false,
            fieldLabel: '状态'
        }]
    },
    buttons: [{
        text: '保存',
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