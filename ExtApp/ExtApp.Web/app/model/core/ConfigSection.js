
Ext.define('App.model.core.ConfigSection', {
    extend: 'Ext.data.TreeModel',

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