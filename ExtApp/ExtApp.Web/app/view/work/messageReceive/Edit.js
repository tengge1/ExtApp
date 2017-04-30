
Ext.define('App.view.work.message.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.messageedit',

    requires: [
        'App.view.work.message.EditController'
    ],

    controller: 'messageedit',

    title: '编辑消息',
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
            xtype: 'hidden',
            name: 'UserIDs'
        }, {
            xtype: 'textfield',
            name: 'UserNames',
            fieldLabel: '<span style="color:red;">*</span>接收人',
            readOnly: true,
            allowBlank: false,
            emptyText: '请选择',
            triggers: {
                select: {
                    cls: 'User trigger-no-shift',
                    floated: true,
                    hideOnReadOnly: false,
                    handler: 'onSelectUser'
                }
            },
            listeners: {
                focus: 'onSelectUser'
            }
        }, {
            xtype: 'textfield',
            name: 'Title',
            fieldLabel: '<span style="color:red;">*</span>标题',
            allowBlank: false
        }, {
            xtype: 'textarea',
            name: 'Content',
            fieldLabel: '内容'
        }, {
            xtype: 'textarea',
            name: 'Comment',
            fieldLabel: '备注'
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
