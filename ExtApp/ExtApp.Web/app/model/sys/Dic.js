/**
* 字典模型
*/

Ext.define('App.model.sys.Dic', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
        'Code',
        'Type',
        'Name',
        'Status',
        'Memo'
    ]
});