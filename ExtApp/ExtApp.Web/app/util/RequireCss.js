
// ----------- 动态引入css文件 --------------

Ext.define('App.util.RequireCss', {
    extend: 'Ext.Base',

    require: function (paths) {
        if (!(paths instanceof Array)) {
            throw 'paths必须是数组';
        }
        for (var i = 0; i < paths.length; i++) {
            var path = paths[i];
            var link = Ext.getHead().child('link[name="' + path + '"]');
            if (link == null) {
                link = Ext.getHead().appendChild({
                    tag: 'link',
                    rel: 'stylesheet',
                    href: ''
                });
                link.set({
                    href: path
                });
            }
        }
    }
});