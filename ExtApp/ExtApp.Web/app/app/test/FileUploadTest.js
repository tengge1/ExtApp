
Ext.define('App.app.test.FileUploadTest', {
    extend: 'Ext.panel.Panel',

    requires: [
        'App.widget.FileUpload'
    ],

    layout: 'form',
    autoScroll: true,

    items: [{
        xtype: 'fieldcontainer',
        fieldLabel: '附件',
        items: [{
            xtype: 'fileupload',
            listeners: {
                onload: function (sender, event, xhr) {
                    App.notify('消息', '上传完成！');
                }
            }
        }]
    }, {
        xtype: 'fieldcontainer',
        fieldLabel: '获取值',
        items: [{
            xtype: 'button',
            text: '获取值',
            handler: function (sender) {
                var files = sender.up('panel').down('fileupload').getValue();
                var names = '';
                files.each(function (obj) {
                    names += obj.data.Name + ',';
                });
                App.notify('消息', names);
            }
        }]
    }, {
        xtype: 'textarea',
        name: 'code1',
        fieldLabel: '控件',
        value: `{
        xtype: 'fieldcontainer',
        fieldLabel: '附件',
        items: [{
            xtype: 'fileupload',
            listeners: {
                onload: function (sender, event, xhr) {
                    App.notify('消息', '上传完成！');
                }
            }
        }]
    }`
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
            editor.setSize('auto', '250px');
        });
    }
});