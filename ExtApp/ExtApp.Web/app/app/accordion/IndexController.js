
Ext.define('App.app.accordion.IndexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.index',

    requires: [
        'App.app.ChangePwd'
    ],

    onLogoutClick: function () {
        App.confirm('消息', '是否注销？', function () {
            App.post('/api/Login/Logout', function (r) {
                var obj = JSON.parse(r);
                if (obj.Code == 200) {
                    window.location = 'Login.aspx';
                }
            });
        });
    },

    onChangePwdClick: function () {
        Ext.widget('changepwd').show();
    }
});