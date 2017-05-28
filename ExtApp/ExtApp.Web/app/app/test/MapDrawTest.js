
Ext.define('App.app.test.MapDrawTest', {
    extend: 'Ext.panel.Panel',

    layout: 'form',
    autoScroll: true,

    mapDraw: null,

    tbar: [{
        xtype: 'button',
        text: '画点',
        iconCls: 'Map',
        handler: function (sender) {
            var win = Ext.create('App.widget.MapDraw', {
                type: 'point',
                callback: function (value) {
                    sender.up('panel').down('textarea[name=data]').setValue(JSON.stringify(value));
                }
            });
            sender.up('panel').mapDraw = win;
            win.show();
        }
    }, {
        xtype: 'button',
        text: '画线',
        iconCls: 'Map',
        handler: function (sender) {
            var win = Ext.create('App.widget.MapDraw', {
                type: 'polyline',
                callback: function (value) {
                    sender.up('panel').down('textarea[name=data]').setValue(JSON.stringify(value));
                }
            });
            sender.up('panel').mapDraw = win;
            win.show();
        }
    }, {
        xtype: 'button',
        text: '画面',
        iconCls: 'Map',
        handler: function (sender) {
            var win = Ext.create('App.widget.MapDraw', {
                type: 'polygon',
                callback: function (value) {
                    sender.up('panel').down('textarea[name=data]').setValue(JSON.stringify(value));
                }
            });
            sender.up('panel').mapDraw = win;
            win.show();
        }
    }, {
        xtype: 'button',
        text: '获取值',
        handler: function (sender) {
            var mapDraw = sender.up('panel').mapDraw;
            if (mapDraw == null) {
                App.notify('消息', '请绘制！');
                return;
            }
            var value = mapDraw.getValue();
            App.notify('数据', JSON.stringify(value));
        }
    }],

    items: [{
        xtype: 'textarea',
        name: 'data',
        fieldLabel: '数据',
        value: ''
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