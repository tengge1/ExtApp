/* 系统设置 */

Ext.define('App.view.main.desktop.Settings', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.ux.desktop.Wallpaper', // 壁纸
        'App.view.main.desktop.Wallpaper',
        'App.view.main.desktop.SettingsController'
    ],

    layout: 'anchor',
    title: '改变设置',
    modal: true,
    width: 640,
    height: 480,
    border: false,
    controller: 'settings',

    initComponent: function () {
        var me = this;

        me.selected = me.desktop.getWallpaper();
        me.stretch = me.desktop.wallpaper.stretch;

        me.preview = Ext.create('widget.wallpaper');
        me.preview.setWallpaper(me.selected);
        me.tree = me.createTree();

        me.items = [{
            anchor: '0 -30',
            border: false,
            layout: 'border',
            items: [
                me.tree,
                {
                    xtype: 'panel',
                    title: 'Preview',
                    region: 'center',
                    layout: 'fit',
                    items: [me.preview]
                }
            ]
        }, {
            xtype: 'checkbox',
            boxLabel: '拉伸适应屏幕',
            checked: me.stretch,
            listeners: {
                change: function (comp) {
                    me.stretch = comp.checked;
                }
            }
        }
        ];

        me.callParent();
    },

    createTree: function () {
        var me = this;

        function child(img) {
            return { img: img, text: me.getTextOfWallpaper(img), iconCls: '', leaf: true };
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

    buttons: [{
        text: '确定',
        handler: 'onOKClick'
    }, {
        text: '取消',
        handler: 'onCancelClick'
    }]
});
