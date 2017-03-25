
Ext.define('App.model.personnel.Dept', {
    extend: 'Ext.data.Model',

    idProperty: 'ID',
    fields: [
        'ID',
        'PID',
        'PName',
        'Code',
        'Name',
        'Type', // 类型（1-机构、2-区域）
        'AddUserID',
        'AddUserName',
        'AddTime',
        'Sort',
        'Status',
        'Comment'
    ]
});