
Ext.define('App.main.accordion.Menu', {
    extend: 'Ext.container.Container',
    alias: 'widget.mainmenu',

    requires: [
        'App.main.accordion.MenuController'
    ],

    controller: 'menu',

    layout: 'accordion',
    title: '系统菜单',

    defaults: {
        xtype: 'treepanel',
        animate: true
    }
});