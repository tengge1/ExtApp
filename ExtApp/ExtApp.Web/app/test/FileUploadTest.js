
Ext.define('App.test.FileUploadTest', {
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
            xtype: 'fileupload'
        }]
    }, {
        xtype: 'textarea',
        name: 'code1',
        fieldLabel: '控件',
        value: ``
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