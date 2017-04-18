
Ext.define('App.view.main.accordion.IndexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.index',

    requires: [
        'App.util.Config',
        'App.view.main.ChangePwd'
    ],

    init: function () {
        var view = this.getView();

        // 选择样式
        var combo = view.down('combo[name=style]');
        var tool = Ext.create('util.config');
        var style = tool.getStyle();
        combo.select(style);

        // 选择主题
        combo = view.down('combo[name=theme]');
        var tool = Ext.create('App.util.Theme');
        var theme = tool.getCurrentTheme();
        combo.getStore().load({
            callback: function () {
                combo.setValue(theme);
            }
        });
    },

    onStyleSelect: function () {
        var tool = Ext.create('util.config');
        var combo = Ext.ComponentQuery.query('index combo[name=style]')[0];
        var value = combo.getValue();
        tool.setStyle(value);
        window.location.reload();
    },

    onThemeSelect: function () {
        var tool = Ext.create('App.util.Theme');
        var combo = Ext.ComponentQuery.query('index combo[name=theme]')[0];
        var value = combo.getValue();
        tool.setTheme(value);
    },

    onLogoutClick: function () { // 点击注销按钮
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

    onChangePwdClick: function () { // 点击修改密码按钮
        Ext.widget('changepwd').show();
    }
});