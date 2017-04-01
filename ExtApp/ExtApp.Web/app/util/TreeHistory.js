
// ----------- 记录树节点状态并恢复 -------------

Ext.define('App.util.TreeHistory', {
    extend: Ext.Base,

    // 所有展开的节点
    expandedNodes: [],

    // 所有选择的节点
    selectedNodes: [],

    // 所有勾选的节点
    checkedNodes: [],

    // 重置
    reset: function () {
        this.expandedNodes = [];
        this.selectedNodes = [];
        this.checkedNodes = [];
    },

    // 保存树的状态
    save: function (tree) {
        this.reset();
        var root = tree.getRootNode();
        this._saveAll(root);

        // 记录被选中的节点
        var selected = tree.getSelection();
        for (var i = 0; i < selected.length; i++) {
            var node = selected[i];
            var path = node.getPath();
            this.selectedNodes.push(path);
        }
    },

    // 恢复树的状态
    restore: function (tree) {
        tree.collapseAll();
        for (var i = 0; i < this.expandedNodes.length; i++) {
            var path = this.expandedNodes[i];
            tree.expandPath(path);
        }
        for (var i = 0; i < this.selectedNodes.length; i++) {
            var path = this.selectedNodes[i];
            tree.selectPath(path);
        }
    },

    // 遍历所有节点，并记录所需节点状态
    _saveAll: function (node) {
        // 记录当前结点状态
        var data = node.data;
        var path = node.getPath();
        if (data.expanded) {
            this.expandedNodes.push(path);
        }
        if (data.checked) {
            this.checkedNodes.push(path);
        }

        // 遍历子节点
        var childNodes = node.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            var node1 = childNodes[i];
            this._saveAll(node1);
        }
    }
});