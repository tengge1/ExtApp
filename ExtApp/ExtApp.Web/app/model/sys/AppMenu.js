/**
* 系统菜单模型
*/

Ext.define('App.model.sys.AppMenu', {
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