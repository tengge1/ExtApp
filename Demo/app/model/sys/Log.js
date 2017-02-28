/**
* 日志模型
*/

Ext.define('App.model.sys.Log', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
        'Type',
        'Source',
        'Level', {
            name: 'AddUser',
            mapping: function (data) {
                return data.AddUser == null ? '' : data.AddUser.Name;
            }
        },
        'AddTime',
        'IP',
        'Title',
        'Content',
        'Status',
        'Memo'
    ]
});