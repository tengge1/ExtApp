<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="ExtApp.Web.Login" %>

<!DOCTYPE html>

<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>登录</title>
    <link href="<%=theme %>" rel="stylesheet" />
    <link href="packages/extjs/icon.css" rel="stylesheet" />
    <link href="/resources/css/common.css" rel="stylesheet" />
    <script src="packages/extjs/ext-all-debug.js"></script>
    <script src="packages/extjs/locale/locale-zh_CN.js"></script>
    <script src="app/App.js"></script>
    <script>
        Ext.onReady(function () {
            Ext.create('Ext.container.Viewport', {
                layout: 'fit',
                items: Ext.create('App.app.Login')
            });
        });
    </script>
</head>
<body>
</body>
</html>
