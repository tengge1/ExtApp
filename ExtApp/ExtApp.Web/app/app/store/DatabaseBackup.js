
Ext.define('App.store.core.DatabaseBackup', {
    extend: 'Ext.data.Store',
    alias: 'store.databasebackuplist',
    storeId: 'databasebackuplist',

    model: 'App.model.core.DatabaseBackup',

    proxy: {
        type: 'ajax',
        url: '/api/DatabaseBackup/List',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        },
        startParam: 'firstResult',
        limitParam: 'maxResults'
    }
});