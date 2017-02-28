/**
* 配置列表
*/

Ext.define('App.view.sys.config.List', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.configlist',

    requires: [
        'App.view.sys.config.ListController'
    ],

    controller: 'configlist',

    title: '系统配置',
    closable: true,
    layout: 'border',

    items: [{
        xtype: 'treepanel',
        region: 'west',
        width: 180,
        title: '系统配置节点',
        split: true,
        collapsible: true,
        rootVisible: true,

        root: {
            text: '所有配置',
            expanded: true,
            children: [],
            ID: 0,
            PID: 0
        },

        tbar: [{
            xtype: 'button',
            text: '添加',
            iconCls: 'Add',
            listeners: {
                click: 'onAddSectionClick'
            }
        }, {
            xtype: 'button',
            text: '编辑',
            iconCls: 'Applicationedit',
            listeners: {
                click: 'onEditSectionClick'
            }
        }, {
            xtype: 'button',
            text: '删除',
            iconCls: 'Delete',
            listeners: {
                click: 'onDeleteSectionClick'
            }
        }],

        listeners: {
            itemclick: 'onTreeItemClick'
        }
    }, {
        xtype: 'gridpanel',
        region: 'center',
        title: '系统配置',
        defaults: {
            xtype: 'column '
        },
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
            dataIndex: 'Layer'
        }, {
            text: '状态',
            dataIndex: 'Status',
            renderer: 'renderStatus'
        }, {
            text: '备注',
            dataIndex: 'Memo',
            flex: 1
        }],
        tbar: [{
            xtype: 'button',
            text: '添加',
            iconCls: 'Add',
            listeners: {
                click: 'onAddClick'
            }
        }, {
            xtype: 'button',
            text: '编辑',
            iconCls: 'Applicationedit',
            listeners: {
                click: 'onEditClick'
            }
        }, {
            xtype: 'button',
            text: '删除',
            iconCls: 'Delete',
            listeners: {
                click: 'onDeleteClick'
            }
        }]
    }]
});