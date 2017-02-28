/**
* 编辑字典子项控制器
*/

Ext.define('App.view.sys.dic.EditItemController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dicedititem',

    setDicID: function (dicID) { // 设置字典ID
        var view = this.getView();
        var form = view.down('form').getForm();
        form.setValues({
            PID: dicID
        });
    },

    onSaveClick: function () { // 点击保存按钮
        var view = this.getView();
        var form = view.down('form');
        if (!form.isValid()) {
            return;
        }
        var values = form.getValues();
        values.Dict = {
            ID: values.PID
        };
        values.Status = 0;
        Ext.Ajax.request({
            url: '/api/DicItem/Edit',
            method: 'POST',
            jsonData: values,

            success: function (response, opts) {
                var data = response.responseText;
                var obj = Ext.JSON.decode(data);
                if (obj.Code == 200) {
                    view.hide();
                    var controller = Ext.ComponentQuery.query('diclist')[0].getController();
                    controller.refreshDicItem();

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