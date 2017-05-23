
Ext.define('App.app.store.DatabaseBackup', {
    extend: 'Ext.data.Store',
    alias: 'store.databasebackuplist',
    storeId: 'databasebackuplist',

    model: 'App.app.model.DatabaseBackup',

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