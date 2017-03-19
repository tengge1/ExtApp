
// -------------- 日志模型 ---------------

Ext.define('App.model.core.Log', {
    extend: 'Ext.data.Model',

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