
Ext.define('App.view.authority.menu.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.menuadd',

    requires: [
        'App.widget.DeptSelect',
        'App.view.authority.menu.AddController'
    ],

    controller: 'menuadd',

    title: '添加菜单',
    layout: 'fit',
    modal: true,
    iconCls: 'Applicationsidetree',

    items: {
        xtype: 'form',
        border: false,
        layout: 'form',
        defaults: {
            margin: 10
        },
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 50
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
        handler: 'onSaveClick'
    }, {
        text: '取消',
        iconCls: 'Cancel',
        handler: 'onCancelClick'
    }]
});
