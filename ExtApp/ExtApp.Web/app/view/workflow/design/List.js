
Ext.define("App.view.workflow.design.List", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.workflowlist',

    requires: [
        'App.view.workflow.design.ListController'
    ],

    controller: 'workflowlist',

    title: '工作流管理',
    closable: true,
    layout: 'fit',

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
    }, {
        xtype: 'button',
        text: '设计',
        iconCls: 'Chartorganisation',
        handler: 'onDesignClick'
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
                emptyText: '名称'
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
            xtype: 'rownumberer',
            width: 40
        }, {
            text: '名称',
            dataIndex: 'Name',
            width: 180
        }, {
            text: '版本',
            dataIndex: 'Version'
        }, {
            text: '添加人',
            dataIndex: 'AddUserName'
        }, {
            text: '添加时间',
            dataIndex: 'AddTime',
            width: 150
        }, {
            text: '备注',
            dataIndex: 'Comment',
            flex: 1
        }],

        bbar: {
            xtype: 'pagingtoolbar',
            displayInfo: true,
            pageSize: 25,
            plugins: 'progressbarpager'
        }
    }]
});