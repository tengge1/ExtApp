
Ext.define('App.view.main.desktop.Settings', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.ux.desktop.Wallpaper',
        'App.view.main.desktop.Wallpaper',
        // 'App.view.main.desktop.SettingsController'
    ],

    layout: 'anchor',
    title: '设置',
    modal: true,
    width: 640,
    height: 480,
    border: false,
    // controller: 'settings',

    items: [{
        anchor: '0 -30',
        border: false,
        layout: 'border',
        items: [{
            title: '桌面背景',
            rootVisible: false,
            lines: false,
            scrollable: true,
            width: 150,
            region: 'west',
            split: true,
            minWidth: 100,
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
        boxLabel: '拉伸适应屏幕'
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
