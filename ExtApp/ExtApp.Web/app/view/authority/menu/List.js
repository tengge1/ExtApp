
Ext.define("App.view.authority.menu.List", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.deptlist',

    requires: [
        'App.widget.DeptSelect',
        'App.view.authority.menu.ListController'
    ],

    controller: 'deptlist',

    title: '菜单管理',
    layout: 'border',
    closable: true,

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

    items: [{
        xtype: 'treepanel',
        region: 'west',
        title: '组织机构',
        width: 200,
        rootVisible: true,
        collapsible: true,
        split: true,
        store: Ext.create('App.store.personnel.DeptTree'),
        tools: [{
            itemId: 'refresh',
            type: 'refresh',
            callback: 'refresh'
        }],
        listeners: {
            itemclick: 'onTreeItemClick'
        }
    }, {
        xtype: 'panel',
        region: 'center',
        layout: 'center',

        items: [{
            xtype: 'form',
            layout: 'form',
            border: true,
            frame: true,
            title: '机构信息',
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