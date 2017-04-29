
Ext.define('App.view.work.message.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.messageedit',

    onSelectUser: function () {
        var view = this.getView();
        var values = view.down('form').getForm().getValues();
        var win = Ext.create('App.widget.UserSelect');
        if (values.UserIDs != '') {
            win.setValue(values.UserIDs);
        }
        win.show();
    },

    onSaveClick: function () {
        var win = this.getView();
        var form = win.down('form').form;
        if (!form.isValid()) {
            return;
        }
        var values = form.getValues();

        var url = '';
        if (values.ID == '' || values.ID == 0) {
            url = '/api/Message/Add';
        } else {
            url = '/api/Message/Edit';
        }

        App.post(url, values, function (data) {
            var obj = JSON.parse(data);
            if (obj.Code == 200) {
                win.hide();
                var view = Ext.ComponentQuery.query('messagelist')[0];
                view.down('pagingtoolbar').moveFirst();
                App.notify('消息', obj.Msg);
            } else {
                App.alert('错误', obj.Msg);
            }
        });
    },

    onCancelClick: function () {
        this.getView().hide();
    }
});