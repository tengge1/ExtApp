
Ext.define('App.view.work.message.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.messageedit',

    onSelectUser: function () {
        var view = this.getView();
        var values = view.down('form').getForm().getValues();
        var win = Ext.create('App.widget.UserSelect', {
            callback: function (records) {
                var userIDs = '';
                var userNames = '';
                for (var i = 0; i < records.length; i++) {
                    var record = records[i];
                    userIDs += record.data.ID + ',';
                    userNames += record.data.Name + ',';
                }
                if (userIDs.endsWith(',')) {
                    userIDs = userIDs.substr(0, userIDs.length - 1);
                    userNames = userNames.substr(0, userNames.length - 1);
                }
                view.down('hidden[name=UserIDs]').setValue(userIDs);
                view.down('textfield[name=UserNames]').setValue(userNames);
            }
        });
        if (values.UserIDs != '') {
            win.setValue(values.UserIDs);
        }
        win.show();
    },

    onSaveClick: function () {
        var win = this.getView();
        var form = win.down('form').getForm();
        if (!form.isValid()) {
            return;
        }
        var values = form.getValues();

        var userIDs = values.UserIDs.split(',');
        values.Receives = [];
        for (var i in userIDs) {
            var userID = userIDs[i];
            values.Receives.push({
                ID: 0,
                User: {
                    ID: parseInt(userID)
                }
            });
        }

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