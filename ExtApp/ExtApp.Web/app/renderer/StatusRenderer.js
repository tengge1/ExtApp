
// --------------------- 状态渲染器 --------------------------

Ext.define('App.renderer.StatusRenderer', {
    extend: 'Ext.Base',

    render: function (value) {
        if (value == 1) {
            return '启用';
        } else if (value == 0) {
            return '禁用';
        } else {
            return value;
        }
    }
});