
Ext.define('App.view.core.config.List', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.configlist',

    requires: [
        'App.view.core.config.ListController',
        'Ext.ux.form.SearchField'
    ],

    controller: 'configlist',

    title: '系统配置',
    closable: true,
    layout: 'border',

    items: [{
        xtype: 'treepanel',
        region: 'west',
        width: 200,
        title: '配置节点',
        split: true,
        collapsible: true,
        rootVisible: true,

        tbar: [{
            xtype: 'searchfield',
            fieldLabel: '搜索',
            labelWidth: 40,
            labelAlign: 'right',
            paramName: 'name',
            emptyText: '名称',
            store: Ext.create('App.store.core.ConfigSectionTree')
        }],

        bbar: [{
            xtype: 'button',
            text: '添加',
            iconCls: 'Add',
            handler: 'onAddSectionClick'
        }, {
            xtype: 'button',
            text: '编辑',
            iconCls: 'Applicationedit',
            handler: 'onEditSectionClick'
        }, {
            xtype: 'button',
            text: '删除',
            iconCls: 'Delete',
            handler: 'onDeleteSectionClick'
        }],

        listeners: {
            itemclick: 'onTreeItemClick'
        }
    }, {
        xtype: 'gridpanel',
        region: 'center',
        title: '系统配置',

        store: Ext.create('App.store.core.Config'),

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

        columns: [{
            xtype: 'rownumberer'
        }, {
            text: '名称',
            dataIndex: 'Name'
        }, {
            text: 'Key',
            dataIndex: 'Key'
        }, {
            text: 'Value',
            dataIndex: 'Value'
        }, {
            text: '排序',
            dataIndex: 'Sort'
        }, {
            text: '状态',
            dataIndex: 'Status',
            renderer: App.renderer.status
        }, {
            text: '备注',
            dataIndex: 'Comment',
            flex: 1
        }]
    }]
});