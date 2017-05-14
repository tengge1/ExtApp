
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
        {
            name: 'DeptID',
            mapping: function (value) {
                if (value.Dept != null) {
                    return value.Dept.ID;
                }
                return 0;
            }
        },
        {
            name: 'DeptName',
            mapping: function (value) {
                if (value.Dept != null) {
                    return value.Dept.Name;
                }
                return '';
            }
        },
        {
            name: 'RoleID',
            mapping: function (value) {
                if (value.Role != null) {
                    return value.Role.ID;
                }
                return 0;
            }
        },
        {
            name: 'RoleName',
            mapping: function (value) {
                if (value.Role != null) {
                    return value.Role.Name;
                }
                return '';
            }
        },
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