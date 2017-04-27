
Ext.define('App.view.workflow.design.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.workflowedit',

    requires: [
        'App.view.workflow.design.EditController'
    ],

    controller: 'workflowedit',

    title: '编辑工作流',
    modal: true,
    maximizable: true,
    layout: 'fit',

    items: {
        xtype: 'form',
        border: false,
        layout: 'form',

        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 60,
            margin: 5
        },
        items: [{
            xtype: 'hiddenfield',
            name: 'ID'
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: '<span style="color:red;">*</span>名称',
            allowBlank: false
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
