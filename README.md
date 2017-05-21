# ExtApp v 1.0.4

ExtApp是一个基于三层架构，使用NHibernate、API Controller和ExtJs创建的，用于简化政府和企业应用开发的Web应用程序框架。

  - 使用NHibernate自动创建数据表。
  - 使用NHibernate Attribute通过属性配置映射。
  - PC和手机端共享同样的API Controller接口。
  - ExtJs动态加载js文件。
  - 支持折叠面板和桌面模式。
  - 多种皮肤动态切换。
  - 8种常用控件封装。
  - 地图绘制展示。
  - 旧版本Demo：https://tengge1.github.io/ExtApp
  - 用户：管理员（admin、123）、一般用户（test、123）
  - 最新版下载：https://github.com/tengge1/ExtApp/releases

### 主要功能

ExtApp提供全面的政府级和企业级Web应用解决方案：

* 组织机构管理、用户管理
* 角色管理、角色权限、菜单管理
* 数据字典、字典项管理
* 系统配置节点、系统配置管理
* 系统日志、数据库在线备份还原
* 工作流设计
* 发送消息、接收消息
* 地图绘制展示

我们所做的一切都是为了您能更好更快地进行Web应用的开发！！！

### 开发日志

2017年5月21日 v1.0.4

* 该版本主要是后台架构优化。
* Model层优化：删除所有列表参数类，例如RoleListParam，改为多个简单参数的接口。
* Model层优化：删除了所有与模型重复的添加、编辑参数模型类，例如RoleAddParam、RoleEditParam等，直接由数据库模型当作参数模型。
* DAL层优化：BaseDAL提供的Add和Edit方法修改为Save、Update、SaveOrUpdate方法。
* BLL层优化：BLL层函数统一返回Result和它的子类，例如DataResult、ListResult、LoginResult等。
* Controller层优化：函数统一改为将获得的参数传递给BLL层并使用ApiBase提供的Json函数将BLL层返回的Result生成JsonResult返回。
* 文件夹合并：所有与系统管理类有关的类放在App文件夹，所有与在线办公有关的类放在Work文件夹。

2017年5月7日 v1.0.3

* 冒泡弹窗控件。
* 机构下拉选择控件。
* 菜单下拉选择控件。
* 搜索表单控件。
* 用户选择控件。
* 地图绘制控件。
* 地图展示控件。
* 附件上传控件。

===================================

2017年4月30日 v1.0.2

* 新增发送消息功能。
* 新增接收消息功能。
* 新增用户选择控件。
* 新增五种菜单打开方式及演示。
* 新增工作流设计并保存xml到数据库（开发中）。
* Model层去除NHibernate属性配置中的序号，优化配置。
* extjs包调整到/ExtApp/ExtApp.Web/packages文件夹。
* 修复获取记录总数时从数据库读取所有记录的bug。

====================================

2017年4月22日 v1.0.1
 
* 新增桌面模式。
* 新增重置密码功能。
* 部分下拉列表选项改为字典项配置。

====================================

2017年4月16日 v1.0.0

* 组织机构管理。
* 用户管理。
* 角色管理。
* 角色授权。
* 菜单管理。
* 数据字典。
* 系统配置。
* 系统日志。
* 数据库在线备份还原。
* 登录界面。
* 主体框架。

### 目录说明

以下是该项目部分目录和文件的说明：

* ExtApp - 项目源代码
* Licenses - 授权相关文件
* .gitattributes - Git上传属性
* .gitignore - Git上传文件类型设置
* LICENSE - 授权文件
* README.md - 说明文件

### 开发环境

这里建议您使用以下开发环境：

* Visual Studio 2015+
* SQL Server 2008+
* IIS8.0+

### 相关网站

这是本项目中使用的部分相关插件：

| 名称 | 网址 |
| ------ | ------ |
| ExtJs | http://extjs.org.cn/ |
| NHibernate | http://nhibernate.info/ |
| NHibernate.Mapping.Attributes | https://github.com/nhibernate/NHibernate.Mapping.Attributes |
| Spring.NET | http://springframework.net/ |
| ASP.NET MVC | https://www.asp.net/mvc |
| log4net | http://springframework.net/ |
| Common Logging | http://netcommon.sourceforge.net/ |
| Newtonsoft.JSON | http://www.newtonsoft.com/json |
| mxgraph | https://github.com/jgraph/mxgraph |
| Quartz | http://www.quartz-scheduler.org/ |
| jQuery | http://jquery.com/ |
| CodeMirror | http://codemirror.net/ |
| RequireJs | http://requirejs.org/ |
| 天地图 | http://www.tianditu.cn/ |