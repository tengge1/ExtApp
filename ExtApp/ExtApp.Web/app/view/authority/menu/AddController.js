
Ext.define('App.view.authority.menu.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menuadd',

    reset: function () {
        var view = this.getView();
        view.down('form').getForm().reset();
        view.down('deptselect').reset();
    },

    onSaveClick: function () {
        var view = this.getView();
        var form = view.down('form');
        if (!form.isValid()) {
            App.notify('消息', '请填写完整');
            return;
        }
        var values = form.getValues();

        App.post('/api/Menu/Add', values, function (data) {
            var obj = JSON.parse(data);
            if (obj.Code == 200) {
                view.hide();
                var list = Ext.ComponentQuery.query('menulist')[0];
                list.controller.refresh();
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