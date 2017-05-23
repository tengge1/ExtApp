
Ext.define('App.view.core.logs.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loglist',

    requires: [
        'App.store.core.Log'
    ],

    init: function () {
        var view = this.getView();
        var store = Ext.create('store.loglist');
        view.down('gridpanel').setStore(store);
        view.down('pagingtoolbar').setStore(store);
        store.reload();
        view.down('pagingtoolbar').moveFirst();
    },

    onSearchClick: function () {
        var view = this.getView();
        var values = view.down('form').getForm().getValues();
        var store = view.down('gridpanel').getStore();
        store.load({
            params: values
        });
    },

    onResetClick: function () {
        var view = this.getView();
        view.down('form').getForm().reset();
    },

    onClearClick: function () {
        var view = this.getView();
        App.confirm('消息', '是否清空所有日志？', function () {
            App.post('/api/Log/ClearAll', function (r) {
                var obj = JSON.parse(r);
                if (obj.Code == 200) {
                    App.notify('消息', obj.Msg);
                    view.down('gridpanel').getStore().reload();
                } else {
                    App.alert('消息', obj.Msg);
                }
            });
        });
    },

    onViewClick: function () {
        var selected = this.getView().down('gridpanel').getSelectionModel().getSelected();
        if (selected.length == 0) {
            App.notify('消息', '请选择！');
            return;
        }
        var win = Ext.create('App.view.core.logs.View');
        win.down('form').getForm().loadRecord(selected.items[0]);
        win.show();
    },

    onCellDblClick: function (grid, cell, colIndex, record, row, rowIndex) {
        var record = grid.getStore().getAt(rowIndex);
        var win = Ext.create('App.view.core.logs.View');
        win.down('form').getForm().loadRecord(record);
        win.show();
    }
});