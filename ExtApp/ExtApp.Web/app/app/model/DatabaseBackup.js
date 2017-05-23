
Ext.define('App.app.model.DatabaseBackup', {
    extend: 'Ext.data.Model',

    idProperty: 'ID',
    fields: [
        'ID',
        'Name',
        'FileName',
        {
            name: 'AddUserID',
            mapping: function (value) {
                return value.AddUser.ID;
            }
        },
        {
            name: 'AddUserName',
            mapping: function (value) {
                return value.AddUser.Name;
            }
        },
        'AddTime',
        'IsCurrent',
        'Comment'
    ]
});