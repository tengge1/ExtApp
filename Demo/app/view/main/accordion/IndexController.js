/**
* 首页视图控制器
*/

Ext.define('App.view.main.accordion.IndexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.index',

    requires: [
        'App.util.Config',
        'App.view.main.ChangePwd'
    ],

    init: function () { // 页面加载后运行
        // 选择样式
        var combo = Ext.ComponentQuery.query('index combo[name=style]')[0];
        var tool = Ext.create('util.config');
        var style = tool.getStyle();
        combo.select(style);

        // 选择主题
        var combo = Ext.ComponentQuery.query('index combo[name=theme]')[0];
        var tool = Ext.create('App.util.Theme');
        var theme = tool.getCurrentTheme();
        combo.select(theme);
    },

    onStyleSelect: function () { // 组合框选择框架样式
        var tool = Ext.create('util.config');
        var combo = Ext.ComponentQuery.query('index combo[name=style]')[0];
        var value = combo.getValue();
        tool.setStyle(value);
        window.location.reload();
    },

    onThemeSelect: function () { // 组合框选择主题
        var tool = Ext.create('App.util.Theme');
        var combo = Ext.ComponentQuery.query('index combo[name=theme]')[0];
        var value = combo.getValue();
        tool.setTheme(value);
    },

    onLogoutClick: function () { // 点击注销按钮
        Ext.Msg.confirm('消息', '是否注销？', function (btn) {
            if (btn == 'yes') {
                var config = Ext.create('util.config');
                config.setState('nologin');
                window.location.reload();
            }
        });
    },

    onChangePwdClick: function () { // 点击修改密码按钮
        Ext.widget('changepwd').show();
    }
});