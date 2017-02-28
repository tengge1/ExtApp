/**
* 用户登录信息模型
*/

Ext.define('App.model.sys.LoginSession', {
    extend: 'Ext.data.Model',

    fields: [
        'Guid',
        'UserID',
        'UserUsername',
        'UserName',
        'LoginTime',
        'LoginIP',
        'Expire'
    ]
});