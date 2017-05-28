
Ext.define('App.work.model.MessageReceive', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
        {
            name: 'TypeID',
            mapping: function (value) {
                if (value.Message == null) {
                    return 0;
                }
                if (value.Message.Type == null) {
                    return 0;
                }
                return value.Message.Type.ID;
            }
        },
        {
            name: 'TypeName',
            mapping: function (value) {
                if (value.Message == null) {
                    return '';
                }
                if (value.Message.Type == null) {
                    return '';
                }
                return value.Message.Type.Name;
            }
        },
        {
            name: 'Title',
            mapping: function (value) {
                if (value.Message == null) {
                    return '';
                }
                return value.Message.Title;
            }
        },
        {
            name: 'Content',
            mapping: function (value) {
                if (value.Message == null) {
                    return '';
                }
                return value.Message.Content;
            }
        },
        {
            name: 'AddUserID',
            mapping: function (value) {
                if (value.Message == null) {
                    return 0;
                }
                if (value.Message.AddUser == null) {
                    return 0;
                }
                return value.Message.AddUser.ID;
            }
        },
        {
            name: 'AddUserName',
            mapping: function (value) {
                if (value.Message == null) {
                    return '';
                }
                if (value.Message.AddUser == null) {
                    return '';
                }
                return value.Message.AddUser.Name;
            }
        },
        {
            name: 'SendTime',
            mapping: function (value) {
                if (value.Message == null) {
                    return '';
                }
                if (value.Message.SendTime == null) {
                    return '';
                }
                return value.Message.SendTime;
            }
        },
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