# ExtApp v 1.0.6 前瞻

经过两年的不断学习，随着React.js和Vue等前端热门框架的兴起，我感觉ExtJs已经不太符合时代潮流，将在ExtJs v1.0.6做出重大调整。

1、不再使用ExtJs模块加载器，改为使用import和export引入和导出模块，并使用rollup.js将所有js文件打包。 
2、删除不符合时代潮流的classic风格，专注modern风格，并修改css尽量向google material design风格靠拢。 
3、所有图标不再使用图片，改为字体文件。 
4、删除工作流和GIS等与框架核心不相关的内容，专注框架研发。 
5、升级ExtJs版本到最新版本。 

# ExtApp 1.0.5

ExtApp是一个基于三层架构，使用NHibernate、API Controller和ExtJs创建的，用于简化政府和企业应用开发的Web应用程序框架。

  - 使用NHibernate自动创建数据表。
  - 使用NHibernate Attribute通过属性配置映射。
  - PC和手机端共享同样的API Controller接口。
  - ExtJs动态加载js文件。
  - 支持折叠面板和桌面模式。
  - 自带6种皮肤。
  - 8种常用控件封装。
  - 地图绘制展示。
  - 旧版本Demo：https://tengge1.github.io/ext-app
  - 用户：管理员（admin、123）、一般用户（test、123）
  - 最新版下载：https://github.com/tengge1/ext-app/releases

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

### 项目截图

![image](https://github.com/tengge1/ext-app/blob/master/%E5%9B%BE%E7%89%87/%E5%9B%BE%E7%89%871.PNG)
 
![image](https://github.com/tengge1/ext-app/blob/master/%E5%9B%BE%E7%89%87/%E5%9B%BE%E7%89%872.PNG)
 
![image](https://github.com/tengge1/ext-app/blob/master/%E5%9B%BE%E7%89%87/%E5%9C%B0%E5%9B%BE%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6.PNG)
  
![image](https://github.com/tengge1/ext-app/blob/master/%E5%9B%BE%E7%89%87/%E5%9C%B0%E5%9B%BE%E7%BB%98%E5%88%B6%E6%8E%A7%E4%BB%B6.PNG)
   
![image](https://github.com/tengge1/ext-app/blob/master/%E5%9B%BE%E7%89%87/%E5%B7%A5%E4%BD%9C%E6%B5%81%E8%AE%BE%E8%AE%A1.PNG)
    
![image](https://github.com/tengge1/ext-app/blob/master/%E5%9B%BE%E7%89%87/%E6%A1%8C%E9%9D%A21.png)
     
![image](https://github.com/tengge1/ext-app/blob/master/%E5%9B%BE%E7%89%87/%E6%A1%8C%E9%9D%A22.png)

![image](https://github.com/tengge1/ext-app/blob/master/%E5%9B%BE%E7%89%87/%E6%A1%8C%E9%9D%A23.png)

![image](https://github.com/tengge1/ext-app/blob/master/%E5%9B%BE%E7%89%87/%E7%94%A8%E6%88%B7%E9%80%89%E6%8B%A9%E6%8E%A7%E4%BB%B6.PNG)

![image](https://github.com/tengge1/ext-app/blob/master/%E5%9B%BE%E7%89%87/%E9%99%84%E4%BB%B6%E4%B8%8A%E4%BC%A0%E6%8E%A7%E4%BB%B6.PNG)
  


### 开发日志

2017年5月28日 v1.0.5

* 前台架构优化
* /app/app          系统管理模块
* /app/app/model    系统管理模型
* /app/app/store    系统管理数据仓库
* /app/plugin       插件
* /app/renderer     渲染器（即将弃用）
* /app/util         工具类
* /app/widget       封装的常用控件
* /app/work         在线办公模块
* /app/work/model   在线办公模型
* /app/work/store   在线办公数据仓库
* /app/App.js       ExtApp提供的帮助方法
* /app/App_Data     生成数据库的sql脚本
* /app/packages     引用的javascript类库
* /app/resources/css  项目css文件
* /app/resources/images 项目图片文件
* /app/resources/js   项目js文件
* /app/uploads      上传文件所在文件夹
* /Default.aspx     首页（可显示折叠面板或桌面样式）
* /Global.asax      全局应用类
* /packages.config  Nuget可以根据该配置自动下载包
* /Web.config       配置文件（可以配置样式和主题等）

==================================

2017年5月21日 v1.0.4

* 该版本主要是后台架构优化。
* Model层优化：删除所有列表参数类，例如RoleListParam，改为多个简单参数的接口。
* Model层优化：删除了所有与模型重复的添加、编辑参数模型类，例如RoleAddParam、RoleEditParam等，直接由数据库模型当作参数模型。
* DAL层优化：BaseDAL提供的Add和Edit方法修改为Save、Update、SaveOrUpdate方法。
* BLL层优化：BLL层函数统一返回Result和它的子类，例如DataResult、ListResult、LoginResult等。
* Controller层优化：函数统一改为将获得的参数传递给BLL层并使用ApiBase提供的Json函数将BLL层返回的Result生成JsonResult返回。
* 文件夹合并：所有与系统管理类有关的类放在App文件夹，所有与在线办公有关的类放在Work文件夹。

==================================

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
