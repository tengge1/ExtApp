
// ---------- 地图展示控件 -----------

Ext.define('App.widget.MapShow', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mapshow',

    requires: [
        'Ext.ux.IFrame'
    ],

    onMapInit: function (sender) { // 地图初始化完成，可以进行绘制了

    },

    drawPoint: function (point, options) { // 画点
        var frame = this.down('uxiframe').getFrame();
        frame.contentWindow.drawPoint(point, options);
    },

    drawPolyline: function (polyline, options) { // 画折线
        var frame = this.down('uxiframe').getFrame();
        frame.contentWindow.drawPolyline(polyline, options);
    },

    drawPolygon: function (polygon, options) { // 画多边形
        var frame = this.down('uxiframe').getFrame();
        frame.contentWindow.drawPolygon(polygon, options);
    },

    width: 800,
    height: 400,
    layout: 'fit',

    items: [{
        xtype: 'uxiframe',
        initComponent: function () {
            this.src = 'packages/map/mapShow.html';
            this.callParent();
        }
    }]
});