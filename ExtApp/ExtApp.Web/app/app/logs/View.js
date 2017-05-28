
Ext.define('App.app.logs.View', {
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
            name: 'TypeName',
            fieldLabel: '类型'
        }, {
            xtype: 'displayfield',
            name: 'SourceName',
            fieldLabel: '来源'
        }, {
            xtype: 'displayfield',
            name: 'LevelName',
            fieldLabel: '等级'
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