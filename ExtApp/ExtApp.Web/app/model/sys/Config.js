/**
* 配置模型
*/

Ext.define('App.model.sys.Config', {
    extend: 'Ext.data.Model',

    fields: [
        'ID', {
            name: 'PID',
            mapping: function (data) {
                return data.Section == null ? 0 : data.Section.ID;
            }
        },
        'Name',
        'Key',
        'Value',
        'Layer',
        'Status',
        'Memo'
    ]
});