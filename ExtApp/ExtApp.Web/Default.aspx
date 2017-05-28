<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ExtApp.Web.Default" %>

<!DOCTYPE html>

<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>ExtJs权限管理系统</title>
    <link href="<%=theme %>" rel="stylesheet" />
    <link href="packages/extjs/icon.css" rel="stylesheet" />
    <link href="resources/css/desktop.css" rel="stylesheet" />
    <link href="resources/css/common.css" rel="stylesheet" />
    <script src="packages/extjs/ext-all-debug.js"></script>
    <script src="packages/extjs/locale/locale-zh_CN.js"></script>
    <script src="app/App.js"></script>
    <script src="resources/js/jquery.js"></script>
    <script src="resources/js/require.js"></script>
    <script>
        Ext.require('App.app.desktop.Index');
        Ext.onReady(function () {
            var cls = App.getQueryString('cls');
            var p = null;
            if (cls == null) {
                if ('<%=style %>' == 'Desktop') {
                    new App.app.desktop.Index();
                    return;
                } else {
                    p = Ext.create('App.app.accordion.Index');
                }
            } else {
                p = Ext.create(cls, {
                    header: false,
                    border: false
                });
            }
            if (p != null) {
                Ext.create('Ext.container.Viewport', {
                    layout: 'fit',
                    listeners: {
                        beforerender: function (sender) {
                            sender.add(p);
                        }
                    }
                });
            }
        });
    </script>
</head>
<body>
</body>
</html>
