
Ext.define('App.view.main.accordion.Menu', {
    extend: 'Ext.container.Container',
    alias: 'widget.mainmenu',

    requires: [
        'App.view.main.accordion.MenuController'
    ],

    controller: 'menu',

    layout: 'accordion',
    title: '系统菜单',

    defaults: {
        xtype: 'treepanel',
        animate: true
    }
});