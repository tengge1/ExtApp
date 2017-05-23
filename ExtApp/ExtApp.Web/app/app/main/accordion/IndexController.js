
Ext.define('App.main.accordion.IndexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.index',

    requires: [
        'App.util.Config',
        'App.main.ChangePwd'
    ],

    init: function () {
        var view = this.getView();

        // 选择样式
        var combo1 = view.down('combo[name=style]');
        var tool = Ext.create('util.config');
        var style = tool.getStyle();
        combo1.getStore().load({
            callback: function () {
                combo1.select(style);
            }
        });

        // 选择主题
        var combo2 = view.down('combo[name=theme]');
        var tool = Ext.create('App.util.Theme');
        var theme = tool.getCurrentTheme();
        combo2.getStore().load({
            callback: function () {
                combo2.setValue(theme);
            }
        });
    },

    onStyleSelect: function () {
        var view = this.getView();
        var tool = Ext.create('util.config');
        var combo = view.down('combo[name=style]');
        var value = combo.getValue();
        tool.setStyle(value);
        App.confirm('询问', '刷新页面后生效，是否刷新？', function () {
            window.location.reload();
        });
    },

    onThemeSelect: function () {
        var view = this.getView();
        var tool = Ext.create('App.util.Theme');
        var combo = view.down('combo[name=theme]');
        var value = combo.getValue();
        tool.setTheme(value);
    },

    onLogoutClick: function () {
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

    onChangePwdClick: function () {
        Ext.widget('changepwd').show();
    }
});