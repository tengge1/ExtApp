/**
* 菜单模型
*/

Ext.define('App.model.authority.Menu', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
        'Name',
        'Code',
        'PID',
        'UrlType',
        'Url',
        'IconType',
        'Icon',
        'Layer',
        'Status',
        'Memo'
    ]
});