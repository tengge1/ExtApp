
Ext.define('App.view.personnel.dept.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.deptadd',

    requires: [
        'App.widget.DeptSelect',
        'App.view.personnel.dept.AddController'
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
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: '<span style="color:red;">*</span>名称',
            allowBlank: false
        }, {
            xtype: 'combo',
            store: [[
                0, '机构'
            ], [
                1, '区域'
            ]],
            name: 'TypeID',
            fieldLabel: '<span style="color:red;">*</span>类型',
            editable: false,
            allowBlank: false,
            emptyText: '请选择'
        }, {
            xtype: 'textfield',
            name: 'HeadID',
            fieldLabel: '负责人',
            disabled: true
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
