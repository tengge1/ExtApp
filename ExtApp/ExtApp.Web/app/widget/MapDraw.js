
// ---------- 地图绘制控件 -----------

Ext.define('App.widget.MapDraw', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.ux.IFrame'
    ],

    type: 'point', // 绘制类型

    title: '地图绘制',
    width: 800,
    height: 400,
    closable: true,
    maximizable: true,
    layout: 'fit',

    items: [{
        xtype: 'uxiframe',
        //listeners: {
        //    beforerenderer: function (sender) {
        //        var win = sender.up('window');
        //        sender.load('packages/map/mapDraw.html?type=' + win.type);
        //    }
        //},

        initComponent: function () {
            var win = this.up('window');
            this.src = 'packages/map/mapDraw.html?type=' + win.type;
            this.callParent();
        }
    }],

    buttons: [{
        text: '确定',
        handler: function (sender) {
            var iframe = sender.up('window').down('iframe');
            debugger;
        }
    }, {
        text: '取消',
        handler: function (sender) {
            sender.up('window').hide();
        }
    }],

    listeners: {
        //afterrender: function (sender) {
        //    sender.setHtml('<iframe src="packages/map/mapDraw.html?type=' + sender.type + '" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>');
        //}
    }
});