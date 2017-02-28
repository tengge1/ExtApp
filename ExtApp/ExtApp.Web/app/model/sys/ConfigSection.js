/**
* 配置节点模型
*/

Ext.define('App.model.sys.ConfigSection', {
    extend: 'Ext.data.Model',

    fields: [
        'ID', {
            name: 'PID',
            mapping: function (data) {
                return data.PSection == null ? 0 : data.PSection.ID;
            }
        },
        'Name',
        'Layer',
        'Status',
        'Memo'
    ],

    idProperty: "ID"
});