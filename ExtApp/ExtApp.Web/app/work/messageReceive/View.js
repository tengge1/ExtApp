
Ext.define('App.work.messageReceive.View', {
    extend: 'Ext.window.Window',
    alias: 'widget.messagereceiveview',

    title: '查看消息',
    modal: true,
    maximizable: true,
    layout: 'fit',
    iconCls: 'Email',

    items: {
        xtype: 'form',
        margin: 5,
        border: false,
        layout: 'form',

        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 60,
            margin: 5
        },
        items: [{
            xtype: 'hidden',
            name: 'ID',
            value: '0'
        }, {
            xtype: 'displayfield',
            name: 'SendTime',
            fieldLabel: '发送时间'
        }, {
            xtype: 'displayfield',
            name: 'AddUserName',
            fieldLabel: '发送人'
        }, {
            xtype: 'displayfield',
            name: 'TypeName',
            fieldLabel: '类型'
        }, {
            xtype: 'displayfield',
            name: 'Title',
            fieldLabel: '标题'
        }, {
            xtype: 'displayfield',
            name: 'Content',
            fieldLabel: '内容'
        }, {
            xtype: 'displayfield',
            name: 'Comment',
            fieldLabel: '备注'
        }]
    },

    buttons: [{
        text: '关闭',
        iconCls: 'Cancel',
        handler: function (sender) {
            sender.up('window').hide();
        }
    }]
});
