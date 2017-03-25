
// -------------------- 机构下拉选择控件 --------------------

Ext.define('App.widget.DeptSelect', {
    extend: 'Ext.ux.TreePicker',
    alias: 'widget.deptselect',

    idField: 'id',
    displayField: 'text',
    fieldLabel: '机构',
    store: Ext.create('App.store.personnel.DeptTree'),

    reset: function () { // 重置控件，刷新机构树
        this.getStore().reload();
    }
});