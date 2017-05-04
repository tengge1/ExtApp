
// ---------- 地图展示控件 -----------

Ext.define('App.widget.MapDraw', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.ux.IFrame'
    ],

    onMapInit: function () { // 地图初始化完成，可以进行绘制了

    },

    drawPoint: function (point, options) { // 画点

    },

    drawPolyline: function (polyline, options) { // 画折线

    },

    drawPolygon: function (polygon, options) { // 画多边形

    },

    title: '地图展示',
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