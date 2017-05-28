
// -------------------- 机构下拉选择控件 --------------------

Ext.define('App.widget.DeptSelect', {
    extend: 'Ext.ux.TreePicker',
    alias: 'widget.deptselect',

    idField: 'ID',
    displayField: 'text',
    fieldLabel: '机构',
    store: Ext.create('App.app.store.DeptTree'),

    reset: function () {
        this.setValue('');
    }
});