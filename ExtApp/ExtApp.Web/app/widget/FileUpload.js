
// ---------- 附件上传控件 -----------

Ext.define('App.widget.FileUpload', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.fileupload',

    width: 800,
    height: 400,
    layout: 'fit',

    tbar: [{
        xtype: 'filefield',
        width: 60,
        buttonOnly: true,
        buttonText: '上传',
        buttonConfig: {
            iconCls: 'Add'
        },
        listeners: {
            change: function (sender, value, opts) {
                debugger;
            }
        }
    }, {
        xtype: 'button',
        text: '删除',
        iconCls: 'Delete'
    }, {
        xtype: 'button',
        text: '查看',
        iconCls: 'Photo'
    }, {
        xtype: 'button',
        text: '下载',
        iconCls: 'Delete'
    }],

    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '文件名'
    }, {
        text: '大小'
    }]
});