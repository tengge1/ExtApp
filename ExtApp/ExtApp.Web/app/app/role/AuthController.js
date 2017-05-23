
Ext.define('App.view.authority.role.AuthController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.roleauth',

    load: function (ID) {
        var view = this.getView();
        view.down('hidden').setValue(ID);
        var tree = view.down('treepanel');
        tree.collapseAll();
        var store = tree.getStore();
        store.removeAll();
        store.proxy.setExtraParams({
            RoleID: ID
        });
        store.load({
            callback: function () {
                tree.expandAll();
            }
        });
    },

    onCheckChange: function (node, checked) {
        node.cascade(function (node) {
            node.set('checked', checked);
            return true;
        });
        var pNode = node.parentNode;
        for (; pNode.id != '0'; pNode = pNode.parentNode) {
            if (checked) {
                pNode.set('checked', checked);
            }
        }
    },

    onOKClick: function () {
        var view = this.getView();
        var roleID = view.down('hidden').getValue();
        var checkedNodes = view.down('treepanel').getChecked();
        var menuIDs = [];
        for (var i = 0; i < checkedNodes.length; i++) {
            menuIDs.push(checkedNodes[i].data.ID);
        }
        App.post('/api/RoleMenu/Save', {
            RoleID: roleID,
            MenuIDs: menuIDs
        }, function (r) {
            var obj = JSON.parse(r);
            if (obj.Code == 200) {
                view.hide();
                App.notify('消息', obj.Msg);
            } else {
                App.alert('消息', obj.Msg);
            }
        });
    },

    onCancelClick: function () {
        this.getView().hide();
    }
});