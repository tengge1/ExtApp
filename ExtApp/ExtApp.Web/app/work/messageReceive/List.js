
Ext.define("App.view.work.messageReceive.List", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.messagereceivelist',

    requires: [
        'App.widget.DeptSelect',
        'App.view.work.messageReceive.ListController'
    ],

    controller: 'messagereceivelist',

    title: '接收消息',
    closable: true,
    layout: 'fit',

    tbar: [{
        xtype: 'button',
        text: '查看',
        iconCls: 'Applicationviewdetail',
        handler: 'onViewClick'
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
                emptyText: '标题/内容'
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
            text: '类型',
            dataIndex: 'TypeName'
        }, {
            text: '标题',
            dataIndex: 'Title',
            width: 220
        }, {
            text: '发送人',
            dataIndex: 'AddUserName'
        }, {
            text: '发送时间',
            dataIndex: 'SendTime',
            width: 150
        }, {
            text: '状态',
            dataIndex: 'StatusName'
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