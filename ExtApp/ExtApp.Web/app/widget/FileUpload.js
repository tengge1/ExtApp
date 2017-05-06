
// ---------- 附件上传控件 -----------

Ext.define('App.widget.FileUpload', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.fileupload',

    mixins: ['Ext.util.Observable'],

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
                var input = sender.fileInputEl.dom;
                var form = new FormData();
                form.append("file", input.files[0]);

                var xhr = new XMLHttpRequest();
                xhr.open("post", 'api/Files/Upload', true);
                xhr.onload = function () {
                    sender.fireEvent('onload');
                };
                xhr.onerror = function () {
                    sender.fireEvent('onerror');
                };
                xhr.upload.onprogress = function () {
                    sender.fireEvent('onprogress');
                };
                xhr.upload.onloadstart = function () {
                    sender.fireEvent('onloadstart');
                };
                xhr.send(form);
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