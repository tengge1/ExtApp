/*
* 主题工具类
*/

Ext.define('App.util.Theme', {
    extend: 'Ext.Base',

    getCurrentTheme: function () { // 获取当前主题
        var theme = Ext.util.Cookies.get('theme');
        if (theme == null) {
            theme = 'classic';
        }
        return theme;
    },

    setTheme: function (theme) { // 动态设置主题
        var href = 'ext/themes/theme-' + theme + '/theme-' + theme + '-all.css';
        var link = Ext.fly('theme');

        if (!link) {
            link = Ext.getHead().appendChild({
                tag: 'link',
                id: 'theme',
                rel: 'stylesheet',
                href: ''
            });
        };
        link.set({
            href: Ext.String.format(href, theme)
        });

        // 更新cookie
        Ext.util.Cookies.set('theme', theme);
    }
});