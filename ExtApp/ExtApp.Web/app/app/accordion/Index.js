
Ext.define('App.app.accordion.Index', {
    extend: 'Ext.container.Container',
    alias: 'widget.index',

    requires: [
        'App.app.accordion.IndexController',
        'App.app.accordion.Menu',
        'App.plugin.TabCloseMenu',
        'App.app.accordion.Home'
    ],

    controller: 'index',

    layout: 'border',
    masked: {
        xtype: 'loadmask',
        message: '加载中...',
        indicator: true
    },

    defaults: {
        xtype: 'panel',
        title: false
    },

    items: [{
        region: 'north',
        height: 44,
        layout: 'hbox',
        border: false,
        style: {
            backgroundColor: '#112846'
        },
        defaults: {
            xtype: 'container',
            border: false,
            title: false,
            style: {
                backgroundColor: '#112846'
            },
            height: 44
        },
        items: [{
            html: '<span style="font-size:20px;line-height:42px;color:white;margin-left:20px;">ExtJs权限管理平台</span>',
            flex: 1
        }, {
            layout: 'hbox',
            defaults: {
                margin: '10 5 10 5'
            },
            items: [{
                xtype: 'combo',
                name: 'style',
                store: Ext.create('App.app.store.Style'),
                valueField: 'Code',
                displayField: 'Name',
                width: 120,
                editable: false,
                value: 'accordion',
                listeners: {
                    select: 'onStyleSelect'
                }
            }, {
                xtype: 'combo',
                name: 'theme',
                store: Ext.create('App.app.store.Theme'),
                valueField: 'Code',
                displayField: 'Name',
                width: 120,
                editable: false,
                listeners: {
                    select: 'onThemeSelect'
                }
            }, {
                xtype: 'button',
                text: '修改密码',
                listeners: {
                    click: 'onChangePwdClick'
                }
            }, {
                xtype: 'button',
                text: '退出',
                listeners: {
                    click: 'onLogoutClick'
                }
            }]
        }]
    }, {
        region: 'west',

        width: 200,
        collapsible: true,
        split: true,
        title: '系统菜单',
        layout: 'fit',
        items: [{
            xtype: 'mainmenu'
        }]
    }, {
        region: 'south',
        height: 30,
        title: false,
        html: '源码：<a href="https://github.com/tengge1/ExtApp" target="_blank">https://github.com/tengge1/ExtApp</a>',
        frame: true,
        border: false,
        style: {
            textAlign: 'center',
            border: 'none',
            padding: '5px 0 0 0',
            margin: 0
        }
    }, {
        id: 'tpMain',
        region: 'center',
        xtype: 'tabpanel',
        items: [{
            title: '主页',
            layout: 'fit',
            items: {
                xtype: 'home'
            }
        }],
        plugins: 'tabclosemenucn'
    }]
});