
Ext.define('App.test.UserSelectTest', {
    extend: 'Ext.panel.Panel',

    layout: 'form',
    autoScroll: true,

    select: null,

    tbar: [{
        xtype: 'hidden',
        name: 'userIDs'
    }, {
        xtype: 'textfield',
        name: 'userNames',
        fieldLabel: '用户',
        labelWidth: 40,
        labelAlign: 'right',
        emptyText: '请选择',
        editable: false,
        triggers: {
            select: {
                cls: 'User trigger-no-shift',
                handler: function (sender) {
                    var userSelect = Ext.create('App.widget.UserSelect', {
                        callback: function (records) {
                            var ids = '';
                            var names = '';
                            for (var i = 0; i < records.length; i++) {
                                var record = records[i];
                                ids += record.data.ID + ',';
                                names += record.data.Name + ',';
                            }
                            if (ids.endsWith(',')) {
                                ids = ids.substr(0, ids.length - 1);
                            }
                            if (names.endsWith(',')) {
                                names = names.substr(0, names.length - 1);
                            }
                            sender.up('panel').down('hidden[name=userIDs]').setValue(ids);
                            sender.up('panel').down('textfield[name=userNames]').setValue(names);
                            App.notify('消息', '您选择了<br />ID:' + ids + '<br />Name:' + names);
                        }
                    });
                    userSelect.reset();
                    sender.up('panel').select = userSelect;
                    userSelect.show();
                }
            }
        }
    }, {
        xtype: 'button',
        text: '获取值',
        handler: function (sender) {
            var select = sender.up('panel').select;
            if (select == null) {
                App.notify('消息', '请选择用户！');
                return;
            }
            var value = select.getValue();
            var text = select.getRawValue();
            App.notify('消息', '您选择了<br />ID:' + value + '<br />Name:' + text);
        }
    }, {
        xtype: 'button',
        text: '重置',
        handler: function (sender) {
            var select = sender.up('panel').select;
            select.reset();
            sender.up('panel').down('hidden[name=userIDs]').reset();
            sender.up('panel').down('textfield[name=userNames]').reset();
        }
    }],

    items: [{
        xtype: 'textarea',
        name: 'code1',
        fieldLabel: '控件',
        value: `var userSelect = Ext.create('App.widget.UserSelect', {
            callback: function (records) {
                    var ids = '';
                    var names = '';
                    for (var i = 0; i < records.length; i++) {
                        var record = records[i];
                        ids += record.data.ID + ',';
                        names += record.data.Name + ',';
                    }
                    if (ids.endsWith(',')) {
                        ids = ids.substr(0, ids.length -1);
                    }
                    if (names.endsWith(',')) {
                        names = names.substr(0, names.length -1);
                    }
                    App.notify('消息', '您选择了<br />ID:' + ids + '<br />Name:' + names);
                }
            });
            userSelect.reset();
            userSelect.show();`
    }, {
        xtype: 'textarea',
        name: 'code2',
        fieldLabel: '获取值',
        value: `var value = userSelect.getValue();
            var text = userSelect.getRawValue();
            App.notify('消息', '您选择了<br />ID:' + value + '<br />Name:' + text);`
    }, {
        xtype: 'textarea',
        name: 'code3',
        fieldLabel: '重置',
        value: `userSelect.reset();`
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
            editor.setSize('auto', '320px');
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