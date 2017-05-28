
Ext.define('App.app.desktop.Wallpaper', {
    extend: 'Ext.data.TreeStore',

    model: Ext.create('Ext.data.TreeModel', {
        fields: ['id', 'text', 'url']
    }),

    root: {
        id: 0,
        text: 'root',
        children: [{
            id: 1,
            text: "None",
            url: '',
            leaf: true
        }, {
            id: 2,
            text: 'Blue-Sencha',
            url: 'resources/images/wallpapers/Blue-Sencha.jpg',
            leaf: true
        }, {
            id: 3,
            text: 'Dark-Sencha',
            url: 'resources/images/wallpapers/Dark-Sencha.jpg',
            leaf: true
        }, {
            id: 4,
            text: 'Wood-Sencha',
            url: 'resources/images/wallpapers/Wood-Sencha.jpg',
            leaf: true
        }, {
            id: 5,
            text: 'blue',
            url: 'resources/images/wallpapers/blue.jpg',
            leaf: true
        }, {
            id: 6,
            text: 'desk',
            url: 'resources/images/wallpapers/desk.jpg',
            leaf: true
        }, {
            id: 7,
            text: 'desktop',
            url: 'resources/images/wallpapers/desktop.jpg',
            leaf: true
        }, {
            id: 8,
            text: 'desktop2',
            url: 'resources/images/wallpapers/desktop2.jpg',
            leaf: true
        }, {
            id: 9,
            text: 'sky',
            url: 'resources/images/wallpapers/sky.jpg',
            leaf: true
        }]
    }
});
