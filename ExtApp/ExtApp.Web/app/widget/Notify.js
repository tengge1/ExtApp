
// ----------------- 右下角气泡弹窗 -----------------

Ext.define('App.widget.Notify', {
    extend: 'Ext.ux.window.Notification',

    title: '消息',
    width: 180,
    height: 100,
    position: 'br',
    manager: Ext.ComponentQuery.query('mainviewport')[0],
    slideInDuration: 800,
    slideBackDuration: 300,
    autoCloseDelay: 3000,
    slideInAnimation: 'bounceOut',
    slideBackAnimation: 'easeIn',
    spacing: 10,
    html: '',
    bodyPadding: 5
});
