
Ext.define('App.app.accordion.IndexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.index',

    requires: [
        'App.app.ChangePwd'
    ],

    onLogoutClick: function () {
        App.confirm('消息', '是否注销？', function () {
            var config = Ext.create('util.config');
            App.post('/api/Login/Logout', function (r) {
                var obj = JSON.parse(r);
                if (obj.Code == 200) {
                    config.setState('nologin');
                    window.location.reload();
                }
            });
        });
    },

    onChangePwdClick: function () {
        Ext.widget('changepwd').show();
    }
});