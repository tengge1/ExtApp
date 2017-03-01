/**
* 字典列表
*/

Ext.define('App.view.sys.dic.List', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.diclist',

    requires: [
        'App.view.sys.dic.ListController'
    ],

    controller: 'diclist',

    title: '数据字典',
    closable: true,
    layout: 'border',

    items: [{
        xtype: 'treepanel',
        region: 'west',
        width: 180,
        title: '字典列表',
        split: true,
        collapsible: true,
        rootVisible: false,

        root: {
            expanded: true,
            children: [{
                text: '用户字典',
                leaf: false,
                expanded: true,
                children: [{
                    text: '测试一[test1]',
                    leaf: true
                }, {
                    text: '测试二[test2]',
                    leaf: true
                }]
            }, {
                text: '系统字典',
                leaf: false,
                expanded: true,
                children: [{
                    text: '日志类型[LogType]',
                    leaf: true
                }, {
                    text: '日志来源[LogSource]',
                    leaf: true
                }, ]
            }]
        },

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