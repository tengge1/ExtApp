/**
* 字典项模型
*/

Ext.define('App.model.sys.DicItem', {
    extend: 'Ext.data.Model',

    fields: [
        'ID', {
            name: 'PID',
            mapping: function (data) {
                return data.Dict == null ? 0 : data.Dict.ID;
            }
        },
        'Code',
        'Name',
        'Layer',
        'Status',
        'Memo'
    ]
});