
Ext.define('App.view.personnel.user.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',

    requires: [
        'App.widget.DeptSelect',
        'App.view.personnel.user.EditController'
    ],

    controller: 'useredit',

    title: '编辑用户',
    width: 600,
    height: 340,
    modal: true,
    maximizable: true,
    layout: 'fit',
    iconCls: 'User',

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
            name: 'Username',
            fieldLabel: '<span style="color:red;">*</span>用户名',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'Password',
            fieldLabel: '<span style="color:red;">*</span>密码',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: '<span style="color:red;">*</span>姓名',
            allowBlank: false
        }, {
            xtype: 'combo',
            name: 'Sex',
            fieldLabel: '<span style="color:red;">*</span>性别',
            store: [[1, '男'], [2, '女']],
            editable: false,
            allowBlank: false,
            emptyText: '请选择'
        }, {
            xtype: 'deptselect',
            name: 'DeptID',
            fieldLabel: '<span style="color:red;">*</span>机构',
            allowBlank: false,
            emptyText: '请选择'
        }, {
            xtype: 'combo',
            name: 'RoleID',
            fieldLabel: '<span style="color:red;">*</span>角色',
            editable: false,
            store: Ext.create('App.store.authority.RoleAll'),
            valueField: 'ID',
            displayField: 'Name',
            allowBlank: false,
            emptyText: '请选择'
        }, {
            xtype: 'textfield',
            name: 'Duty',
            fieldLabel: '职责'
        }, {
            xtype: 'textfield',
            name: 'Phone',
            fieldLabel: '手机号'
        }, {
            xtype: 'textfield',
            name: 'Email',
            fieldLabel: '电子邮箱'
        }, {
            xtype: 'datefield',
            name: 'Birthday',
            fieldLabel: '出生日期',
            editable: false,
            emptyText: '请选择'
        }, {
            xtype: 'textfield',
            name: 'Address',
            fieldLabel: '地址'
        }, {
            xtype: 'numberfield',
            name: 'Sort',
            value: 0,
            fieldLabel: '排序'
        }, {
            xtype: 'combo',
            name: 'Status',
            fieldLabel: '状态',
            store: [[1, '启用'], [0, '禁用']],
            editable: false,
            allowBlank: false,
            value: 1
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
        listeners: {
            click: 'onSaveClick'
        }
    }, {
        text: '取消',
        iconCls: 'Cancel',
        listeners: {
            click: 'onCancelClick'
        }
    }]
});
