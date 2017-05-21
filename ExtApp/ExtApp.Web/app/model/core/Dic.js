
Ext.define('App.model.core.Dic', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
        'Code',
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
        'Name',
        'Sort',
        'Status',
        'Comment'
    ]
});