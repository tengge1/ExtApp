
Ext.define('App.view.core.databaseBackup.List', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.databasebackuplist',

    requires: [
        'App.view.core.databaseBackup.ListController'
    ],

    controller: 'databasebackuplist',
    title: '数据库备份列表',
    closable: true,
    layout: 'fit',

    tbar: [{
        xtype: 'button',
        text: '备份',
        iconCls: 'Databasesave',
        handler: 'onSaveClick'
    }, {
        xtype: 'button',
        text: '还原',
        iconCls: 'Databaserefresh',
        handler: 'onRestoreClick'
    }, {
        xtype: 'button',
        text: '删除',
        iconCls: 'Databasedelete',
        handler: 'onDeleteClick'
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
                name: 'Name',
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
            xtype: 'rownumberer'
        }, {
            text: '名称',
            dataIndex: 'Name',
            width: 150
        }, {
            text: '文件名',
            dataIndex: 'FileName',
            width: 180
        }, {
            text: '备份人',
            dataIndex: 'AddUserName'
        }, {
            text: '备份时间',
            dataIndex: 'AddTime',
            width: 150
        }, {
            text: '是否当前',
            dataIndex: 'IsCurrent',
            renderer: function (value) {
                return value == 1 ? '是' : '否';
            }
        }, {
            text: '备注',
            dataIndex: 'Comment',
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