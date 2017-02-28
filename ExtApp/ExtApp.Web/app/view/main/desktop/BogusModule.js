
var windowIndex = 0;

Ext.define('App.view.main.desktop.BogusModule', {
    extend: 'Ext.ux.desktop.Module',

    init: function () {
        this.launcher = {
            text: 'Window ' + (++windowIndex),
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: windowIndex
        }
    },

    createWindow: function (src) {
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('bogus' + src.windowId);
        if (!win) {
            win = desktop.createWindow({
                id: 'bogus' + src.windowId,
                title: src.text,
                width: 640,
                height: 480,
                html: '<p>这里会有一些有用的东西</p>',
                iconCls: 'bogus',
                animCollapse: false,
                constrainHeader: true
            });
        }
        win.show();
        return win;
    }
});