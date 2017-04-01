
Ext.define('App.view.authority.menu.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menuadd',

    reset: function () {
        var view = this.getView();
        view.down('form').getForm().reset();
        view.down('menuselect').reset();
    },

    onSaveClick: function () {
        var win = this.getView();
        var form = win.down('form');
        if (!form.isValid()) {
            App.notify('消息', '请填写完整');
            return;
        }
        var values = form.getValues();

        App.post('/api/Menu/Add', values, function (data) {
            var obj = JSON.parse(data);
            if (obj.Code == 200) {
                win.hide();
                var view = App.query('menulist');
                if (view != null) {
                    view.down('treepanel').getStore().reload();
                }
                App.notify('消息', '操作成功');
            } else {
                App.alert('消息', obj.Msg);
            }
        });
    },

    onCancelClick: function () {
        this.getView().hide();
    }
});