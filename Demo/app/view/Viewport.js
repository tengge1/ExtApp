/**
* 主视图
*/

Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainviewport',

    requires: [
        'App.view.main.accordion.Index',
        'App.view.main.desktop.Index',
        'App.util.Config'
    ],

    layout: 'fit',

    initComponent: function () { // 根据是否登录判断显示哪个视图
        this.callParent();

        // 判断是否登录
        var tool = Ext.create('util.config');
        if (tool.isLogin()) { // 已经登录
            var style = tool.getStyle();
            if (style == 'accordion') { // 折叠面板
                var view = Ext.create('App.view.main.accordion.Index');
                this.removeAll();
                this.add(view);
            } else if (style == 'desktop') { // 桌面样式
                new App.view.main.desktop.Index();
            } else if (style == 'navigation') { // 导航样式
                var view = Ext.create('App.view.main.accordion.Index');
                this.removeAll();
                this.add(view);
            } else {
                var view = Ext.create('App.view.main.accordion.Index');
                this.removeAll();
                this.add(view);
            }
        } else { // 没有登录
            var view = Ext.create('App.view.main.Login');
            this.removeAll();
            this.add(view);
        }
    }
});