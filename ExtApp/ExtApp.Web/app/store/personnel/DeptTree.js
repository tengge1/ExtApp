
// ------------------ 组织机构树形Store -----------------------

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
            node.removeAll();
            var root = {
                ID: 0,
                PID: null,
                Name: '顶级机构',
                id: 0,
                text: '顶级机构',
                expanded: true,
                leaf: false
            };
            node.appendChild(root);
            node.lastChild.data.ID = root.ID;
            node.lastChild.data.PID = root.PID;
            node.lastChild.data.Name = root.Name;
            sender.fillTree(root, node.lastChild, records, sender); // 当前结点，节点，所有记录
        }
    },

    fillTree: function (node, tree, records, sender) { // 构建一棵树
        var id = node.ID;
        for (var i = 0; i < records.length; i++) {
            var record = records[i];
            if (record.raw.PID != id) {
                continue;
            }

            var node1 = {
                ID: record.raw.ID,
                PID: record.raw.PID,
                Name: record.raw.Name,
                id: record.raw.ID,
                text: record.raw.Name,
                expanded: id == 0 ? true : false
            };

            // 判断是否有子节点
            var leaf = true;
            for (var j = 0; j < records.length; j++) {
                var record1 = records[j];
                if (record1.raw.PID == record.raw.ID) {
                    leaf = false;
                    break;
                }
            }
            node1.leaf = leaf;
            tree.appendChild(node1);
            tree.lastChild.data.ID = node1.ID;
            tree.lastChild.data.PID = node1.PID;
            tree.lastChild.data.Name = node1.Name;

            // 添加子节点
            sender.fillTree(node1, tree.lastChild, records, sender);
        }
    }
});