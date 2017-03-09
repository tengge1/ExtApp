
// ------------- 组织机构管理 -----------------

Ext.define("App.view.personnel.dept.List", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.deptlist',

    requires: [
        'App.view.personnel.dept.ListController'
    ],

    controller: 'deptlist',

    title: '组织机构管理',
    layout: 'border',
    closable: true,

    items: [{
        xtype: 'treepanel',
        region: 'west',
        title: '组织机构',
        width: 200,
        rootVisible: false,
        collapsible: true,
        split: true,
        store: Ext.create('App.store.personnel.DeptTree'),
        tools: [{
            itemId: 'refresh',
            type: 'refresh',
            callback: function () {

            }
        }]
    }, {
        xtype: 'panel',
        region: 'center',
        layout: 'center',
        items: [{
            xtype: 'form',
            border: true,
            frame: true,
            buttonAlign: 'center',
            width: 500,
            height: 300,
            padding: 5,
            defaults: {
                labelWidth: 40,
                labelAlign: 'right'
            },
            items: [{
                xtype: 'textfield',
                fieldLabel: '名称'
            }]
        }, {
            xtype: 'numberfield',
            name: 'Layer',
            fieldLabel: '排序',
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
        }, {
            xtype: 'textarea',
            name: 'Comment',
            fieldLabel: '备注'
        }]
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
    }, {
        xtype: 'button',
        text: '保存',
        iconCls: 'Pagesave',
        handler: ''
    }]
});