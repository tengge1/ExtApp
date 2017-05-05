
// ---------- 附件上传控件 -----------

Ext.define('App.widget.FileUpload', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.fileupload',

    width: 800,
    height: 400,
    layout: 'fit',

    tbar: [{
        xtype: 'button',
        text: '上传',
        iconCls: 'Add'
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
    }],

    listeners: {
        afterrenderer: function (sender) {
            require([
                'packages/webuploader/webuploader.html5only.js'
            ], function () {
                sender.up('window').down('button[]');
            });
        }
    }
});