
// ------- 用户Store -------

Ext.define('App.store.personnel.User', {
    extend: 'Ext.data.Store',
    alias: 'store.userlist',
    storeId: 'userlist',

    model: 'App.model.personnel.User',

    proxy: {
        type: 'ajax',
        url: '/api/User/List',
        reader: 'json',
        startParam: 'firstResult',
        limitParam: 'maxResults',
        extraParams: {
            name: ''
        }
    }
});