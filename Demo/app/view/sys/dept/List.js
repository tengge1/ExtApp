/**
* 组织机构管理列表
*/

Ext.define("App.view.sys.dept.List", {
    extend: 'Ext.tree.Panel',
    alias: 'widget.deptlist',

    requires: [
        'App.view.sys.dept.ListController'
    ],

    controller: 'deptlist',

    title: '组织机构管理',
    closable: true,
    rootVisible: true,

    root: {
        text: '顶级机构',
        Name: '顶级机构',
        Status: 0,
        leaf: false,
        expanded: true,
        children: [{
            text: '中国移动',
            Name: '中国移动',
            Code: 'zgyd',
            Status: 0,
            leaf: false,
            expanded: true,
            children: [{
                text: '北京分部',
                Name: '北京分部',
                Status: 0,
                leaf: true
            }, {
                text: '上海分部',
                Name: '上海分部',
                Status: 0,
                leaf: true
            }]
        }, {
            text: '中国联通',
            Name: '中国联通',
            Code: 'zglt',
            Status: 0,
            leaf: true
        }]
    },

    default: {
        xtype: 'column'
    },

    columns: [{
        xtype: 'treecolumn',
        dataIndex: 'Name',
        text: '菜单节点',
        width: 200
    }, {
        dataIndex: 'Code',
        text: '编码'
    }, {
        dataIndex: 'Layer',
        text: '排序'
    }, {
        dataIndex: 'Status',
        text: '状态',
        renderer: 'renderStatus'
    }, {
        dataIndex: 'Memo',
        text: '备注',
        flex: 1
    }],

    listeners: {
        //beforeitemexpand: 'onTreeItemExpand'
    },

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
        text: '刷新',
        iconCls: 'Arrowrefresh',
        listeners: {
            click: 'onRefreshClick'
        }
    }, {
        xtype: 'button',
        text: '删除',
        iconCls: 'Delete',
        listeners: {
            click: 'onDeleteClick'
        }
    }]
});