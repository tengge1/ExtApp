
Ext.define('App.model.core.Log', {
    extend: 'Ext.data.Model',

    idProperty: 'ID',
    fields: [
        'ID',
        'Type',
        'Source',
        'Level',
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