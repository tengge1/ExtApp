
Ext.define('App.view.core.dic.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dicedit',

    onSaveClick: function () {
        var win = this.getView();
        var form = win.down('form');
        if (!form.isValid()) {
            App.notify('消息', '请填写完整！');
            return;
        }
        var values = form.getValues();
        if (values.TypeID != '' && parseInt(values.TypeID) > 0) {
            values.Type = {
                ID: values.TypeID
            };
        }

        var url = '/api/Dic/Edit';
        if (values.ID == 0) {
            url = '/api/Dic/Add';
        }

        App.post(url, values, function (r) {
            var obj = JSON.parse(r);
            if (obj.Code == 200) {
                win.hide();
                var view = App.query('diclist');
                if (view != null) {
                    view.down('treepanel').getStore().reload();
                }
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