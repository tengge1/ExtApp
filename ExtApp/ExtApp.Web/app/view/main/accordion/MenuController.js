
Ext.define('App.view.main.accordion.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menu',

    init: function () {
        var view = this.getView();
        var store = Ext.create('App.store.authority.MenuTreeAuth');
        store.on('load', function (sender, records, successful, operation, node, eOpts) {
            if (!successful) {
                return;
            }
            if (node.id == '0') { // 第一级菜单，创建折叠面板
                for (var i = 0; i < records.length; i++) {
                    var record = records[i];
                    var tree = Ext.create('Ext.tree.Panel', {
                        title: record.data.text,
                        root: {
                            id: record.data.id,
                            text: record.data.text,
                            leaf: false,
                            expandable: true,
                            expanded: true
                        },
                        rootVisible: false,
                        store: Ext.create('App.store.authority.MenuTreeAuth', {
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

        // 创建相应类
        var p = Ext.create(url);
        var tp = Ext.getCmp('tpMain');

        // 显示蒙版
        var mask = Ext.create('Ext.LoadMask', {
            target: tp,
            msg: '加载中...',
            indicator: true,
            centered: true
        });
        mask.show();

        // 标签页存在就切换标签页，不存在就添加标签页
        var p1 = tp.items.findBy(function (item) {
            return item.title == text;
        });
        if (p1 == null) {
            tp.add(p);
            tp.setActiveTab(p);
        } else {
            tp.setActiveTab(p1);
        }
        mask.hide();
    }
});
