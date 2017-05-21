
Ext.define('App.model.authority.Menu', {
    extend: 'Ext.data.Model',

    idProperty: 'ID',
    fields: [
        'ID',
        {
            name: 'PID',
            mapping: function (value) {
                if (value.PMenu == null) {
                    return 0;
                }
                return value.PMenu.ID;
            }
        },
        {
            name: 'PName',
            mapping: function (value) {
                if (value.PMenu == null) {
                    return '顶级菜单';
                }
                return value.PMenu.Name;
            }
        },
        'Code',
        'Name',
        {
            name: 'UrlTypeID',
            mapping: function (value) {
                if (value.UrlType == null) {
                    return 0;
                }
                return value.UrlType.ID;
            }
        },
        {
            name: 'UrlTypeCode',
            mapping: function (value) {
                if (value.UrlType == null) {
                    return '';
                }
                return value.UrlType.Code;
            }
        },
        {
            name: 'UrlTypeName',
            mapping: function (value) {
                if (value.UrlType == null) {
                    return '';
                }
                return value.UrlType.Name;
            }
        },
        'Url',
        {
            name: 'OpenTypeID',
            mapping: function (value) {
                if (value.OpenType == null) {
                    return 0;
                }
                return value.OpenType.ID;
            }
        },
        {
            name: 'OpenTypeCode',
            mapping: function (value) {
                if (value.OpenType == null) {
                    return '';
                }
                return value.OpenType.Code;
            }
        },
        {
            name: 'OpenTypeName',
            mapping: function (value) {
                if (value.OpenType == null) {
                    return '';
                }
                return value.OpenType.Name;
            }
        },
        {
            name: 'IconTypeID',
            mapping: function (value) {
                if (value.IconType == null) {
                    return 0;
                }
                return value.IconType.ID;
            }
        },
        {
            name: 'IconTypeCode',
            mapping: function (value) {
                if (value.IconType == null) {
                    return '';
                }
                return value.IconType.Code;
            }
        },
        {
            name: 'IconTypeName',
            mapping: function (value) {
                if (value.IconType == null) {
                    return '';
                }
                return value.IconType.Name;
            }
        },
        'Icon',
        'Sort',
        'Status',
        'Comment'
    ]
});