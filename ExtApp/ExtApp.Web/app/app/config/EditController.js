
Ext.define('App.app.config.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.configedit',

    onSaveClick: function () {
        var win = this.getView();
        var form = win.down('form');
        if (!form.isValid()) {
            App.notify('消息', '请填写完整！');
            return;
        }

        var values = form.getValues();

        if (values.PID != '') {
            values.Section = {
                ID: values.PID
            };
        }

        var url = '/api/Config/Edit';
        if (values.ID == 0) {
            url = '/api/Config/Add';
        }

        App.post(url, values, function (r) {
            var obj = JSON.parse(r);
            if (obj.Code == 200) {
                win.hide();
                var view = App.query('configlist');
                view.down('gridpanel').getStore().reload();
                App.notify('消息', obj.Msg);
            } else {
                App.alert('消息', obj.Msg);
            }
        });
    },

    onCancelClick: function () {
        this.getView().hide();
    }
});