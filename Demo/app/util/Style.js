/*
* 框架样式工具类
*/

Ext.define('App.util.Style', {
    extend: 'Ext.Base',

    getCurrentStyle: function () { // 获取当前样式
        var style = Ext.util.Cookies.get('style');
        if (style == null) {
            style = 'accordion';
        }
        return style;
    },

    setStyle: function (style) { // 动态设置样式
        // 更新cookie
        Ext.util.Cookies.set('style', style);
    }
});