
Ext.define('App.test.SearchFormTest', {
    extend: 'Ext.panel.Panel',

    requires: [
        'App.widget.SearchForm'
    ],

    layout: 'form',
    autoScroll: true,

    tbar: [{
        xtype: 'searchform',
        items: [{
            xtype: 'textfield',
            name: 'name',
            value: '小明',
            fieldLabel: '姓名'
        }, {
            xtype: 'textfield',
            name: 'sex',
            value: '男',
            fieldLabel: '性别'
        }, {
            xtype: 'textfield',
            name: 'age',
            value: '18',
            fieldLabel: '年龄'
        }, {
            xtype: 'button',
            text: '获取值',
            handler: function (sender) {
                var values = sender.up('searchform').getValues();
                App.notify('消息', JSON.stringify(values));
            }
        }]
    }],

    items: [{
        xtype: 'textarea',
        name: 'code1',
        fieldLabel: '弹窗1',
        value: `var values = searchform.getValues();`
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
            editor.setSize('auto', '100px');
        });
    }
});