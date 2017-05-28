
Ext.define('App.app.desktop.Index', {
    extend: 'Ext.ux.desktop.App',
    alias: 'widget.extappdesktop',

    requires: [
        'Ext.ux.desktop.ShortcutModel',
        'App.app.desktop.Settings'
    ],

    init: function () {
        var me = this;
        me.callParent();

        // 动态填充菜单
        var desktop = me.desktop;
        var taskbar = desktop.taskbar;
        var startMenu = taskbar.startMenu;

        App.get('/api/Menu/List', function (data) {
            var list = JSON.parse(data);
            if (list.Code == 301) { // 无权限
                window.location = 'desktop.html?cls=App.app.Login'
                return;
            }
            var tree = {
                text: '根节点',
                menu: []
            };
            me.createMenuTree(tree, 0, list.Items);
            for (var i = 0; i < tree.menu.length; i++) {
                var item = tree.menu[i];
                startMenu.add(item);
            }
        });
    },

    createMenuTree: function (node, pid, list) { // 创建开始菜单树
        var list1;
        if (pid == 0) { // 根节点
            list1 = list.filter(function (o) { return o.PMenu == null; });
        } else { // 下级节点
            list1 = list.filter(function (o) { return o.PMenu != null && o.PMenu.ID == pid });
        }
        for (var i = 0; i < list1.length; i++) {
            var item = list1[i];
            var node1 = {
                text: item.Name,
                iconCls: item.Icon,
                app: this,
                data: item,
                handler: function () {
                    this.config.app.onStartMenuClick(this.config.data);
                }
            };
            if (list.filter(function (o) { return o.PMenu != null && o.PMenu.ID == item.ID; }).length > 0) { // 有下级节点
                node1.menu = [];
                this.createMenuTree(node1, item.ID, list);
            }
            node.menu.push(node1);
        }
    },

    onStartMenuClick: function (data) { // 点击开始菜单中的菜单
        var desktop = this.desktop;

        // 获取菜单数据
        var name = data.Name;
        var url = data.Url;
        var icon = data.Icon;
        if (url == undefined || url == null || url == '') {
            App.notify('消息', '该功能开发中...');
            return;
        }

        // 创建相应类
        var p = Ext.create(url, {
            header: false,
            border: false
        });
        var win = desktop.createWindow({
            title: name,
            iconCls: icon,
            width: 800,
            height: 450,
            layout: 'fit',
            items: [p]
        });
        win.show();
    },

    getDesktopConfig: function () { // 获取桌面设置
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {

            contextMenuItems: [{
                text: '个性化设置',
                handler: me.onSettings, scope: me
            }],

            //shortcuts: Ext.create('Ext.data.Store', { // 桌面快捷方式
            //    model: 'Ext.ux.desktop.ShortcutModel',
            //    data: [{
            //        name: '记事本',
            //        iconCls: 'notepad-shortcut'
            //    }]
            //}),

            wallpaper: '/images/wallpapers/Blue-Sencha.jpg', // 桌面背景

            wallpaperStretch: true // 背景拉伸
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
                items: [{
                    text: '设置',
                    iconCls: 'settings',
                    handler: me.onSettings,
                    scope: me
                }, '-', {
                    text: '注销',
                    iconCls: 'logout',
                    handler: me.onLogout,
                    scope: me
                }]
            }
        });
    },

    getTaskbarConfig: function () { // 任务栏

        var ret = this.callParent();
        return Ext.apply(ret, {
            startBtnText: '开始',
            //quickStart: [{ // 快捷启动
            //    name: '记事本',
            //    iconCls: 'notepad-shortcut',
            //    module: 'notepad'
            //}],
            trayItems: [{ // 托盘区
                xtype: 'trayclock',
                flex: 1
            }]
        });
    },

    onLogout: function () { // 注销
        App.confirm('消息', '是否注销？', function () {
            var config = Ext.create('util.config');
            App.post('/api/Login/Logout', function (r) {
                var obj = JSON.parse(r);
                if (obj.Code == 200) {
                    config.setState('nologin');
                    window.location.reload();
                }
            });
        });
    },

    onSettings: function () { // 个性化设置
        var dlg = new App.app.desktop.Settings({
            desktop: this.desktop
        });
        dlg.show();
    }
});
