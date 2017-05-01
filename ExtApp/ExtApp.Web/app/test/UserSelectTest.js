
Ext.define('App.test.UserSelectTest', {
    extend: 'Ext.panel.Panel',

    layout: 'form',
    autoScroll: true,

    tbar: [{
        xtype: 'textfield',
        fieldLabel: '用户',
        labelWidth: 40,
        labelAlign: 'right',
        emptyText: '请选择',
        triggers: {
            select: {
                cls: 'User trigger-no-shift',
                floated: true,
                hideOnReadOnly: false,
                handler: function () {
                    this.fireEvent('focus', this);
                }
            }
        },
        listeners: {
            focus: function () {
                var select = Ext.create('App.widget.UserSelect', {
                    callback: function (records) {
                        var ids = '';
                        var names = '';
                        for (var i = 0; i < records.length; i++) {
                            var record = records[i];
                            ids += record.data.ID + ',';
                            names += record.data.Name + ',';
                        }
                        App.notify('消息', '您选择了<br />ID:' + ids + '<br />Name:' + names);
                    }
                });
                select.show();
            }
        }
    }, {
        xtype: 'button',
        text: '获取值',
        handler: function (sender) {
            var select = sender.up('panel').down('deptselect');
            var value = select.getValue();
            var text = select.getRawValue();
            App.notify('消息', '您选择了<br />ID:' + value + '<br />Name:' + text);
        }
    }, {
        xtype: 'button',
        text: '重置',
        handler: function (sender) {
            var select = sender.up('panel').down('deptselect');
            select.reset();
        }
    }],

    items: [{
        xtype: 'textarea',
        name: 'code1',
        fieldLabel: '控件',
        value: `var select = Ext.create('App.widget.DeptSelect', {
            fieldLabel: '机构',
            labelWidth: 40,
            labelAlign: 'right',
            emptyText: '请选择',
            listeners: {
            select: function (sender, record, opts) {
                App.notify('消息', '您选择了<br />ID:' +record.data.ID + '<br />Name:' +record.data.Name);
            }
        }
    }); `
    }, {
        xtype: 'textarea',
        name: 'code2',
        fieldLabel: '获取值',
        value: `var value = select.getValue();
            var text = select.getRawValue();`
    }, {
        xtype: 'textarea',
        name: 'code3',
        fieldLabel: '重置',
        value: `select.reset();`
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
            editor.setSize('auto', '200px');
            editor = CodeMirror.fromTextArea(view.down('textarea[name=code2]').inputEl.dom, {
                lineNumbers: true,
                mode: "javascript",
                readOnly: true
            });
            editor.setSize('auto', '100px');
            editor = CodeMirror.fromTextArea(view.down('textarea[name=code3]').inputEl.dom, {
                lineNumbers: true,
                mode: "javascript",
                readOnly: true
            });
            editor.setSize('auto', '100px');
        });
    }
});