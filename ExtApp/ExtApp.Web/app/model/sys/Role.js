/**
* 角色模型
*/

Ext.define('App.model.sys.Role', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
        'Code',
        'Name',
        'Layer',
        'Status',
        'Memo'
    ]
});