
Ext.define('App.view.main.desktop.SettingsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.settings',

    afterBasicRenderer: function () {
        var view = this.getView();

        // 样式
        var combo1 = view.down('combo[name=style]');
        var tool = Ext.create('util.config');
        var style = tool.getStyle();
        combo1.getStore().load({
            callback: function () {
                combo1.select(style);
            }
        });

        // 主题
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

    afterTreeRender: function () {
        var view = this.getView();
        var wallpaper = view.desktop.getWallpaper();
        if (wallpaper) {
            var tree = view.down('treepanel');
            var store = tree.getStore();
            var index = store.findBy(function (o) { return o.data.url == wallpaper });
            if (index > -1) {
                var id = store.getAt(index).data.id;
                tree.selectPath('/' + id);
            }
            var stretch = view.desktop.wallpaper.stretch;
            view.down('checkbox[name=stretch]').setValue(stretch);
        }
    },

    onTreeSelect: function () {
        var view = this.getView();
        var tree = view.down('treepanel');
        var selection = tree.getSelection();
        if (selection.length > 0) {
            var url = selection[0].data.url;
            if (url == '') {
                url = Ext.BLANK_IMAGE_URL;
            }
            view.down('wallpaper').setWallpaper(url);
        }
    },

    onOKClick: function () {
        var view = this.getView();

        var tree = view.down('treepanel');
        var selection = tree.getSelection();
        if (selection.length > 0) {
            var url = selection[0].data.url;
            if (url == '') {
                url = Ext.BLANK_IMAGE_URL;
            }
            var stretch = view.down('checkbox[name=stretch]').getValue();
            view.desktop.setWallpaper(url, stretch);
        }
        view.hide();
    },

    onCancelClick: function () {
        var view = this.getView();
        view.hide();
    }
});