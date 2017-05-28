
Ext.define('App.app.logs.List', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.loglist',

    requires: [
        'App.app.logs.ListController'
    ],

    controller: 'loglist',

    title: '日志列表',
    closable: true,
    layout: 'fit',

    tbar: [{
        xtype: 'button',
        text: '查看',
        iconCls: 'Applicationviewdetail',
        handler: 'onViewClick'
    }, {
        xtype: 'button',
        text: '清空',
        iconCls: 'Delete',
        handler: 'onClearClick'
    }],

    items: [{
        xtype: 'gridpanel',
        border: false,
        frame: false,

        tbar: [{
            xtype: 'searchform',

            items: [{
                xtype: 'textfield',
                fieldLabel: '名称',
                width: 160,
                name: 'name',
                emptyText: '标题'
            }, {
                xtype: 'combo',
                fieldLabel: '类型',
                width: 160,
                editable: false,
                name: 'typeID',
                valueField: 'ID',
                displayField: 'Name',
                store: Ext.create('App.app.store.LogType'),
                emptyText: '全部'
            }, {
                xtype: 'combo',
                fieldLabel: '来源',
                width: 160,
                editable: false,
                name: 'sourceID',
                valueField: 'ID',
                displayField: 'Name',
                store: Ext.create('App.app.store.LogSource'),
                emptyText: '全部'
            }, {
                xtype: 'combo',
                fieldLabel: '等级',
                width: 160,
                editable: false,
                name: 'levelID',
                valueField: 'ID',
                displayField: 'Name',
                store: Ext.create('App.app.store.LogLevel'),
                emptyText: '全部'
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
            width: 40,
            titleAlign: 'center'
        }, {
            text: '时间',
            dataIndex: 'AddTime',
            titleAlign: 'center',
            width: 150
        }, {
            text: '标题',
            dataIndex: 'Title',
            titleAlign: 'center',
            width: 220
        }, {
            text: '类型',
            dataIndex: 'TypeName',
            titleAlign: 'center'
        }, {
            text: '来源',
            dataIndex: 'SourceName',
            titleAlign: 'center'
        }, {
            text: '等级',
            dataIndex: 'LevelName',
            titleAlign: 'center'
        }, {
            text: '用户',
            titleAlign: 'center',
            dataIndex: 'UserName',
            titleAlign: 'center'
        }, {
            text: 'IP',
            titleAlign: 'center',
            dataIndex: 'IP',
            titleAlign: 'center'
        }, {
            text: '备注',
            titleAlign: 'center',
            dataIndex: 'Comment',
            flex: 1
        }],

        bbar: {
            xtype: 'pagingtoolbar',
            displayInfo: true,
            pageSize: 25,
            plugins: 'progressbarpager'
        },

        listeners: {
            celldblclick: 'onCellDblClick'
        },
    }]
});