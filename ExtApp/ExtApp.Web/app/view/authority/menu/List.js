
Ext.define("App.view.authority.menu.List", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.menulist',

    requires: [
        'App.widget.DeptSelect',
        'App.view.authority.menu.ListController'
    ],

    controller: 'menulist',

    title: '菜单管理',
    layout: 'border',
    closable: true,

    items: [{
        xtype: 'treepanel',
        region: 'west',
        title: '系统菜单',
        width: 200,
        rootVisible: true,
        collapsible: true,
        split: true,
        store: Ext.create('App.store.authority.MenuTree'),

        tools: [{
            itemId: 'refresh',
            type: 'refresh',
            callback: 'refreshTree'
        }],

        tbar: [{
            xtype: 'button',
            text: '添加',
            iconCls: 'Add',
            handler: 'onAddClick'
        }, {
            xtype: 'button',
            text: '删除',
            iconCls: 'Delete',
            handler: 'onDeleteClick'
        }],

        listeners: {
            itemclick: 'onTreeItemClick'
        }
    }, {
        xtype: 'panel',
        region: 'center',
        layout: 'center',

        items: [{
            xtype: 'panel',
            border: true,
            frame: true,
            title: '菜单信息',
            iconCls: 'Applicationsidetree',

            items: [{
                xtype: 'form',
                layout: 'form',
                border: false,
                defaults: {
                    margin: 10
                },
                fieldDefaults: {
                    labelAlign: 'right',
                    labelWidth: 50
                },
                items: [{
                    xtype: 'hidden',
                    name: 'ID'
                }, {
                    xtype: 'hidden',
                    name: 'PID'
                }, {
                    xtype: 'textfield',
                    name: 'PName',
                    fieldLabel: '上级',
                    readOnly: true
                }, {
                    xtype: 'textfield',
                    name: 'Code',
                    fieldLabel: '编码',
                    readOnly: true
                }, {
                    xtype: 'textfield',
                    name: 'Name',
                    fieldLabel: '名称',
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
                    fieldLabel: '类型'
                }, {
                    xtype: 'textarea',
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
                    name: 'Sort',
                    fieldLabel: '排序',
                    allowBlank: false,
                    value: 0
                }, {
                    xtype: 'combo',
                    store: [[
                        1, '启用'
                    ], [
                        0, '禁用'
                    ]],
                    name: 'Status',
                    value: 1,
                    editable: false,
                    fieldLabel: '状态'
                }]
            }],

            buttons: [{
                xtype: 'button',
                text: '保存',
                iconCls: 'Pagesave',
                handler: 'onSaveClick'
            }]
        }]
    }]
});