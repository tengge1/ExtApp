
Ext.define('App.app.dept.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.deptadd',

    requires: [
        'App.widget.DeptSelect',
        'App.app.dept.AddController'
    ],

    controller: 'deptadd',

    title: '添加机构',
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
            xtype: 'deptselect',
            name: 'PID',
            fieldLabel: '<span style="color:red;">*</span>上级',
            allowBlank: false,
            emptyText: '请选择'
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: '<span style="color:red;">*</span>名称',
            allowBlank: false
        }, {
            xtype: 'combo',
            store: Ext.create('App.store.dic.DeptType'),
            name: 'TypeID',
            valueField: 'ID',
            displayField: 'Name',
            fieldLabel: '<span style="color:red;">*</span>类型',
            editable: false,
            allowBlank: false,
            emptyText: '请选择'
        }, {
            xtype: 'numberfield',
            name: 'Sort',
            fieldLabel: '排序',
            allowBlank: false,
            value: 0
        }, {
            xtype: 'combo',
            store: [[
                1, '启用'
            ], [
                0, '禁用'
            ]],
            name: 'Status',
            value: 1,
            editable: false,
            fieldLabel: '状态'
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
