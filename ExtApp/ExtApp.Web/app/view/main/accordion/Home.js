
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
        value: 'v1.0.1',
        labelAlign: 'right',
        labelWidth: 60
    }, {
        xtype: 'displayfield',
        fieldLabel: '作者',
        value: 'tengge',
        labelAlign: 'right',
        labelWidth: 60
    }, {
        xtype: 'fieldcontainer',
        fieldLabel: '特点',
        items: [{
            xtype: 'displayfield',
            hideLabel: true,
            value: '1、使用NHibernate自动创建数据表。'
        }, {
            xtype: 'displayfield',
            hideLabel: true,
            value: '2、使用NHibernate Attribute通过属性配置映射，不需要手工编写xml文件。'
        }, {
            xtype: 'displayfield',
            hideLabel: true,
            value: '3、PC和手机端共享同样的API Controller接口。'
        }, {
            xtype: 'displayfield',
            hideLabel: true,
            value: '4、ExtJs动态加载js文件。'
        }, {
            xtype: 'displayfield',
            hideLabel: true,
            value: '5、支持折叠面板和桌面模式。'
        }, {
            xtype: 'displayfield',
            hideLabel: true,
            value: '6、支持皮肤动态切换。'
        }],
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