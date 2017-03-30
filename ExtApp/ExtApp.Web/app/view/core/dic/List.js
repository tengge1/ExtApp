
Ext.define('App.view.core.dic.List', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.diclist',

    requires: [
        'App.view.core.dic.ListController'
    ],

    controller: 'diclist',

    title: '数据字典',
    closable: true,
    layout: 'border',

    items: [{
        xtype: 'treepanel',
        region: 'west',
        width: 200,
        title: '字典列表',
        store: Ext.create('App.store.core.DicTree'),
        split: true,
        collapsible: true,
        rootVisible: false,

        tbar: [{
            xtype: 'button',
            text: '添加',
            iconCls: 'Add',
            handler: 'onAddClick',
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
        xtype: 'gridpanel',
        region: 'center',
        title: '字典项列表',
        store: Ext.create('App.store.core.DicItem'),

        tbar: [{
            xtype: 'button',
            text: '添加',
            iconCls: 'Add',
            handler: 'onAddItemClick'
        }, {
            xtype: 'button',
            text: '编辑',
            iconCls: 'Applicationedit',
            handler: 'onEditItemClick'
        }, {
            xtype: 'button',
            text: '删除',
            iconCls: 'Delete',
            handler: 'onDeleteItemClick'
        }],

        columns: [{
            xtype: 'rownumberer'
        }, {
            text: '所属字典',
            dataIndex: 'DicName'
        }, {
            text: '编码',
            dataIndex: 'Code'
        }, {
            text: '名称',
            dataIndex: 'Name'
        }, {
            text: '排序',
            dataIndex: 'Sort'
        }, {
            text: '状态',
            dataIndex: 'Status',
            renderer: App.renderer.status
        }, {
            text: '备注',
            dataIndex: 'Comment'
        }]
    }]
});