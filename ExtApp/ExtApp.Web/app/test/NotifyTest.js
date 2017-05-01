
Ext.define('App.test.NotifyTest', {
    extend: 'Ext.panel.Panel',

    layout: 'form',
    autoScroll: true,

    tbar: [{
        xtype: 'button',
        text: '弹窗1',
        handler: function () {
            App.notify('消息', '这是一个冒泡弹窗！');
        }
    }, {
        xtype: 'button',
        text: '弹窗2',
        handler: function () {
            Ext.create('App.widget.Notify', {
                title: '消息',
                html: '这是第二种写法！'
            }).show();
        }
    }],

    items: [{
        xtype: 'textarea',
        name: 'code1',
        fieldLabel: '弹窗1',
        value: `App.notify("消息", "这是一个冒泡弹窗！");`
    }, {
        xtype: 'textarea',
        name: 'code2',
        fieldLabel: '弹窗2',
        value: `Ext.create('App.widget.Notify', {
            title: '消息',
            html: '这是第二种写法！'
        }).show(); `
    }],

    initComponent: function () {
        this.callParent();
        var view = this;
        Ext.create('App.util.RequireCss').require(['packages/CodeMirror/lib/codemirror.css']);
        require([
            "packages/CodeMirror/lib/codemirror", "packages/CodeMirror/mode/htmlmixed/htmlmixed"
        ], function (CodeMirror) {
            var editor = CodeMirror.fromTextArea(view.down('textarea[name=code1]').inputEl.dom, {
                lineNumbers: true,
                mode: "javascript",
                readOnly: true
            });
            editor.setSize('auto', '120px');
            editor = CodeMirror.fromTextArea(view.down('textarea[name=code2]').inputEl.dom, {
                lineNumbers: true,
                mode: "javascript",
                readOnly: true
            });
            editor.setSize('auto', '200px');
        });
    }
});