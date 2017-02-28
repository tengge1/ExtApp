/**
* 日志控制器
*/

Ext.define('App.view.sys.logs.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loglist',

    requires: [
        'App.store.sys.Log'
    ],

    init: function () {
        var view = this.getView();
        var store = Ext.create('store.loglist');
        view.setStore(store);
        view.down('pagingtoolbar').setStore(store);
        store.reload();
        this.getView().down('pagingtoolbar').moveFirst();
    },

    onSearchClick: function () { // 搜索
        var view = this.getView();
        var values = view.down('form').getForm().getValues();
        var store = view.getStore();
        store.load({
            params: values
        });
    },

    renderType: function (value) { // 渲染类型
        if (value == 0) {
            return '系统事件';
        } else if (value == 1) {
            return '用户事件';
        } else {
            return value;
        }
    },

    renderSource: function (value) { // 渲染来源
        if (value == 0) {
            return 'Web应用';
        } else if (value == 1) {
            return '移动应用';
        } else if (value == 2) {
            return '桌面客户端';
        } else {
            return value;
        }
    },

    renderLevel: function (value) { // 渲染等级
        if (value == 0) {
            return '崩溃';
        } else if (value == 1) {
            return '错误';
        } else if (value == 2) {
            return '警告';
        } else if (value == 3) {
            return '消息';
        } else if (value == 4) {
            return '调试';
        } else {
            return value;
        }
    }
});