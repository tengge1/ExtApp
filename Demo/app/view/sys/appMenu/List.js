/**
* 系统菜单管理列表
*/

Ext.define("App.view.sys.appMenu.List", {
    extend: 'Ext.tree.Panel',
    alias: 'widget.appmenulist',

    requires: [
        'App.view.sys.appMenu.ListController'
    ],

    controller: 'appmenulist',

    title: '菜单管理',
    closable: true,
    rootVisible: true,

    root: {
        ID: 0,
        text: '顶级菜单',
        Name: '顶级菜单'
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
        dataIndex: 'UrlType',
        text: '链接类型',
        renderer: 'renderUrlType'
    }, {
        dataIndex: 'Url',
        text: '类或Url',
        width: 200
    }, {
        dataIndex: 'IconType',
        text: '图标类型',
        renderer: 'renderIconType'
    }, {
        dataIndex: 'Icon',
        text: 'css样式或Url',
        width: 150
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
        beforeitemexpand: 'onTreeItemExpand'
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
        text: '删除',
        iconCls: 'Delete',
        listeners: {
            click: 'onDeleteClick'
        }
    }]
});