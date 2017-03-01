/**
* ExtApp应用程序
*/

// 配置自动加载
Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true,
    paths: {
        Ext: '/ext',
        App: '/app'
    }
});

// 引入常用js文件
Ext.require('App.plugin.ProgressBarPager');
Ext.require('App.widget.SearchForm');

// Ext方法扩展
Ext.apply(Ext, {

    alert: function (title, msg) { // 消息
        Ext.Msg.alert(title, msg);
    },

    notify: function (title, msg) { // 提醒
        var win = Ext.create('Ext.ux.window.Notification', {
            title: title,
            width: 180,
            height: 100,
            position: 'br',
            manager: Ext.ComponentQuery.query('mainviewport')[0],
            slideInDuration: 800,
            slideBackDuration: 300,
            autoCloseDelay: 3000,
            slideInAnimation: 'bounceOut',
            slideBackAnimation: 'easeIn',
            spacing: 10,
            html: msg,
            bodyPadding: 5
        });
        win.show();
    },

    confirm: function (title, msg, callback) { // 确认
        Ext.Msg.confirm(title, msg, function (btn, value, opts) {
            if (btn == 'yes') {
                if (typeof (callback) == 'function') {
                    callback();
                }
            }
        });
    },

    printStoreData: function (store) { // 输出Store中的数据，测试用
        var arr = new Array();
        store.data.each(function (i) {
            arr.push(i.data);
        })
        console.log(JSON.stringify(arr));
    }
});

// 获取当前系统配置
var tool = Ext.create('App.util.Theme');
var theme = tool.getCurrentTheme();
tool.setTheme(theme);

// 启动应用程序
Ext.application({
    name: 'ExtApp',
    appFolder: '/app',
    autoCreateViewport: 'App.view.Viewport'
});