
Ext.define('App.model.authority.Menu', {
    extend: 'Ext.data.Model',

    idProperty: 'ID',
    fields: [
        'ID',
        'PID',
        'PName',
        'Code',
        'Name',
        'UrlType',
        'Url',
        'OpenType',
        'IconType',
        'Icon',
        'Sort',
        'Status',
        'Comment'
    ]
});