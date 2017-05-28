
Ext.define('App.app.dic.EditItemController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dicedititem',

    onSaveClick: function () {
        var win = this.getView();
        var form = win.down('form');
        if (!form.isValid()) {
            App.notify('消息', '请填写完整！');
            return;
        }
        var values = form.getValues();
        if (values.PID != '' && parseInt(values.PID) > 0) {
            values.Dic = {
                ID: values.PID
            };
        }

        var url = '/api/DicItem/Edit';
        if (values.ID == 0) {
            url = '/api/DicItem/Add';
        }
        App.post(url, values, function (r) {
            var obj = JSON.parse(r);
            if (obj.Code == 200) {
                win.hide();
                var view = App.query('diclist');
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