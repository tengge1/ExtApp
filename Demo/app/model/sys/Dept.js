/**
* 组织机构模型
*/

Ext.define('App.model.sys.Dept', {
    extend: 'Ext.data.Model',

    fields: [
        'ID', {
            name: 'PID',
            mapping: function (data) {
                return data.PDept == null ? 0 : data.PDept.ID;
            }
        }, {
            name: 'PName',
            mapping: function (data) {
                return data.PDept == null ? '' : data.PDept.Name;
            }
        },
        'Code',
        'Name',
        'Layer',
        'Status',
        'Memo'
    ]
});