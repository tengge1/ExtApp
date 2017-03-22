
Ext.define('App.store.core.ConfigSection', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.configsectionlist',
    storeId: 'configsectionlist',

    model: 'App.model.sys.ConfigSection',

    proxy: {
        type: 'ajax',
        url: '/api/ConfigSection/List',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    listeners: {
        load: function (store, records, successful, operation, node, opts) {
            this.getRootNode().removeAll();
            for (var i in records) {
                var record = records[i];
                var node = this.getById(record.data.PID); // 父节点

                // 判断有无子节点
                var leaf = true;
                for (var j in records) {
                    if (record.data.ID == records[j].data.PID) {
                        leaf = false;
                        break;
                    }
                }

                // 添加节点
                node.appendChild({
                    text: record.data.Name,
                    leaf: leaf,
                    ID: record.data.ID,
                    PID: record.data.PID,
                    Name: record.data.Name,
                    Layer: record.data.Layer,
                    Status: record.data.Status,
                    Memo: record.data.Memo
                });
            }
        },
    }
});