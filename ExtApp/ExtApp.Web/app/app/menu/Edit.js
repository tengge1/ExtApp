
Ext.define('App.app.menu.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.menuedit',

    requires: [
        'App.widget.MenuSelect',
        'App.app.menu.EditController'
    ],

    controller: 'menuedit',

    title: '编辑菜单',
    layout: 'fit',
    modal: true,
    iconCls: 'Applicationsidetree',

    items: {
        xtype: 'form',
        border: false,
        layout: 'form',
        defaults: {
            margin: 10
        },
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 50
        },
        items: [{
            xtype: 'hidden',
            name: 'ID',
            value: 0
        }, {
            xtype: 'menuselect',
            name: 'PID',
            fieldLabel: '<span style="color:red;">*</span>上级',
            allowBlank: false,
            emptyText: '请选择'
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: '名称',
            allowBlank: false
        }, {
            xtype: 'combo',
            name: 'UrlTypeID',
            store: Ext.create('App.app.store.UrlType'),
            valueField: 'ID',
            displayField: 'Name',
            fieldLabel: '链接类型',
            editable: false,
            emptyText: '请选择'
        }, {
            xtype: 'textfield',
            name: 'Url',
            fieldLabel: '类名/Url'
        }, {
            xtype: 'combo',
            name: 'OpenTypeID',
            store: Ext.create('App.app.store.OpenType'),
            valueField: 'ID',
            displayField: 'Name',
            fieldLabel: '打开方式',
            editable: false,
            emptyText: '请选择'
        }, {
            xtype: 'combo',
            name: 'IconTypeID',
            store: Ext.create('App.app.store.IconType'),
            valueField: 'ID',
            displayField: 'Name',
            fieldLabel: '图标类型',
            editable: false,
            emptyText: '请选择'
        }, {
            xtype: 'textfield',
            name: 'Icon',
            fieldLabel: '图标'
        }, {
            xtype: 'numberfield',
            name: 'Sort',
            fieldLabel: '排序',
            allowBlank: false,
            value: 0
        }, {
            xtype: 'combo',
            name: 'Status',
            store: [[
                1, '启用'
            ], [
                0, '禁用'
            ]],
            value: 1,
            fieldLabel: '状态',
            editable: false
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
