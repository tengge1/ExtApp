
Ext.define('App.view.main.accordion.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menu',

    init: function () {
        var view = this.getView();
        var store = Ext.create('App.store.authority.MenuTree');
        store.on('load', function (sender, records, successful, operation, node, eOpts) {
            if (!successful) {
                return;
            }
            if (node.id == '0') { // 第一级菜单，创建折叠面板
                for (var i = 0; i < records.length; i++) {
                    var record = records[i];
                    var tree = Ext.create('Ext.tree.Panel', {
                        title: record.data.text
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
        var url = record.data.url;
        if (url == undefined || url == null || url == '') {
            Ext.Msg.alert('消息', '该功能开发中...');
            return;
        }

        // 创建相应类
        var p = Ext.create(url);
        var tp = Ext.getCmp('tpMain');

        // 显示蒙版
        tp.mask();

        // 标签页存在就切换标签页，不存在就添加标签页
        var p1 = tp.items.findBy(function (item) {
            if (item.title == text) {
                return true;
            }
            return false;
        });
        if (p1 == null) {
            tp.add(p);
            tp.setActiveTab(p);
        } else {
            tp.setActiveTab(p1);
        }
        tp.unmask();
    }
});
