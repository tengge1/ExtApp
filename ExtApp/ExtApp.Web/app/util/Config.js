/*
* 配置类
*/

Ext.define('App.util.Config', {
    extend: 'Ext.Base',
    alias: 'util.config',

    get: function (name) { // 获取配置
        return Ext.util.Cookies.get(name);
    },

    set: function (name, config) { // 写入配置
        Ext.util.Cookies.set(name, config);
    },

    getStyle: function () { // 获取框架样式
        var style = this.get('__style');
        if (style == null) {
            style = 'accordion';
            this.set('__style', style);
        }
        return style;
    },

    setStyle: function (style) { // 设置框架样式
        this.set('__style', style);
    },

    getTheme: function () { // 获取框架主题
        var theme = this.get('__theme');
        if (theme == null) {
            theme = 'classic';
            this.set('__theme', theme);
        }
        return theme;
    },

    setTheme: function (theme) { // 设置框架主题
        this.set('__theme', theme);
    },

    getState() { // 获取当前状态（login-已经登录，nologin-没有登录）
        return this.get('__state');
    },

    setState(state) { // 设置当前状态
        this.set('__state', state);
    },

    isLogin() { // 判断是否登录
        if (this.getState() == 'login') {
            return true;
        }
        return false;
    }
});