
// -------------------- 机构下拉选择控件 --------------------

Ext.define('App.widget.DeptSelect', {
    extend: 'Ext.ux.TreePicker',
    alias: 'widget.deptselect',

    fieldLabel: '机构',
    valueField: 'ID',
    displayField: 'Name',
    store: Ext.create('App.store.personnel.DeptTree'),

    reset: function () { // 重置控件，刷新机构树
        this.getStore().reload();
    }
});