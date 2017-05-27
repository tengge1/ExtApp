
Ext.define('App.view.workflow.design.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.workflowedit',

    onSaveClick: function () {
        var win = this.getView();
        var form = win.down('form').getForm();
        if (!form.isValid()) {
            return;
        }
        var values = form.getValues();

        var url = '';
        if (values.ID == '' || values.ID == 0) {
            url = '/api/Workflow/Add';
        } else {
            url = '/api/Workflow/Edit';
        }

        App.post(url, values, function (data) {
            var obj = JSON.parse(data);
            if (obj.Code == 200) {
                win.hide();
                var view = App.query('workflowlist');
                view.down('pagingtoolbar').moveFirst();
                App.notify('消息', obj.Msg);
            } else {
                App.alert('错误', obj.Msg);
            }
        });
    },

    onCancelClick: function () { // 点击取消按钮
        this.getView().hide();
    }
});