
Ext.define("App.app.dept.List", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.deptlist',

    requires: [
        'App.widget.DeptSelect',
        'App.app.dept.ListController'
    ],

    controller: 'deptlist',

    title: '组织机构',
    layout: 'border',
    closable: true,

    items: [{
        xtype: 'treepanel',
        region: 'west',
        title: '组织机构',
        width: 200,
        rootVisible: true,
        collapsible: true,
        split: true,
        store: Ext.create('App.app.store.DeptTree'),
        tools: [{
            itemId: 'refresh',
            type: 'refresh',
            callback: 'refresh'
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
        }],

        listeners: {
            itemclick: 'onTreeItemClick'
        }
    }, {
        xtype: 'panel',
        region: 'center',
        layout: 'center',

        items: [{
            xtype: 'panel',
            border: true,
            frame: true,
            title: '机构信息',

            items: [{
                xtype: 'form',
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
                    name: 'ID'
                }, {
                    xtype: 'hidden',
                    name: 'PID'
                }, {
                    xtype: 'textfield',
                    name: 'PName',
                    fieldLabel: '上级',
                    readOnly: true
                }, {
                    xtype: 'textfield',
                    name: 'Name',
                    fieldLabel: '<span style="color:red;">*</span>名称',
                    allowBlank: false
                }, {
                    xtype: 'combo',
                    store: Ext.create('App.app.store.DeptType'),
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
            }],

            buttons: [{
                xtype: 'button',
                text: '保存',
                iconCls: 'Pagesave',
                handler: 'onSaveClick'
            }]
        }]
    }]
});