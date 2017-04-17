
Ext.define('App.view.main.desktop.BogusMenuModule', {
    extend: 'App.view.main.desktop.BogusModule',

    init: function () {

        this.launcher = {
            text: '更多项目',
            iconCls: 'bogus',
            handler: function () {
                return false;
            },
            menu: {
                items: []
            }
        };

        for (var i = 0; i < 5; ++i) {
            this.launcher.menu.items.push({
                text: 'Window ' + (++windowIndex),
                iconCls: 'bogus',
                handler: this.createWindow,
                scope: this,
                windowId: windowIndex
            });
        }
    }
});