
// ----------- 动态引入js文件 --------------

Ext.define('App.util.RequireJs', {
    extend: 'Ext.Base',

    require: function (paths, callback) {
        if (!(paths instanceof Array)) {
            throw 'paths必须是数组';
        }
        for (var i = 0; i < paths.length; i++) {
            var path = paths[i];
            var script = Ext.getHead().child('script[name="' + path + '"]');
            if (script == null) {
                script = Ext.getHead().appendChild({
                    tag: 'script',
                    src: ''
                });
                script.set({
                    src: path
                });
            }
        }
    }
});