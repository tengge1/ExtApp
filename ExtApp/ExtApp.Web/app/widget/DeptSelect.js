
// -------------------- 机构下拉选择控件 --------------------

Ext.define('App.widget.DeptSelect', {
    extend: 'Ext.ux.TreePicker',
    alias: 'widget.deptselect',

    fieldLabel: '机构',
    valueField: 'ID',
    displayField: 'Name',
    store: Ext.getStore('depttreelist', 'App.store.personnel.DeptTree')
});