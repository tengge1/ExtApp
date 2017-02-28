/**
* 用户添加控制器
*/

Ext.define('App.view.sys.appMenu.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.appmenuedit',

    onSaveClick: function () { // 点击保存按钮
        var win = this.getView();
        var form = win.down('form');
        if (!form.isValid()) {
            return;
        }
        var values = form.getValues();
        Ext.Ajax.request({
            url: '/api/AppMenu/Edit',
            method: 'POST',
            params: values,
            success: function (response, opts) {
                var data = response.responseText;
                var obj = Ext.JSON.decode(data);
                if (obj.Code == 200) { // 添加成功
                    win.hide();
                    var list = Ext.ComponentQuery.query('appmenulist')[0];
                    list.getController().refresh();
                } else { // 添加失败
                    Ext.Msg.alert('消息', obj.Msg);
                }
            },
            failure: function (response, opts) {
                Ext.Msg.alert('消息', response.responseText);
            }
        });
    },

    onCancelClick: function () { // 点击取消按钮
        this.getView().hide();
    }
});