
Ext.define('App.model.personnel.Dept', {
    extend: 'Ext.data.Model',

    idProperty: 'ID',
    fields: [
        'ID',
        'PID',
        'PName',
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