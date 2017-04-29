
Ext.define('App.view.work.message.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.messageedit',

    requires: [
        'App.view.work.message.EditController'
    ],

    controller: 'messageedit',

    title: '编辑消息',
    width: 600,
    height: 340,
    modal: true,
    maximizable: true,
    layout: 'fit',
    iconCls: 'Mail',

    items: {
        xtype: 'form',
        margin: 5,
        border: false,
        layout: 'column',

        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 60,
            margin: 5,
            columnWidth: 0.5
        },
        items: [{
            xtype: 'hiddenfield',
            name: 'ID'
        }, {
            xtype: 'textfield',
            name: 'Receiver',
            fieldLabel: '<span style="color:red;">*</span>接收人',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'Title',
            fieldLabel: '标题'
        }, {
            xtype: 'textarea',
            name: 'Content',
            fieldLabel: '内容'
        }, {
            xtype: 'textarea',
            name: 'Comment',
            fieldLabel: '备注',
            columnWidth: 1
        }]
    },
    buttons: [{
        text: '保存',
        iconCls: 'Accept',
        handler: 'onSaveClick'
    }, {
        text: '取消',
        iconCls: 'Cancel',
        handler: 'onCancelClick'
    }]
});
