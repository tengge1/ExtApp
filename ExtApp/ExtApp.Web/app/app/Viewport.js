
Ext.define('App.app.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainviewport',

    requires: [
        'App.main.desktop.Index',
        'App.util.Config'
    ],

    layout: 'fit',

    initComponent: function () {
        this.callParent();

        // 判断是否登录
        var tool = Ext.create('util.config');
        if (tool.isLogin()) { // 已经登录
            var style = tool.getStyle();
            if (style == 'accordion') { // 折叠面板
                var view = Ext.create('App.app.accordion.Index');
                this.removeAll();
                this.add(view);
            } else if (style == 'desktop') { // 桌面样式
                new App.app.desktop.Index();
            } else {
                var view = Ext.create('App.app.accordion.Index');
                this.removeAll();
                this.add(view);
            }
        } else { // 没有登录
            var view = Ext.create('App.app.Login');
            this.removeAll();
            this.add(view);
        }
    }
});