/**
* 用户模型
*/

Ext.define('App.model.sys.User', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
        'Username',
        'Name',
        'Sex', {
            name: 'RoleID',
            mapping: function (data) {
                return data.UserRole == null ? 0 : data.UserRole.ID;
            }
        }, {
            name: 'RoleName',
            mapping: function (data) {
                return data.UserRole == null ? 0 : data.UserRole.Name;
            }
        }, {
            name: 'DeptID',
            mapping: function (data) {
                return data.UserDept == null ? 0 : data.UserDept.ID;
            }
        }, {
            name: 'DeptName',
            mapping: function (data) {
                return data.UserDept == null ? 0 : data.UserDept.Name;
            }
        },
        'Layer',
        'Status',
        'Memo'
    ]
});