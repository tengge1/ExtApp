
// ---------- 地图绘制控件 -----------

Ext.define('App.widget.MapDraw', {
    extend: 'Ext.window.Window',

    type: 'point', // 绘制类型

    title: '地图绘制',
    width: 800,
    height: 400,
    closable: true,
    maximizable: true,

    buttons: [{
        text: '确定',
        handler: function () {

        }
    }, {
        text: '取消',
        handler: function (sender) {
            sender.up('window').hide();
        }
    }],

    listeners: {
        afterrender: function (sender) {
            sender.setHtml('<iframe src="packages/map/mapDraw.html?type=' + sender.type + '" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>');
        }
    }
});