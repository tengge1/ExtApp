/**
* 用户列表
*/

Ext.define("App.view.sys.user.List", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    requires: [
        'App.view.sys.user.ListController',
        'App.plugin.ProgressBarPager'
    ],

    controller: 'userlist',

    title: '用户管理',
    closable: true,

    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '用户名',
        dataIndex: 'Username'
    }, {
        text: '姓名',
        dataIndex: 'Name'
    }, {
        text: '性别',
        dataIndex: 'Sex',
        renderer: 'renderSex'
    }, {
        text: '角色',
        dataIndex: 'RoleName'
    }, {
        text: '所属机构',
        dataIndex: 'DeptName'
    }, {
        text: '排序',
        dataIndex: 'Layer'
    }, {
        text: '备注',
        dataIndex: 'Memo',
        flex: 1
    }],

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

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        pageSize: 25,
        plugins: 'progressbarpager'
    }
});