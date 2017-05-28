
Ext.define('App.app.role.Auth', {
    extend: 'Ext.window.Window',
    alias: 'widget.roleauth',

    requires: [
        'App.app.role.AuthController'
    ],

    controller: 'roleauth',

    title: '编辑权限',
    iconCls: 'Group',
    modal: true,
    layout: 'fit',
    width: 250,
    height: 380,

    items: [{
        xtype: 'hidden',
        name: 'ID'
    }, {
        xtype: 'tabpanel',
        autoScroll: true,
        items: [{
            xtype: 'treepanel',
            title: '访问权限',
            rootVisible: true,
            store: Ext.create('App.app.store.RoleMenuTree'),
            listeners: {
                checkchange: 'onCheckChange'
            }
        }]
    }],

    buttons: [{
        text: '确定',
        iconCls: 'Accept',
        handler: 'onOKClick'
    }, {
        text: '取消',
        iconCls: 'Cancel',
        handler: 'onCancelClick'
    }]
});