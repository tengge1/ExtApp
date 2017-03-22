
// ---------------- 性别渲染器 ------------------

Ext.define('App.renderer.SexRenderer', {
    extend: 'Ext.Base',

    render: function (value) {
        if (value == 1) {
            return '男';
        } else if (value == 2) {
            return '女';
        } else {
            return value;
        }
    }
});