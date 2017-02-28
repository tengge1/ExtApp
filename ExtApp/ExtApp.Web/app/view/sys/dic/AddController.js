/**
* 添加字典控制器
*/

Ext.define('App.view.sys.dic.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dicadd',

    onSaveClick: function () { // 点击保存按钮
        var form = this.getView().down('form');
        if (!form.isValid()) {
            return;
        }
        var values = form.getValues();
        var view = this.getView();
        Ext.Ajax.request({
            url: '/api/Dic/Add',
            method: 'POST',
            jsonData: values,

            success: function (response, opts) {
                var data = response.responseText;
                var obj = Ext.JSON.decode(data);
                if (obj.Code == 200) {
                    view.hide();
                    var controller = Ext.ComponentQuery.query('diclist')[0].getController();
                    controller.refreshDic();

                } else {
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