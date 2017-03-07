
// ------------- 组织机构管理 -----------------

Ext.define("App.view.personnel.dept.List", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.deptlist',

    requires: [
        'App.view.personnel.dept.ListController'
    ],

    controller: 'deptlist',

    title: '组织机构管理',
    layout: 'border',
    closable: true,

    items: [{
        xtype: 'treepanel',
        region: 'west',
        width: 200,
        rootVisible: false,
        store: Ext.create('App.store.personnel.DeptTree')
    }, {
        xtype: 'panel',
        region: 'center',
        layout: 'center',
        items: [{
            xtype: 'form',
            border: true,
            frame: true,
            width: 500,
            height: 300,
            items: [{
                xtype: 'textfield',
                fieldLabel: '名称'
            }]
        }]
    }],

    tbar: [{
        xtype: 'button',
        text: '添加',
        iconCls: 'Add',
        handler: 'onAddClick'
    }, {
        xtype: 'button',
        text: '编辑',
        iconCls: 'Applicationedit',
        handler: 'onEditClick'
    }, {
        xtype: 'button',
        text: '刷新',
        iconCls: 'Arrowrefresh',
        handler: 'onRefreshClick'
    }, {
        xtype: 'button',
        text: '删除',
        iconCls: 'Delete',
        handler: 'onDeleteClick'
    }]
});