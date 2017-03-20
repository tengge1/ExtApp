
// ---------- 日志列表 -------------

Ext.define('App.view.core.logs.List', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.loglist',

    requires: [
        'App.view.core.logs.ListController'
    ],

    controller: 'loglist',

    title: '日志列表',
    closable: true,
    layout: 'fit',

    items: [{
        xtype: 'gridpanel',
        border: false,
        frame: false,

        columns: [{
            xtype: 'rownumberer',
            width: 40,
            titleAlign: 'center'
        }, {
            xtype: 'actioncolumn',
            iconCls: 'Applicationviewdetail',
            tooltip: '查看',
            width: 50,
            titleAlign: 'center',
            align: 'center',
            handler: 'onViewAction'
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
            dataIndex: 'Type',
            titleAlign: 'center',
            renderer: 'renderType'
        }, {
            text: '来源',
            dataIndex: 'Source',
            titleAlign: 'center',
            renderer: 'renderSource'
        }, {
            text: '等级',
            dataIndex: 'Level',
            renderer: 'renderLevel'
        }, {
            text: '用户',
            titleAlign: 'center',
            dataIndex: 'UserName'
        }, {
            text: 'IP',
            titleAlign: 'center',
            dataIndex: 'IP'
        }, {
            text: '备注',
            titleAlign: 'center',
            dataIndex: 'Comment',
            flex: 1
        }],
        tbar: [{
            xtype: 'searchform',

            items: [{
                xtype: 'textfield',
                fieldLabel: '查询',
                labelWidth: 50,
                width: 180,
                name: 'name',
                emptyText: '标题/内容'
            }, {
                xtype: 'combo',
                fieldLabel: '类型',
                width: 160,
                editable: false,
                name: 'type',
                value: '',
                store: [[
                    '',
                    '全部'
                ], [
                    '0',
                    '系统事件'
                ], [
                    '1',
                    '用户事件'
                ]]
            }, {
                xtype: 'combo',
                fieldLabel: '来源',
                width: 160,
                editable: false,
                name: 'source',
                value: '',
                store: [[
                    '',
                    '全部'
                ], [
                    '0',
                    'Web系统'
                ], [
                    '1',
                    '移动应用'
                ], [
                    '2',
                    '桌面客户端'
                ]]
            }, {
                xtype: 'combo',
                fieldLabel: '等级',
                width: 160,
                editable: false,
                name: 'level',
                value: '',
                store: [[
                    '',
                    '全部'
                ], [
                    '0',
                    '崩溃'
                ], [
                    '1',
                    '错误'
                ], [
                    '2',
                    '警告'
                ], [
                    '3',
                    '消息'
                ], [
                    '4',
                    '调试'
                ]]
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

        bbar: {
            xtype: 'pagingtoolbar',
            displayInfo: true,
            pageSize: 25,
            plugins: 'progressbarpager'
        }
    }]
});