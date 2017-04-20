
Ext.define('App.model.core.Log', {
    extend: 'Ext.data.Model',

    idProperty: 'ID',
    fields: [
        'ID',
        {
            name: 'TypeID',
            mapping: function (value) {
                if (value.Type == null) {
                    return 0;
                }
                return value.Type.ID;
            }
        },
        {
            name: 'TypeName',
            mapping: function (value) {
                if (value.Type == null) {
                    return '';
                }
                return value.Type.Name;
            }
        },
        {
            name: 'SourceID',
            mapping: function (value) {
                if (value.Source == null) {
                    return 0;
                }
                return value.Source.ID;
            }
        },
        {
            name: 'SourceName',
            mapping: function (value) {
                if (value.Source == null) {
                    return '';
                }
                return value.Source.Name;
            }
        },
        {
            name: 'LevelID',
            mapping: function (value) {
                if (value.Level == null) {
                    return 0;
                }
                return value.Level.ID;
            }
        },
        {
            name: 'LevelName',
            mapping: function (value) {
                if (value.Level == null) {
                    return '';
                }
                return value.Level.Name;
            }
        },
        'UserID',
        'UserName',
        'AddTime',
        'IP',
        'Title',
        'Content',
        'Status',
        'Comment'
    ]
});