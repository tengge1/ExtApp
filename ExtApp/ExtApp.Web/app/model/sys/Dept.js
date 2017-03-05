/**
* 组织机构模型
*/

Ext.define('App.model.sys.Dept', {
    extend: 'Ext.data.Model',

    fields: [
        'ID', {
            name: 'PID',
            mapping: function (value) {
                return value.PDept == null ? 0 : value.PDept.ID;
            }
        }, {
            name: 'PName',
            mapping: function (value) {
                return value.PDept == null ? '' : value.PDept.Name;
            }
        },
        'Code',
        'Name', {
            name: 'TypeID',
            mapping: function (value) {
                return value.Type == null ? 0 : value.Type.ID;
            }
        }, {
            name: 'TypeCode',
            mapping: function (value) {
                return value.Type == null ? '' : value.Type.Code;
            }
        }, {
            name: 'TypeName',
            mapping: function (value) {
                return value.Type == null ? '' : value.Type.Name;
            }
        }, {
            name: 'HeadID',
            mapping: function (value) {
                return value.Head == null ? 0 : value.Head.ID;
            }
        }, {
            name: 'HeadName',
            mapping: function (value) {
                return value.Head == null ? '' : value.Head.Name;
            }
        }, {
            name: 'AddUserID',
            mapping: function (value) {
                return value.AddUser == null ? 0 : value.AddUser.ID;
            }
        }, {
            name: 'AddUserName',
            mapping: function (value) {
                return value.AddUser == null ? '' : value.AddUser.Name;
            }
        }, {
            name: 'AddTime',
            mapping: function (value) {
                return value.AddTime == null ? '' : value.AddTime;
            }
        },
        'Sort',
        'Status',
        'Comment'
    ]
});