
// -------------------- 菜单下拉选择控件 --------------------

Ext.define('App.widget.MenuSelect', {
    extend: 'Ext.ux.TreePicker',
    alias: 'widget.menuselect',

    idField: 'ID',
    displayField: 'text',
    fieldLabel: '菜单',
    store: Ext.create('App.store.authority.MenuTree'),

    reset: function () {
        this.setValue('');
    }
});
