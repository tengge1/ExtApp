
Ext.define('App.store.personnel.DeptTree', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.depttreelist',
    storeId: 'depttreelist',

    model: 'App.model.personnel.Dept',

    proxy: {
        type: 'ajax',
        url: '/api/Dept/List',
        reader: 'json'
    },

    autoSync: true,
    autoLoad: true,

    listeners: {
        load: function (sender, records, successful, operation, node, eOpts) { // 数据加载
            if (!successful) {
                return;
            }
            var root = {
                ID: 0,
                PID: null,
                Name: '顶级机构',
                id: 0,
                text: '顶级机构',
                expanded: true,
                leaf: false,
                children: []
            };
            sender.fillTree(root, records, sender);
            sender.setRoot(root);
        }
    },

    fillTree: function (node, records, sender) { // 构建一棵树
        var id = node.ID;
        for (var i = 0; i < records.length; i++) {
            var record = records[i];
            if (record.data.PID != id) {
                continue;
            }

            var node1 = {
                ID: record.raw.ID,
                PID: record.raw.PID,
                Name: record.raw.Name,
                id: record.raw.ID,
                text: record.raw.Name,
                expanded: id == 0 ? true : false,
                children: []
            };

            // 判断是否有子节点
            var leaf = true;
            for (var j = 0; j < records.length; j++) {
                var record1 = records[j];
                if (record1.data.PID == record.data.ID) {
                    leaf = false;
                    break;
                }
            }
            node1.leaf = leaf;

            // 添加子节点
            sender.fillTree(node1, records, sender);
            node.children.push(node1);
        }
    }
});