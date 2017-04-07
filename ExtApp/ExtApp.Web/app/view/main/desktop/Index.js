/**
* 桌面样式
*/

Ext.define('App.view.main.desktop.Index', {
    extend: 'Ext.ux.desktop.App',

    requires: [ // 引入js文件
        'Ext.ux.desktop.ShortcutModel',
        'App.view.main.desktop.Notepad',
        'App.view.main.desktop.BogusMenuModule',
        'App.view.main.desktop.BogusModule',
        'App.view.main.desktop.Settings'
    ],

    getModules: function () { // 获取模块
        return [
            new App.view.main.desktop.Notepad(),
            new App.view.main.desktop.BogusMenuModule(),
            new App.view.main.desktop.BogusModule()
        ];
    },

    getDesktopConfig: function () { // 获取桌面设置
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {

            contextMenuItems: [{
                text: '个性化设置',
                handler: me.onSettings, scope: me
            }],

            shortcuts: Ext.create('Ext.data.Store', { // 桌面快捷方式
                model: 'Ext.ux.desktop.ShortcutModel',
                data: [{
                    name: '记事本',
                    iconCls: 'notepad-shortcut',
                    //module: 'notepad',
                }]
            }),

            wallpaper: '/images/wallpapers/Blue-Sencha.jpg', // 桌面背景

            wallpaperStretch: false // 背景拉伸
        });
    },

    getStartConfig: function () { // 开始菜单
        var me = this, ret = me.callParent();
        return Ext.apply(ret, {
            title: '管理员',
            iconCls: 'user',
            height: 300,
            toolConfig: {
                width: 100,
                items: [
                    {
                        text: '设置',
                        iconCls: 'settings',
                        handler: me.onSettings,
                        scope: me
                    },
                    '-',
                    {
                        text: '注销',
                        iconCls: 'logout',
                        handler: me.onLogout,
                        scope: me
                    }
                ]
            }
        });
    },

    getTaskbarConfig: function () { // 任务栏

        var ret = this.callParent();
        return Ext.apply(ret, {
            startBtnText: '开始',
            quickStart: [{ // 快捷启动
                name: '记事本',
                iconCls: 'notepad-shortcut',
                module: 'notepad'
            }],
            trayItems: [{ // 托盘区
                xtype: 'trayclock',
                flex: 1
            }]
        });
    },

    onLogout: function () { // 注销
        Ext.Msg.confirm('消息', '是否注销？', function (btn) {
            if (btn == 'yes') {
                // 先清空cookies
                Ext.util.Cookies.clear('username');

                // 刷新页面
                window.location.reload();
            }
        });
    },

    onSettings: function () { // 个性化设置
        var dlg = new App.view.main.desktop.Settings({
            desktop: this.desktop
        });
        dlg.show();
    }
});
