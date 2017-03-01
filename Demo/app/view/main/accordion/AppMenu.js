/**
* 系统菜单视图
*/

Ext.define('App.view.main.accordion.AppMenu', {
    extend: 'Ext.container.Container',
    alias: 'widget.appmenu',

    requires: [
        'App.view.main.accordion.AppMenuController'
    ],

    controller: 'appmenu',

    layout: 'accordion',
    title: '系统菜单',

    defaults: {
        xtype: 'treepanel',
        animate: true
    }
});