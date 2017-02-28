/**
* 记事本模块
*/

Ext.define('App.view.main.desktop.Notepad', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.form.field.HtmlEditor'
    ],

    id: 'notepad',

    init: function () {
        this.launcher = {
            text: '记事本',
            iconCls: 'notepad'
        }
    },

    createWindow: function () {
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('notepad');
        if (!win) {
            win = desktop.createWindow({
                id: 'notepad',
                title: '记事本',
                width: 600,
                height: 400,
                iconCls: 'notepad',
                animCollapse: false,
                border: false,
                hideMode: 'offsets',

                layout: 'fit',
                items: [
                    {
                        xtype: 'htmleditor',
                        id: 'notepad-editor',
                        value: [
                            '一些 <b>富文本</b> <span style="color: rgb(255, 0, 0)">文字</span> 显示在 <u>这里</u><br>',
                            '快试试'
                        ].join('')
                    }
                ]
            });
        }
        return win;
    }
});
