
Ext.define('App.model.core.ConfigSection', {
    extend: 'Ext.data.Model',

    idProperty: "ID",

    fields: [
        'ID',
        'PID',
        'Name',
        'Sort',
        'Status',
        'Comment'
    ]
});