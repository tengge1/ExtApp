
Ext.define('App.app.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    init: function () {
        var me = this;
        Ext.getBody().on('keypress', function (e) {
            if (e.keyCode == Ext.EventObject.ENTER) {
                me.onLoginClick();
            }
        });
    },

    onLoginClick: function () {
        var view = this.getView();
        var form = view.down('form').getForm();
        if (!form.isValid()) {
            return;
        }

        var values = form.getValues();

        var mask = Ext.create('Ext.LoadMask', {
            target: this.getView(),
            msg: '正在登录...',
            indicator: true,
            centered: true
        });
        mask.show();
        App.post('/api/Login/Login', values, function (r) {
            mask.hide();
            var obj = JSON.parse(r);
            if (obj.Code == 200) {
                window.location = 'Default.aspx';
            } else {
                App.alert('消息', obj.Msg);
            }
        });
    },

    onResetClick: function () {
        this.getView().down('form').getForm().reset();
    }
});