/**
* 日志列表
*/

Ext.define('App.view.sys.logs.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.loglist',

    requires: [
        'App.view.sys.logs.ListController'
    ],

    controller: 'loglist',

    title: '日志列表',
    closable: true,

    columns: [{
        xtype: 'rownumberer',
        width: 40
    }, {
        xtype: 'datecolumn',
        text: '时间',
        dataIndex: 'AddTime',
        format: 'Y-m-d H:i:s',
        width: 150
    }, {
        text: '标题',
        dataIndex: 'Title',
        width: 220
    }, {
        text: '类型',
        dataIndex: 'Type',
        renderer: 'renderType'
    }, {
        text: '来源',
        dataIndex: 'Source',
        renderer: 'renderSource'
    }, {
        text: '等级',
        dataIndex: 'Level',
        renderer: 'renderLevel'
    }, {
        text: '用户',
        dataIndex: 'AddUser'
    }, {
        text: 'IP',
        dataIndex: 'IP'
    }, {
        text: '备注',
        dataIndex: 'Memo',
        flex: 1
    }],

    tbar: [{
        xtype: 'searchform',

        items: [{
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
            xtype: 'textfield',
            fieldLabel: '关键词',
            labelWidth: 50,
            width: 200,
            name: 'keyword',
            emptyText: '标题/内容/用户',
            triggers: {
                search: {
                    weight: 1,
                    cls: Ext.baseCSSPrefix + 'form-search-trigger',
                    handler: 'onSearchClick'
                }
            }
        }]
    }],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        pageSize: 25,
        plugins: 'progressbarpager'
    }
});