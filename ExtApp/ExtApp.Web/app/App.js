
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

// 扩展App的常用方法
var App = App || {};
Ext.apply(App, {

    query: function (xtype) {
        var list = Ext.ComponentQuery.query(xtype);
        if (list.length == 0) {
            return null;
        }
        return list[0];
    },

    alert: function (title, msg) { // 消息
        Ext.Msg.alert(title, msg);
    },

    notify: function (title, msg) { // 提醒
        var win = Ext.create('App.widget.Notify', {
            title: title,
            html: msg
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

    get: function (url, callback) { // get提交
        Ext.Ajax.request({
            url: url,
            method: 'GET',
            success: function (response, opts) {
                var data = response.responseText;
                if (typeof (callback) == 'function') {
                    callback(data);
                }
            },
            failure: function (response, opts) {
                Ext.Msg.alert('错误', response.statusText);
            }
        });
    },

    post: function (url, params, callback) { // post提交
        Ext.Ajax.request({
            url: url,
            method: 'POST',
            params: typeof (params) == 'function' ? null : params, // 验证第二个参数是post参数还是回调函数
            success: function (response, opts) {
                var data = response.responseText;
                if (typeof (params) == 'function') { // 第二个参数是回调函数
                    params(data);
                } else if (typeof (callback) == 'function') { // 第三个参数是回调函数
                    callback(data)
                }
            },
            failure: function (response, opts) {
                Ext.Msg.alert('错误', response.statusText);
            }
        });
    },

    printStoreData: function (store) { // 输出Store中的数据，测试用
        var arr = new Array();
        store.data.each(function (i) {
            arr.push(i.data);
        })
        console.log(JSON.stringify(arr));
    },

    renderer: { // 渲染器
        status: Ext.create('App.renderer.StatusRenderer').render, // 渲染状态
        sex: Ext.create('App.renderer.SexRenderer').render // 渲染性别
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