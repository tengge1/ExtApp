
Ext.define('App.view.core.logs.View', {
    extend: 'Ext.window.Window',
    alias: 'widget.logview',

    title: '查看日志',
    closable: true,
    iconCls: 'Applicationviewdetail',
    layout: 'fit',
    width: 500,
    modal: true,
    maximizable: true,

    items: [{
        xtype: 'form',
        layout: 'column',
        defaults: {
            labelAlign: 'right',
            labelWidth: 50,
            margin: 3,
            columnWidth: 0.5
        },
        items: [{
            xtype: 'displayfield',
            name: 'AddTime',
            fieldLabel: '时间'
        }, {
            xtype: 'displayfield',
            name: 'Title',
            fieldLabel: '标题'
        }, {
            xtype: 'displayfield',
            name: 'Type',
            fieldLabel: '类型',
            renderer: function (value) { // 渲染类型
                if (value == 0) {
                    return '系统事件';
                } else if (value == 1) {
                    return '用户事件';
                } else {
                    return value;
                }
            }
        }, {
            xtype: 'displayfield',
            name: 'Source',
            fieldLabel: '来源',
            renderer: function (value) { // 渲染来源
                if (value == 0) {
                    return 'Web应用';
                } else if (value == 1) {
                    return '移动应用';
                } else if (value == 2) {
                    return '桌面客户端';
                } else {
                    return value;
                }
            }
        }, {
            xtype: 'displayfield',
            name: 'Level',
            fieldLabel: '等级',
            renderer: function (value) { // 渲染等级
                if (value == 0) {
                    return '崩溃';
                } else if (value == 1) {
                    return '错误';
                } else if (value == 2) {
                    return '警告';
                } else if (value == 3) {
                    return '消息';
                } else if (value == 4) {
                    return '调试';
                } else {
                    return value;
                }
            }
        }, {
            xtype: 'displayfield',
            name: 'UserName',
            fieldLabel: '用户'
        }, {
            xtype: 'displayfield',
            name: 'IP',
            fieldLabel: 'IP'
        }, {
            xtype: 'displayfield',
            name: 'Content',
            fieldLabel: '内容',
            columnWidth: 1,
            height: 50
        }, {
            xtype: 'displayfield',
            name: 'Comment',
            fieldLabel: '备注',
            columnWidth: 1,
            height: 50
        }]
    }]
});