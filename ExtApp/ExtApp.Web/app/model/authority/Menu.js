
Ext.define('App.model.authority.Menu', {
    extend: 'Ext.data.Model',

    idProperty: 'ID',
    fields: [
        'ID',
        'PID',
        'PName',
        'Code',
        'Name',
        'UrlTypeID',
        'UrlTypeCode',
        'UrlTypeName',
        'Url',
        'OpenTypeID',
        'OpenTypeCode',
        'OpenTypeName',
        'IconTypeID',
        'IconTypeCode',
        'IconTypeName',
        'Icon',
        'Sort',
        'Status',
        'Comment'
    ]
});