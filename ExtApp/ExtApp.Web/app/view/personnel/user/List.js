
Ext.define("App.view.personnel.user.List", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.userlist',

    requires: [
        'App.widget.DeptSelect',
        'App.view.personnel.user.ListController'
    ],

    controller: 'userlist',

    title: '用户管理',
    closable: true,
    layout: 'fit',

    tbar: [{
        xtype: 'button',
        text: '添加',
        iconCls: 'Add',
        listeners: {
            click: 'onAddClick'
        }
    }, {
        xtype: 'button',
        text: '编辑',
        iconCls: 'Applicationedit',
        listeners: {
            click: 'onEditClick'
        }
    }, {
        xtype: 'button',
        text: '删除',
        iconCls: 'Delete',
        listeners: {
            click: 'onDeleteClick'
        }
    }],

    items: [{
        xtype: 'gridpanel',
        border: false,

        tbar: [{
            xtype: 'searchform',

            items: [{
                xtype: 'textfield',
                fieldLabel: '查询',
                labelWidth: 50,
                width: 180,
                name: 'name',
                emptyText: '用户名/姓名'
            }, {
                xtype: 'deptselect',
                name: 'DeptID',
                fieldLabel: '机构',
                emptyText: '全部'
            }, {
                xtype: 'combo',
                name: 'RoleID',
                fieldLabel: '角色',
                width: 150,
                editable: false,
                store: Ext.create('App.store.authority.RoleAll'),
                valueField: 'ID',
                displayField: 'Name',
                emptyText: '全部'
            }, {
                xtype: 'combo',
                fieldLabel: '状态',
                name: 'Status',
                width: 130,
                store: [[
                    '1', '启用'
                ], [
                    '0', '禁用'
                ]],
                editable: false,
                emptyText: '全部'
            }, {
                xtype: 'button',
                text: '搜索',
                margin: '0 0 0 10',
                handler: 'onSearchClick'
            }, {
                xtype: 'button',
                text: '重置',
                margin: '0 0 0 10',
                handler: 'onResetClick'
            }]
        }],

        columns: [{
            xtype: 'rownumberer',
            width: 40
        }, {
            text: '用户名',
            dataIndex: 'Username'
        }, {
            text: '姓名',
            dataIndex: 'Name'
        }, {
            text: '性别',
            dataIndex: 'Sex',
            renderer: App.renderer.sex
        }, {
            text: '所属机构',
            dataIndex: 'DeptName'
        }, {
            text: '角色',
            dataIndex: 'RoleName'
        }, {
            text: '职责',
            dataIndex: 'Duty'
        }, {
            text: '手机',
            dataIndex: 'Phone'
        }, {
            text: '排序',
            dataIndex: 'Sort'
        }, {
            text: '状态',
            dataIndex: 'Status',
            renderer: App.renderer.status
        }, {
            text: '备注',
            dataIndex: 'Comment'
        }],

        bbar: {
            xtype: 'pagingtoolbar',
            displayInfo: true,
            pageSize: 25,
            plugins: 'progressbarpager'
        }
    }]
});