/**
* 菜单树模型
*/

Ext.define('App.model.authority.MenuTree', {
    extend: 'Ext.data.TreeModel',

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