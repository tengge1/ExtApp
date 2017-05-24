
Ext.define('App.app.store.Workflow', {
    extend: 'Ext.data.Store',
    alias: 'store.workflowlist',
    storeId: 'workflowlist',

    model: 'App.app.model.Workflow',

    proxy: {
        type: 'ajax',
        url: '/api/Workflow/List',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        },
        startParam: 'firstResult',
        limitParam: 'maxResults'
    },

    autoSync: true,
    autoLoad: true
});