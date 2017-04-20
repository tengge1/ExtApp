
Ext.define('App.model.core.ConfigSection', {
    extend: 'Ext.data.TreeModel',

    idProperty: "ID",

    fields: [
        'ID',
        'Name',
        'Sort',
        'Status',
        'Comment'
    ]
});