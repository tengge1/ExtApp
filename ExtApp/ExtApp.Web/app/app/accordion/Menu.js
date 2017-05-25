
Ext.define('App.app.accordion.Menu', {
    extend: 'Ext.container.Container',
    alias: 'widget.mainmenu',

    requires: [
        'App.app.accordion.MenuController'
    ],

    controller: 'menu',

    layout: 'accordion',
    title: '系统菜单',

    defaults: {
        xtype: 'treepanel',
        animate: true
    }
});