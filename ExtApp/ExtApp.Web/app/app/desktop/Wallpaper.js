
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
            url: '/images/wallpapers/Blue-Sencha.jpg',
            leaf: true
        }, {
            id: 3,
            text: 'Dark-Sencha',
            url: '/images/wallpapers/Dark-Sencha.jpg',
            leaf: true
        }, {
            id: 4,
            text: 'Wood-Sencha',
            url: '/images/wallpapers/Wood-Sencha.jpg',
            leaf: true
        }, {
            id: 5,
            text: 'blue',
            url: '/images/wallpapers/blue.jpg',
            leaf: true
        }, {
            id: 6,
            text: 'desk',
            url: '/images/wallpapers/desk.jpg',
            leaf: true
        }, {
            id: 7,
            text: 'desktop',
            url: '/images/wallpapers/desktop.jpg',
            leaf: true
        }, {
            id: 8,
            text: 'desktop2',
            url: '/images/wallpapers/desktop2.jpg',
            leaf: true
        }, {
            id: 9,
            text: 'sky',
            url: '/images/wallpapers/sky.jpg',
            leaf: true
        }]
    }
});
