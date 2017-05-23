
Ext.define('App.app.model.DicItem', {
    extend: 'Ext.data.Model',

    fields: [
        'ID', {
            name: 'PID',
            mapping: function (value) {
                return value.Dic.ID;
            }
        },
        'Code',
        'Name',
        'Sort',
        'Status',
        'Comment'
    ]
});