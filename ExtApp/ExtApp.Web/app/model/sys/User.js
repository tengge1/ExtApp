/**
* 用户模型
*/

Ext.define('App.model.sys.User', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
        'Username',
        'Name',
        'Sex',
        'RoleID',
        'RoleName',
        'DeptID',
        'DeptName',
        'Sort',
        'Status',
        'Comment'
    ]
});