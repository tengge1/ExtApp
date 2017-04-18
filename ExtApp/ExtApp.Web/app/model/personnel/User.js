
Ext.define('App.model.personnel.User', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
        'Username',
        'Name',
        {
            name: 'SexID',
            mapping: function (value) {
                if (value.Sex != null) {
                    return value.Sex.ID;
                }
                return 0;
            }
        },
        {
            name: 'SexName',
            mapping: function (value) {
                if (value.Sex != null) {
                    return value.Sex.Name;
                }
                return '';
            }
        },
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