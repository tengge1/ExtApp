
Ext.define('App.test.MapShowTest', {
    extend: 'Ext.panel.Panel',

    requires: [
        'App.widget.MapShow'
    ],

    layout: 'form',
    autoScroll: true,

    items: [{
        xtype: 'mapshow'
    }, {
        xtype: 'textarea',
        name: 'code1',
        fieldLabel: '控件',
        value: `var win = Ext.create('App.widget.MapDraw', {
            type: 'point', // point-点，polyline-线，polygon-面
            callback: function (value) {
                sender.up('panel').down('textarea[name=data]').setValue(JSON.stringify(value));
            }
        });
        win.show();`
    }, {
        xtype: 'textarea',
        name: 'code2',
        fieldLabel: '获取值',
        value: `var value = mapDraw.getValue();`
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
            editor = CodeMirror.fromTextArea(view.down('textarea[name=code2]').inputEl.dom, {
                lineNumbers: true,
                mode: "javascript",
                readOnly: true
            });
            editor.setSize('auto', '100px');
        });
    }
});