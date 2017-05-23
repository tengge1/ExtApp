
Ext.define('App.app.model.ConfigSection', {
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