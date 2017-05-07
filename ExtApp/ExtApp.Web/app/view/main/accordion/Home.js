
Ext.define('App.view.main.accordion.Home', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.home',

    layout: 'form',
    border: false,
    bodyBorder: false,
    autoScroll: true,

    items: [{
        xtype: 'displayfield',
        fieldLabel: '名称',
        value: 'ExtApp',
        labelAlign: 'right',
        labelWidth: 60
    }, {
        xtype: 'displayfield',
        fieldLabel: '版本',
        value: 'v1.0.3',
        labelAlign: 'right',
        labelWidth: 60
    }, {
        xtype: 'displayfield',
        fieldLabel: '源码',
        value: '<a href="https://github.com/tengge1/ExtApp" target="_blank">https://github.com/tengge1/ExtApp</a>',
        labelAlign: 'right',
        labelWidth: 60
    }, {
        xtype: 'displayfield',
        fieldLabel: '反馈建议',
        value: '<a href="https://github.com/tengge1/ExtApp/issues" target="_blank">https://github.com/tengge1/ExtApp/issues</a>',
        labelAlign: 'right',
        labelWidth: 60
    }, {
        xtype: 'displayfield',
        fieldLabel: '提交bug',
        value: '<a href="https://github.com/tengge1/ExtApp/issues" target="_blank">https://github.com/tengge1/ExtApp/issues</a>',
        labelAlign: 'right',
        labelWidth: 60
    }]
});