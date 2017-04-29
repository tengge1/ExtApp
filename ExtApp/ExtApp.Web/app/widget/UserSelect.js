
// ------------ 用户选择控件 ---------------

Ext.define('App.widget.UserSelect', {
    extend: 'Ext.window.Window',

    title: '选择用户',
    width: 800,
    height: 400,
    iconCls: 'User',
    layout: 'border',

    callback: null, // 回调函数
    setValue: function (userIDs) { // 为控件赋值

    },

    items: [{
        xtype: 'treepanel',
        title: '机构',
        region: 'west',
        width: 250,
        store: Ext.create('App.store.personnel.DeptTree'),
        listeners: {
            itemclick: function (sender) {
                var selection = sender.getSelection();
                sender.up('window').down('gridpanel[title=全部]').getStore().load({
                    params: {
                        DeptID: selection[0].data.ID
                    }
                });
            }
        }
    }, {
        xtype: 'gridpanel',
        title: '全部',
        region: 'center',
        width: 275,
        store: Ext.create('App.store.personnel.User', {
            autoLoad: false
        }),
        columns: [{
            text: '用户名',
            dataIndex: 'Username'
        }, {
            text: '姓名',
            dataIndex: 'Name'
        }],
        selModel: {
            selType: 'checkboxmodel'
        },
        listeners: {
            select: function (sender, record, index, opts) {
                var store = sender.view.up('window').down('gridpanel[title=已选]').getStore();
                var index = store.findBy(function (o) { return o.data.ID == record.data.ID; });
                if (index == -1) {
                    store.add(record);
                }
            },
            deselect: function (sender, record, index, opts) {
                var store = sender.view.up('window').down('gridpanel[title=已选]').getStore();
                var index = store.findBy(function (o) { return o.data.ID == record.data.ID; });
                if (index > -1) {
                    store.remove(record);
                }
            }
        }
    }, {
        xtype: 'gridpanel',
        title: '已选',
        region: 'east',
        width: 275,
        store: Ext.create('Ext.data.Store', {
            model: 'App.model.personnel.User'
        }),
        columns: [{
            xtype: 'rownumberer'
        }, {
            text: '机构',
            dataIndex: 'DeptName'
        }, {
            text: '姓名',
            dataIndex: 'Name'
        }, {
            xtype: 'actioncolumn',
            items: [{
                iconCls: 'Delete',
                tooltip: '移除用户',
                handler: function (sender, rowIndex, colIndex, item, e, record, row) {
                    sender.up('gridpanel').getStore().remove(record);
                    var grid = sender.up('window').down('gridpanel[title=全部]');
                    var store = grid.getStore();
                    var index = store.findBy(function (o) { return o.data.ID == record.data.ID });
                    if (index > -1) {
                        grid.getSelectionModel().deselect(record);
                    }
                }
            }],
            flex: 1
        }]
    }],

    buttons: [{
        text: '确定',
        handler: function (sender) {
            var win = sender.up('window');
            var selected = win.down('gridpanel[title=已选]').getStore().data.items;
            if (selected.length == 0) {
                top.App.notify('消息', '请选择用户！');
                return;
            }

            if (typeof (win.callback) == 'function') {
                win.callback(selected);
            }
            win.hide();
        }
    }, {
        text: '取消',
        handler: function (sender) {
            sender.up('window').close();
        }
    }]
});