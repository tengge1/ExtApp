
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
        defaults: {
            xtype: 'column '
        },
        columns: [{
            xtype: 'rownumberer'
        }, {
            text: '名称',
            dataIndex: 'Name'
        }, {
            text: '编码',
            dataIndex: 'Code'
        }, {
            text: '类型',
            dataIndex: 'Type'
        }],
        tbar: [{
            xtype: 'button',
            text: '添加',
            iconCls: 'Add',
            listeners: {
                click: 'onAddItemClick'
            }
        }, {
            xtype: 'button',
            text: '编辑',
            iconCls: 'Applicationedit',
            listeners: {
                click: 'onEditItemClick'
            }
        }, {
            xtype: 'button',
            text: '删除',
            iconCls: 'Delete',
            listeners: {
                click: 'onDeleteItemClick'
            }
        }]
    }]
});