/* 系统设置控制器 */

Ext.define('App.view.main.desktop.SettingsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.settings',

    onOKClick: function () { // 点击确定
        var view = this.getView();
        if (view.selected) {
            view.desktop.setWallpaper(view.selected, view.stretch);
        }
        view.hide();
    },

    onCancelClick: function () { // 点击取消
        this.getView().close();
    }
});