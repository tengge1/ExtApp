
// ---------------- 组织机构添加Controller --------------------

Ext.define('App.view.personnel.dept.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deptadd',

    onSaveClick: function () { // 点击保存按钮
        var win = this.getView();
        var form = win.down('form');
        if (!form.isValid()) {
            App.notify('消息', '请填写完整');
            return;
        }
        var values = form.getValues();

        App.post('/api/Dept/Add', values, function (data) {
            var obj = JSON.parse(data);
            if (obj.Code == 200) { // 成功
                win.hide();
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