
Ext.define('App.view.main.desktop.SettingsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.settings',

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