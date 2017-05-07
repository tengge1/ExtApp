
// ---------- 附件上传控件 -----------

Ext.define('App.widget.FileUpload', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.fileupload',

    width: 800,
    height: 400,
    layout: 'fit',

    getValue: function () { // 获取上传文件内容
        return this.getStore().getData();
    },

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
                xhr.onload = function (event) {
                    var p = sender.up('panel');
                    p.fireEvent('onload', p, event, xhr);
                    var response = xhr.response;
                    if (response != null) {
                        var obj = JSON.parse(response);
                        if (obj.Code == 200) {
                            p.getStore().add(obj.Data);
                        }
                    }
                };
                xhr.onerror = function (event) {
                    var p = sender.up('panel');
                    p.fireEvent('onerror', p, event, xhr);
                };
                xhr.upload.onprogress = function (event) {
                    var p = sender.up('panel');
                    p.fireEvent('onprogress', p, event, xhr);
                };
                xhr.upload.onloadstart = function (event) {
                    var p = sender.up('panel');
                    p.fireEvent('onloadstart', p, event, xhr);
                };
                xhr.send(form);
            }
        }
    }, {
        xtype: 'button',
        text: '删除',
        iconCls: 'Delete',
        handler: function (sender) {
            var grid = sender.up('panel');
            var selection = grid.getSelectionModel().getSelection();
            if (selection.length == 0) {
                App.notify('消息', '请选择附件！');
                return;
            }
            grid.getStore().remove(selection[0]);
        }
    }, {
        xtype: 'button',
        text: '查看',
        iconCls: 'Photo',
        handler: function (sender) {
            var grid = sender.up('panel');
            var selection = grid.getSelectionModel().getSelection();
            if (selection.length == 0) {
                App.notify('消息', '请选择附件！');
                return;
            }
            var url = selection[0].data.Url;
            var name = selection[0].data.Name;
            var type = selection[0].data.Type;
            if (type.startsWith('image')) {
                var win = Ext.create('Ext.window.Window', {
                    title: name,
                    width: 500,
                    height: 400,
                    maximizable: true,
                    html: '<img src="' + url + '" />'
                });
                win.show();
            }
            else if (name.endsWith('mp4') || name.endsWith('MP4')) {
                var win = Ext.create('Ext.window.Window', {
                    title: name,
                    width: 500,
                    height: 400,
                    maximizable: true,
                    html: '<video src="' + url + '" controls="controls" style="width:100%;"></video>'
                });
                win.show();
            } else {
                App.notify('消息', '暂不支持查看该类型附件！');
            }
        }
    }, {
        xtype: 'button',
        text: '下载',
        iconCls: 'Disk',
        handler: function (sender) {
            var grid = sender.up('panel');
            var selection = grid.getSelectionModel().getSelection();
            if (selection.length == 0) {
                App.notify('消息', '请选择附件！');
                return;
            }
            var url = selection[0].data.Url;
            var name = selection[0].data.Name;
            var type = selection[0].data.Type;
            top.window.location = '/api/Files/Download?url=' + url + '&name=' + name + '&type=' + type;
        }
    }],

    store: Ext.create('Ext.data.Store', {
        fields: [
            'Name',
            'Type',
            'Url',
            'Size',
            'Extension',
            {
                name: 'AddUserID',
                mapping: function (value) {
                    if (value.AddUser == null) {
                        return '';
                    }
                    return value.AddUser.ID;
                }
            },
            {
                name: 'AddUserName',
                mapping: function (value) {
                    if (value.AddUser == null) {
                        return '';
                    }
                    return value.AddUser.Name;
                }
            },
            'AddTime'
        ]
    }),

    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '文件名',
        dataIndex: 'Name',
        flex: 1
    }, {
        text: '类型',
        dataIndex: 'Type',
        width: 100
    }, {
        text: '上传时间',
        dataIndex: 'AddTime',
        width: 150
    }]
});