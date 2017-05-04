
// ---------- 地图绘制控件 -----------

Ext.define('App.widget.MapDraw', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.ux.IFrame'
    ],

    type: 'point', // 绘制类型
    value: null, // 值
    callback: null, // 回调函数

    getValue: function () { // 获取值
        return this.value;
    },

    title: '地图绘制',
    width: 800,
    height: 400,
    closable: true,
    maximizable: true,
    layout: 'fit',

    items: [{
        xtype: 'uxiframe',
        initComponent: function () {
            var win = this.up('window');
            this.src = 'packages/map/mapDraw.html?type=' + win.type;
            this.callParent();
        }
    }],

    buttons: [{
        text: '确定',
        handler: function (sender) {
            var win = sender.up('window');
            var frame = win.down('uxiframe').getFrame();
            win.value = frame.contentWindow.getValue();
            if (typeof (win.callback) == 'function') {
                win.callback(win.value);
            }
            win.hide();
        }
    }, {
        text: '取消',
        handler: function (sender) {
            sender.up('window').hide();
        }
    }]
});