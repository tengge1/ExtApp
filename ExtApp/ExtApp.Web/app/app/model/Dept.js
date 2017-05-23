
Ext.define('App.app.model.Dept', {
    extend: 'Ext.data.Model',

    idProperty: 'ID',
    fields: [
        'ID',
        {
            name: 'PID',
            mapping: function (value) {
                if (value.PDept != null) {
                    return value.PDept.ID;
                }
                return 0;
            }
        },
        {
            name: 'PName',
            mapping: function (value) {
                if (value.PDept != null) {
                    return value.PDept.Name;
                }
                return '顶级机构';
            }
        },
        'Code',
        'Name',
        {
            name: 'TypeID',
            mapping: function (value) {
                if (value.Type != null) {
                    return value.Type.ID;
                }
                return 0;
            }
        },
        {
            name: 'TypeName',
            mapping: function (value) {
                if (value.Type != null) {
                    return value.Type.Name;
                }
                return '';
            }
        },
        'AddUserID',
        'AddUserName',
        'AddTime',
        'Sort',
        'Status',
        'Comment'
    ]
});