
Ext.define('App.model.work.Message', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
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
        'Title',
        'Content',
        {
            name: 'AddUserID',
            mapping: function (value) {
                if (value.AddUser != null) {
                    return value.AddUser.ID;
                }
                return 0;
            }
        },
        {
            name: 'AddUserName',
            mapping: function (value) {
                if (value.AddUser != null) {
                    return value.AddUser.Name;
                }
                return '';
            }
        },
        'AddTime',
        'SendTime',
        {
            name: 'StatusID',
            mapping: function (value) {
                if (value.Status != null) {
                    return value.Status.ID;
                }
                return 0;
            }
        },
        {
            name: 'StatusName',
            mapping: function (value) {
                if (value.Status != null) {
                    return value.Status.Name;
                }
                return '';
            }
        },
        'Comment'
    ]
});