/**
* 搜索栏FormPanel（frame去掉边框）
*/

Ext.define('App.widget.SearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.searchform',

    layout: 'hbox',
    border: false,
    frame: true,
    style: 'border:none;',
    margin: 0,
    padding: 0,
    flex: 1,

    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 40
    }
});