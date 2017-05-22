
Ext.define('App.main.ChangePwdController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.changepwd',

    onClickOK: function () {
        var view = this.getView();
        var form = view.down('form').form;
        if (!form.isValid()) {
            App.notify('消息', '请填写完整！');
            return;
        }
        var values = form.getValues();
        App.post('/api/Login/ChangePwd', values, function (r) {
            var obj = JSON.parse(r);
            if (obj.Code == 200) {
                view.hide();
                App.notify('消息', obj.Msg);
            } else {
                App.alert('错误', obj.Msg);
            }
        });
    },

    onClickCancel: function () {
        this.getView().hide();
    }
});