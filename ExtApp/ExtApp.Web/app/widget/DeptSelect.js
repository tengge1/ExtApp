
// -------------------- 机构下拉选择控件 --------------------

Ext.define('App.widget.DeptSelect', {
    extend: 'Ext.ux.TreePicker',
    alias: 'widget.deptselect',

    idField: 'ID',
    displayField: 'text',
    fieldLabel: '机构',
    store: Ext.create('App.store.personnel.DeptTree'),

    reset: function () {
        this.setValue('');
    }
});