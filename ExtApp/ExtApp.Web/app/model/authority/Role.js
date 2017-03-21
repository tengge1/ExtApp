
// --------- 角色模型 -------------

Ext.define('App.model.authority.Role', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
        'Code',
        'Name',
        'Sort',
        'Status',
        'Comment'
    ]
});