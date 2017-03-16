
// ---------------- 组织机构添加Controller --------------------

Ext.define('App.view.personnel.dept.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deptadd',

    reset: function () { // 重置添加窗体
        var view = this.getView();
        view.down('form').getForm().reset();
        view.down('deptselect').reset();
    },

    onSaveClick: function () { // 点击保存按钮
        var view = this.getView();
        var form = view.down('form');
        if (!form.isValid()) {
            App.notify('消息', '请填写完整');
            return;
        }
        var values = form.getValues();

        App.post('/api/Dept/Add', values, function (data) {
            var obj = JSON.parse(data);
            if (obj.Code == 200) { // 成功
                view.hide();
                var list = Ext.ComponentQuery.query('deptlist')[0];
                list.controller.refresh();
                App.notify('消息', '操作成功');
            } else { // 失败
                App.alert('消息', obj.Msg);
            }
        });
    },

    onCancelClick: function () { // 点击取消按钮
        this.getView().hide();
    }
});