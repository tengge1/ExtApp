
// ---------------- 组织机构Model ------------------

Ext.define('App.model.personnel.Dept', {
    extend: 'Ext.data.Model',

    idProperty: 'ID',
    fields: [
        'ID', //ID
        'PID', // 父机构ID
        'PName', // 父机构名称
        'Code', // 编码
        'Name', // 名称
        'TypeID', // 类型ID
        'TypeCode', // 类型编码
        'TypeName', // 类型名称
        'HeadID', // 负责人ID
        'HeadName', // 负责人名称
        'AddUserID', // 添加人ID
        'AddUserName', // 添加人姓名
        'AddTime', // 添加时间
        'Sort', // 排序
        'Status', // 状态
        'Comment' // 备注
    ]
});