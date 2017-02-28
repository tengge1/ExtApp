/**
* 菜单视图控制器
*/

Ext.define('App.view.main.accordion.appMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.appmenu',

    init: function () { // 初始化菜单
        // 获取数据
        var store = Ext.create('App.store.sys.AppMenu');
        var view = this.getView();
        store.load({
            callback: function (records, operation, success) {
                var data = store.getData();

                // 创建页面元素
                var items = new Array();
                data.each(function (i) {
                    if (i.data.PID == 0) { // 折叠面板中只添加pid为0的菜单
                        // 获取折叠面板的下一级菜单并判断是否有子项
                        var array1 = new Array();
                        data.each(function (i1) {
                            if (i1.data.PID == i.data.ID) {
                                // 判断是否有子节点
                                var leaf = true;
                                data.each(function (i11) {
                                    if (i11.data.PID == i1.data.ID) {
                                        leaf = false;
                                    }
                                });
                                array1.push({
                                    nodeID: i1.data.ID,
                                    text: i1.data.Name,
                                    leaf: leaf,
                                    expanded: false,
                                    url: i1.data.Url,
                                    iconCls: i1.data.Icon,
                                    animate: true
                                });
                            }
                        });
                        items.push({
                            title: i.data.Name,
                            rootVisible: false,
                            root: {
                                nodeID: i.data.ID,
                                expanded: false,
                                children: array1
                            },
                            listeners: {
                                beforeitemexpand: 'onTreeItemExpand', // 展开树的节点
                                itemclick: 'onTreeItemClick' // 点击树的节点
                            }
                        });
                    }
                });
                view.add(items);
            }
        });
    },

    onTreeItemExpand: function (node, opts) { // 展开树的节点
        if (node.childNodes.length > 0) {
            return;
        }
        var store = Ext.create('App.store.sys.AppMenu');
        store.load({
            callback: function (records, operation, success) {
                var data = store.getData();
                var array = new Array();
                data.each(function (i) {
                    if (i.data.PID == node.data.nodeID) {
                        // 查询有无子节点
                        var leaf = true;
                        data.each(function (i1) {
                            if (i1.data.PID == i.data.ID) {
                                leaf = false;
                            }
                        });
                        array.push({
                            nodeID: i.data.ID,
                            text: i.data.Name,
                            leaf: leaf,
                            expanded: false,
                            url: i.data.Url,
                            iconCls: i.data.Icon,
                            animate: true
                        });
                    }
                });
                node.appendChild(array);
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
