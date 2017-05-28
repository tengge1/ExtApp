
Ext.define('App.app.accordion.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menu',

    init: function () {
        var view = this.getView();
        var store = Ext.create('App.app.store.MenuTreeAuth');
        store.on('load', function (sender, records, successful, operation, node, eOpts) {
            if (!successful) {
                return;
            }
            if (node.id == '0') { // 第一级菜单，创建折叠面板
                for (var i = 0; i < records.length; i++) {
                    var record = records[i];
                    var tree = Ext.create('Ext.tree.Panel', {
                        title: record.data.text,
                        iconCls: record.data.iconCls,
                        root: {
                            id: record.data.id,
                            text: record.data.text,
                            leaf: false,
                            expandable: true,
                            expanded: true
                        },
                        rootVisible: false,
                        store: Ext.create('App.app.store.MenuTreeAuth', {
                            authorize: true
                        }),
                        listeners: {
                            beforeload: function (store, operation, eOpts) {
                                this.mask('加载中...');
                            },
                            itemclick: view.controller.onTreeItemClick,
                            load: function (view, records, successful, operation, node, eOpts) {
                                this.unmask();
                            }
                        }
                    });
                    tree.setRootNode(record);
                    view.add(tree);
                }
            }
        });
    },

    onTreeItemClick: function (view, record, item, index, e, eOpts) { // 点击菜单树的节点
        // 先判断是否包含子节点
        if (!record.data.leaf) { // 该节点包含子节点
            if (record.isExpanded()) { // 该节点已经展开
                view.collapse(record);
            } else { // 该节点尚未展开
                view.expand(record);
            }
            return;
        }

        // 获取菜单数据
        var text = record.data.text;
        var url = record.data.Url;
        if (url == undefined || url == null || url == '') {
            App.notify('消息', '该功能开发中...');
            return;
        }

        // 标签页存在就切换标签页，不存在就添加标签页
        var tp = this.getView().up('viewport').down('panel[region=center]');
        var p = tp.items.findBy(function (item) {
            return item.title == text;
        });

        if (p != null) {
            tp.setActiveTab(p);
            return;
        }
        App.query('viewport').mask('请稍后...');
        var openType = record.data.OpenTypeCode;
        if (record.data.UrlTypeCode == 'ExtJsClass') { // ExtJs类
            switch (openType) { // 打开方式
                case 'NoIframe': // 非iframe方式
                    try {
                        p = Ext.create(url);
                    } catch (e) {
                        App.query('viewport').unmask();
                        App.notify('消息', '该URL不存在！');
                        return;
                    }
                    tp.add(p);
                    tp.setActiveTab(p);
                    App.query('viewport').unmask();
                    break;
                case 'Iframe': // iframe方式
                    p = Ext.create('Ext.Container', {
                        title: record.data.Name,
                        closable: true,
                        html: '<iframe src="Default.aspx?cls=' + url + '" width="100%" height="100%" frameborder="0" scrolling="auto" onload="App.query(\'viewport\').unmask();"></iframe>'
                    });
                    tp.add(p);
                    tp.setActiveTab(p);
                    break;
                case 'Dialog': // 对话框方式
                    p = Ext.create('Ext.window.Window', {
                        title: record.data.Name,
                        width: '90%',
                        height: '90%',
                        closable: true,
                        modal: true,
                        html: '<iframe src="Default.aspx?cls=' + url + '" width="100%" height="100%" frameborder="0" scrolling="auto" onload="App.query(\'viewport\').unmask();"></iframe>'
                    });
                    p.show();
                    App.query('viewport').unmask();
                    break;
                case 'Top': // 顶层窗口打开
                    App.query('viewport').unmask();
                    top.window.location = 'Default.aspx?cls=' + url;
                    break;
                case 'Blank': // 新选项卡
                    App.query('viewport').unmask();
                    window.open('Default.aspx?cls=' + url, '_blank');
                    break;
            }
        } else { // 普通url
            switch (openType) { // 打开方式
                case 'NoIframe': // 非iframe方式
                case 'Iframe': // iframe方式
                    p = Ext.create('Ext.Container', {
                        title: record.data.Name,
                        closable: true,
                        html: '<iframe src="' + url + '" width="100%" height="100%" frameborder="0" scrolling="auto" onload="App.query(\'viewport\').unmask();"></iframe>'
                    });
                    tp.add(p);
                    tp.setActiveTab(p);
                    break;
                case 'Dialog': // 对话框方式
                    p = Ext.create('Ext.window.Window', {
                        title: record.data.Name,
                        width: '90%',
                        height: '90%',
                        closable: true,
                        modal: true,
                        html: '<iframe src="' + url + '" width="100%" height="100%" frameborder="0" scrolling="auto" onload="App.query(\'viewport\').unmask();"></iframe>'
                    });
                    p.show();
                    App.query('viewport').unmask();
                    break;
                case 'Top': // 顶层窗口打开
                    App.query('viewport').unmask();
                    top.window.location = url;
                    break;
                case 'Blank': // 新选项卡
                    App.query('viewport').unmask();
                    window.open(url, '_blank');
                    break;
            }
        }
    }
});
