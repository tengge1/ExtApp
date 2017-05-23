
Ext.define('App.main.desktop.Settings', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.ux.desktop.Wallpaper',
         'App.main.desktop.SettingsController'
    ],

    layout: 'fit',
    title: '系统设置',
    iconCls: 'settings',
    modal: true,
    width: 640,
    height: 480,
    border: false,
    controller: 'settings',

    items: [{
        xtype: 'tabpanel',
        items: [{
            xtype: 'panel',
            title: '基本设置',
            layout: 'vbox',
            defaults: {
                margin: 5
            },
            items: [{
                xtype: 'combo',
                name: 'style',
                store: Ext.create('App.store.dic.Style'),
                valueField: 'Code',
                displayField: 'Name',
                fieldLabel: '样式',
                labelWidth: 60,
                labelAlign: 'right',
                editable: false,
                value: 'desktop',
                listeners: {
                    select: 'onStyleSelect'
                }
            }, {
                xtype: 'combo',
                name: 'theme',
                store: Ext.create('App.store.dic.Theme'),
                valueField: 'Code',
                displayField: 'Name',
                fieldLabel: '主题',
                labelWidth: 60,
                labelAlign: 'right',
                editable: false,
                listeners: {
                    select: 'onThemeSelect'
                }
            }],
            listeners: {
                afterrender: {
                    fn: 'afterBasicRenderer',
                    delay: 100
                }
            }
        }, {
            title: '壁纸设置',
            layout: 'anchor',
            items: [{
                anchor: '0 -30',
                border: false,
                layout: 'border',
                items: [{
                    xtype: 'treepanel',
                    store: Ext.create('App.main.desktop.Wallpaper'),
                    title: '桌面背景',
                    rootVisible: false,
                    lines: false,
                    scrollable: true,
                    width: 150,
                    region: 'west',
                    split: true,
                    minWidth: 100,
                    listeners: {
                        afterrender: {
                            fn: 'afterTreeRender',
                            delay: 100
                        },
                        select: 'onTreeSelect'
                    }
                }, {
                    xtype: 'panel',
                    title: '预览',
                    region: 'center',
                    layout: 'fit',
                    items: [{
                        xtype: 'wallpaper'
                    }]
                }]
            }, {
                xtype: 'checkbox',
                name: 'stretch',
                boxLabel: '拉伸适应屏幕'
            }]
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
