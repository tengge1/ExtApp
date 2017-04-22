# ExtApp v1.0.0

ExtApp是一个基于三层架构，使用NHibernate、API Controller和ExtJs创建的，用于简化政府和企业应用开发的单页Web应用框架。

  - 使用NHibernate Code First自动创建数据表
  - 使用NHibernate Attribute通过属性配置映射，不需要手工编写xml文件
  - PC和手机端共享同样的API Controller接口
  - ExtJs动态加载js文件
  - 旧版本Demo（任意用户名和密码）：https://tengge1.github.io/ExtApp
  - 用户：管理员（admin,123）、测试（test,123）

### 主要功能

ExtApp提供全面的政府级和企业级Web应用解决方案：

* 组织机构管理、用户管理
* 角色管理、角色权限、菜单管理
* 数据字典、字典项管理
* 系统配置节点、系统配置管理
* 系统日志

我们所做的一切都是为了您能更好更快地进行Web应用的开发！！！

### 使用说明

* 使用Visual Studio 2015打开ExtApp/ExtApp.sln。
* 创建ExtApp数据库，执行ExtApp/ExtApp.Web/App_Data/ExtApp.sql生成数据库。
* 修改ExtApp/ExtApp.Web/Web.config中的连接字符串，生成并运行。

### 目录说明

以下是该项目部分目录和文件的说明：

```
Demo - 老版本项目演示，更新很慢
Doc - 项目文档
ExtApp - 项目源代码
Licenses - 授权相关文件
.gitattributes - Git上传属性
.gitignore - Git上传文件类型设置
LICENSE - 授权文件
README.md - 本文件
README.old.md - 旧项目ExtJs-Mvc-Framework说明文件
```

### 开发环境

这里建议您使用以下开发环境：

* Visual Studio 2015+
* SQL Server 2008+
* IIS8.0+

### 相关网站

这是本项目中使用的部分相关插件：

| 名称 | 网址 |
| ------ | ------ |
| **ExtApp** | https://github.com/tengge1/ExtApp |
| NHibernate | http://nhibernate.info/ |
| ExtJs | http://extjs.org.cn/ |
