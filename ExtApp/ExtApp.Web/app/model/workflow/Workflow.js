
Ext.define('App.model.workflow.Workflow', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
        'Name',
        'Version',
        'Data',
        {
            name: 'AddUserID',
            mapping: function (value) {
                if (value.AddUser == null) {
                    return 0;
                }
                return value.AddUser.ID;
            }
        },
        {
            name: 'AddUserName',
            mapping: function (value) {
                if (value.AddUser == null) {
                    return '';
                }
                return value.AddUser.Name;
            }
        },
        'AddTime',
        'Comment'
    ]
});