
Ext.define('App.app.test.MapShowTest', {
    extend: 'Ext.panel.Panel',

    requires: [
        'App.widget.MapShow'
    ],

    layout: 'form',
    autoScroll: true,

    items: [{
        xtype: 'fieldcontainer',
        items: [{
            xtype: 'mapshow',
            onMapInit: function (sender) {
                sender.drawPoint({ "lat": 39.89235, "lng": 116.43414 });
                sender.drawPolyline([{ "lat": 39.91606, "lng": 116.33904 }, { "lat": 39.92738, "lng": 116.38985 }, { "lat": 39.92106, "lng": 116.43242 }, { "lat": 39.90579, "lng": 116.45988 }, { "lat": 39.89762, "lng": 116.45199 }]);
                sender.drawPolygon([[{ "lat": 39.89551, "lng": 116.315 }, { "lat": 39.88919, "lng": 116.37852 }, { "lat": 39.86917, "lng": 116.38298 }, { "lat": 39.86232, "lng": 116.36135 }, { "lat": 39.86126, "lng": 116.33354 }]]);
            }
        }]
    }, {
        xtype: 'textarea',
        name: 'code1',
        fieldLabel: '控件',
        value: `{
            xtype: 'mapshow',
            onMapInit: function (sender) {
                sender.drawPoint({ "lat": 39.89235, "lng": 116.43414 });
                sender.drawPolyline([{ "lat": 39.91606, "lng": 116.33904 }, { "lat": 39.92738, "lng": 116.38985 }, { "lat": 39.92106, "lng": 116.43242 }, { "lat": 39.90579, "lng": 116.45988 }, { "lat": 39.89762, "lng": 116.45199 }]);
                sender.drawPolygon([[{ "lat": 39.89551, "lng": 116.315 }, { "lat": 39.88919, "lng": 116.37852 }, { "lat": 39.86917, "lng": 116.38298 }, { "lat": 39.86232, "lng": 116.36135 }, { "lat": 39.86126, "lng": 116.33354 }]]);
            }
        }`
    }],

    initComponent: function () {
        this.callParent();
        var view = this;
        Ext.create('App.util.RequireCss').require(['packages/CodeMirror/lib/codemirror.css']);
        require([
            "packages/CodeMirror/lib/codemirror", "packages/CodeMirror/mode/htmlmixed/htmlmixed"
        ], function (CodeMirror) {
            var editor = CodeMirror.fromTextArea(view.down('textarea[name=code1]').inputEl.dom, {
                lineNumbers: true,
                mode: "javascript",
                readOnly: true
            });
            editor.setSize('auto', '250px');
        });
    }
});