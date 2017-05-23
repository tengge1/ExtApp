
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
        store: Ext.create('App.store.authority.MenuTree', {
            authorize: false
        }),

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
            text: '编辑',
            iconCls: 'Applicationedit',
            handler: 'onEditClick'
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
        layout: 'center'
    }]
});