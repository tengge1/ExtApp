
Ext.define('App.model.core.Config', {
    extend: 'Ext.data.Model',

    fields: [
        'ID', {
            name: 'PID',
            mapping: function (value) {
                return value.Section.ID;
            }
        },
        'Name',
        'Key',
        'Value',
        'Sort',
        'Status',
        'Comment'
    ]
});