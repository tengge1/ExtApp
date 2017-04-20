
Ext.define('App.view.core.dic.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.dicedit',

    requires: [
        'App.view.core.dic.EditController'
    ],

    title: '编辑字典',
    controller: 'dicedit',
    layout: 'fit',
    modal: true,

    items: [{
        xtype: 'form',
        layout: 'form',
        border: false,
        defaults: {
            margin: 10
        },
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 40
        },
        items: [{
            xtype: 'hidden',
            name: 'ID',
            value: 0
        }, {
            xtype: 'textfield',
            name: 'Code',
            fieldLabel: '编码',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: '名称',
            allowBlank: false
        }, {
            xtype: 'combo',
            name: 'TypeID',
            valueField: 'ID',
            displayField: 'Name',
            fieldLabel: '类型',
            store: Ext.create('App.store.dic.DicType'),
            allowBlank: false,
            emptyText: '请选择',
            editable: false
        }, {
            xtype: 'textfield',
            name: 'Sort',
            fieldLabel: '排序',
            value: '0'
        }, {
            xtype: 'combo',
            name: 'Status',
            fieldLabel: '状态',
            store: [[
                1, '启用'
            ], [
                0, '禁用'
            ]],
            value: 1,
            editable: false
        }, {
            xtype: 'textarea',
            name: 'Comment',
            fieldLabel: '备注'
        }]
    }],

    buttons: [{
        text: '确定',
        iconCls: 'Accept',
        handler: 'onSaveClick'
    }, {
        text: '取消',
        iconCls: 'Cancel',
        handler: 'onCancelClick'
    }]
});