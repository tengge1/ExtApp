/**
* 角色列表
*/

Ext.define('App.view.sys.role.List', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.rolelist',

    requires: [
        'App.view.sys.role.ListController',
        'App.plugin.ProgressBarPager',
        'App.widget.SearchForm'
    ],

    controller: 'rolelist',
    title: '角色列表',
    closable: true,
    layout: 'fit',

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

    items: [{
        xtype: 'gridpanel',
        border: false,

        tbar: [{
            xtype: 'searchform',

            items: [{
                xtype: 'textfield',
                fieldLabel: '查询',
                labelWidth: 50,
                width: 180,
                name: 'name',
                emptyText: '编码/名称'
            }, {
                xtype: 'combo',
                fieldLabel: '状态',
                name: 'Status',
                width: 130,
                store: [[
                    '0', '全部'
                ], [
                    '1', '启用'
                ], [
                    '-1', '禁用'
                ]],
                value: 0,
                editable: false
            }, {
                xtype: 'button',
                text: '搜索',
                margin: '0 0 0 10',
                handler: 'onSearchClick'
            }, {
                xtype: 'button',
                text: '重置',
                margin: '0 0 0 10',
                handler: 'onResetClick'
            }]
        }],

        columns: [{
            xtype: 'rownumberer'
        }, {
            text: '编码',
            dataIndex: 'Code'
        }, {
            text: '名称',
            dataIndex: 'Name'
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

        listeners: {
            rowdblclick: 'onEditClick'
        },

        bbar: {
            xtype: 'pagingtoolbar',
            displayInfo: true,
            pageSize: 25,
            plugins: 'progressbarpager'
        }
    }]
});