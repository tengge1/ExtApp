
Ext.define('App.view.main.desktop.SettingsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.settings',

    requires: [
        'Ext.ux.desktop.Wallpaper',
        'App.view.main.desktop.Wallpaper'
    ],

    init: function () {
        //var me = this;
        //var view = me.getView();

        //me.selected = view.desktop.getWallpaper();
        //me.stretch = view.desktop.wallpaper.stretch;

        //me.preview = Ext.create('widget.wallpaper');
        //me.preview.setWallpaper(me.selected);
        //me.tree = me.createTree();

        //view.items = [{
        //    anchor: '0 -30',
        //    border: false,
        //    layout: 'border',
        //    items: [
        //        me.tree,
        //        {
        //            xtype: 'panel',
        //            title: '预览',
        //            region: 'center',
        //            layout: 'fit',
        //            items: [
        //                me.preview
        //            ]
        //        }
        //    ]
        //}, {
        //    xtype: 'checkbox',
        //    boxLabel: '拉伸适应屏幕',
        //    checked: me.stretch,
        //    listeners: {
        //        change: function (comp) {
        //            me.stretch = comp.checked;
        //        }
        //    }
        //}
        //];
    },

    createTree: function () {
        var me = this;
        var view = this.getView();

        function child(img) {
            return {
                img: img,
                text: me.getTextOfWallpaper(img),
                iconCls: '',
                leaf: true
            };
        }

        var tree = new Ext.tree.Panel({
            title: '桌面背景',
            rootVisible: false,
            lines: false,
            scrollable: true,
            width: 150,
            region: 'west',
            split: true,
            minWidth: 100,
            listeners: {
                afterrender: {
                    fn: this.setInitialSelection,
                    delay: 100
                },
                select: this.onSelect,
                scope: this
            },
            store: new Ext.data.TreeStore({
                model: 'App.view.main.desktop.Wallpaper',
                root: {
                    text: '壁纸',
                    expanded: true,
                    children: [{
                        text: "None",
                        iconCls: '',
                        leaf: true
                    },
                    child('Blue-Sencha.jpg'),
                    child('Dark-Sencha.jpg'),
                    child('Wood-Sencha.jpg'),
                    child('blue.jpg'),
                    child('desk.jpg'),
                    child('desktop.jpg'),
                    child('desktop2.jpg'),
                    child('sky.jpg')
                    ]
                }
            })
        });

        return tree;
    },

    getTextOfWallpaper: function (path) {
        var text = path, slash = path.lastIndexOf('/');
        if (slash >= 0) {
            text = text.substring(slash + 1);
        }
        var dot = text.lastIndexOf('.');
        text = Ext.String.capitalize(text.substring(0, dot));
        text = text.replace(/[-]/g, ' ');
        return text;
    },

    onSelect: function (tree, record) {
        var me = this;

        if (record.data.img) {
            me.selected = '/images/wallpapers/' + record.data.img;
        } else {
            me.selected = Ext.BLANK_IMAGE_URL;
        }

        me.preview.setWallpaper(me.selected);
    },

    setInitialSelection: function () {
        var s = this.desktop.getWallpaper();
        if (s) {
            var path = '/images/wallpapers/' + this.getTextOfWallpaper(s);
            this.tree.selectPath(path, 'text');
        }
    },

    onOKClick: function () {
        var view = this.getView();
        if (view.selected) {
            view.desktop.setWallpaper(view.selected, view.stretch);
        }
        view.hide();
    },

    onCancelClick: function () {
        this.getView().close();
    }
});