
// ------------- 组织机构管理 -----------------

Ext.define("App.view.personnel.dept.List", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.deptlist',

    requires: [
        'App.widget.DeptSelect',
        'App.view.personnel.dept.ListController'
    ],

    controller: 'deptlist',

    title: '组织机构管理',
    layout: 'border',
    closable: true,

    items: [{
        xtype: 'treepanel',
        region: 'west',
        title: '组织机构',
        width: 200,
        rootVisible: false,
        collapsible: true,
        split: true,
        store: Ext.create('App.store.personnel.DeptTree'),
        tools: [{
            itemId: 'refresh',
            type: 'refresh',
            callback: function (sender) {
                sender.up('treepanel').getStore().load();
            }
        }]
    }, {
        xtype: 'panel',
        region: 'center',
        layout: 'center',

        items: [{
            xtype: 'form',
            border: false,
            layout: 'form',
            border: true,
            frame: true,
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
                fieldLabel: '<span style="color:red;">*</span>负责人'
            }, {
                xtype: 'numberfield',
                name: 'Layer',
                fieldLabel: '排序',
                allowBlank: false,
                value: 0
            }, {
                xtype: 'combo',
                store: [[
                    0, '启用'
                ], [
                    -1, '禁用'
                ]],
                name: 'Status',
                value: 0,
                editable: false,
                fieldLabel: '状态'
            }, {
                xtype: 'textarea',
                name: 'Comment',
                fieldLabel: '备注'
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
        text: '删除',
        iconCls: 'Delete',
        handler: 'onDeleteClick'
    }, {
        xtype: 'button',
        text: '保存',
        iconCls: 'Pagesave',
        handler: ''
    }]
});