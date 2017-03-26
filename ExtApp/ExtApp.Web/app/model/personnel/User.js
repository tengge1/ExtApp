
Ext.define('App.model.personnel.User', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
        'Username',
        'Name',
        'Sex',
        'DeptID',
        'DeptName',
        'RoleID',
        'RoleName',
        'Duty',
        'Phone',
        'Email',
        'Birthday',
        'Address',
        'FaceUrl',
        'AddTime',
        'Sort',
        'Status',
        'Comment',
        'isAdmin'
    ]
});