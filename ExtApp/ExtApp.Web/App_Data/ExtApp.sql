/*
Navicat SQL Server Data Transfer

Source Server         : SQL Server
Source Server Version : 130000
Source Host           : .\SQLEXPRESS:1433
Source Database       : ExtApp
Source Schema         : dbo

Target Server Type    : SQL Server
Target Server Version : 130000
File Encoding         : 65001

Date: 2017-04-16 11:06:10
*/


-- ----------------------------
-- Table structure for AppConfig
-- ----------------------------
DROP TABLE [dbo].[AppConfig]
GO
CREATE TABLE [dbo].[AppConfig] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Name] nvarchar(255) NULL ,
[ConfigKey] nvarchar(255) NULL ,
[ConfigValue] nvarchar(255) NULL ,
[Status] int NULL ,
[SectionID] int NULL ,
[Sort] int NULL ,
[Comment] nvarchar(255) NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[AppConfig]', RESEED, 2)
GO

-- ----------------------------
-- Records of AppConfig
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppConfig] ON
GO
INSERT INTO [dbo].[AppConfig] ([ID], [Name], [ConfigKey], [ConfigValue], [Status], [SectionID], [Sort], [Comment]) VALUES (N'1', N'用户初始密码', N'UserInitPwd', N'123', N'1', N'2', N'1', N'用户管理重置用户密码。')
GO
GO
INSERT INTO [dbo].[AppConfig] ([ID], [Name], [ConfigKey], [ConfigValue], [Status], [SectionID], [Sort], [Comment]) VALUES (N'2', N'数据库名称', N'DatabaseName', N'ExtApp', N'1', N'1003', N'1', N'连接数据库的名称，数据库备份还原使用。')
GO
GO
SET IDENTITY_INSERT [dbo].[AppConfig] OFF
GO

-- ----------------------------
-- Table structure for AppConfigSection
-- ----------------------------
DROP TABLE [dbo].[AppConfigSection]
GO
CREATE TABLE [dbo].[AppConfigSection] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Name] nvarchar(255) NULL ,
[Status] int NULL ,
[SectionID] int NULL ,
[Sort] int NULL ,
[Comment] nvarchar(255) NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[AppConfigSection]', RESEED, 1003)
GO

-- ----------------------------
-- Records of AppConfigSection
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppConfigSection] ON
GO
INSERT INTO [dbo].[AppConfigSection] ([ID], [Name], [Status], [SectionID], [Sort], [Comment]) VALUES (N'2', N'用户配置', N'1', null, N'1', null)
GO
GO
INSERT INTO [dbo].[AppConfigSection] ([ID], [Name], [Status], [SectionID], [Sort], [Comment]) VALUES (N'1003', N'数据库配置', N'1', null, N'2', null)
GO
GO
SET IDENTITY_INSERT [dbo].[AppConfigSection] OFF
GO

-- ----------------------------
-- Table structure for AppDatabaseBackup
-- ----------------------------
DROP TABLE [dbo].[AppDatabaseBackup]
GO
CREATE TABLE [dbo].[AppDatabaseBackup] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Name] nvarchar(255) NULL ,
[FileName] nvarchar(255) NULL ,
[AddTime] datetime NULL ,
[IsCurrent] bit NULL ,
[AddUserID] int NULL ,
[Comment] nvarchar(255) NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[AppDatabaseBackup]', RESEED, 2)
GO

-- ----------------------------
-- Records of AppDatabaseBackup
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppDatabaseBackup] ON
GO
INSERT INTO [dbo].[AppDatabaseBackup] ([ID], [Name], [FileName], [AddTime], [IsCurrent], [AddUserID], [Comment]) VALUES (N'2', N'数据库2017-04-15备份', N'ExtApp20170415154144.bak', N'2017-04-15 15:41:44.000', N'0', N'1', null)
GO
GO
SET IDENTITY_INSERT [dbo].[AppDatabaseBackup] OFF
GO

-- ----------------------------
-- Table structure for AppDept
-- ----------------------------
DROP TABLE [dbo].[AppDept]
GO
CREATE TABLE [dbo].[AppDept] (
[ID] int NOT NULL IDENTITY(1,1) ,
[PID] int NULL ,
[Code] nvarchar(255) NULL ,
[Name] nvarchar(255) NULL ,
[Status] int NULL ,
[AddTime] datetime NULL ,
[Sort] int NULL ,
[Comment] nvarchar(255) NULL ,
[AddUserID] int NULL ,
[Type] int NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[AppDept]', RESEED, 3026)
GO

-- ----------------------------
-- Records of AppDept
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppDept] ON
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type]) VALUES (N'3014', null, N'001', N'董事会', N'1', N'2017-03-17 07:34:24.000', N'1', null, N'1', N'1')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type]) VALUES (N'3015', N'3014', N'001001', N'总经理办', N'1', N'2017-03-17 07:40:10.000', N'1', null, N'1', N'1')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type]) VALUES (N'3017', N'3014', N'001002', N'研发部', N'1', N'2017-03-18 07:41:25.000', N'2', null, N'1', N'1')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type]) VALUES (N'3018', N'3017', N'001002001', N'项目部', N'1', N'2017-03-18 07:43:18.000', N'1', null, N'1', N'1')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type]) VALUES (N'3019', N'3017', N'001002002', N'产品部', N'1', N'2017-03-18 07:43:28.000', N'2', null, N'1', N'1')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type]) VALUES (N'3020', N'3014', N'001003', N'财务部', N'1', N'2017-03-18 07:43:45.000', N'3', null, N'1', N'1')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type]) VALUES (N'3021', N'3014', N'001004', N'综合部', N'1', N'2017-03-18 07:43:56.000', N'4', null, N'1', N'1')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type]) VALUES (N'3024', N'3020', N'001003001', N'会计', N'1', N'2017-03-20 07:54:33.000', N'1', null, N'1', N'1')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type]) VALUES (N'3025', N'3020', N'001003002', N'出纳', N'1', N'2017-03-20 07:54:49.000', N'2', null, N'1', N'1')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type]) VALUES (N'3026', N'3017', N'001002003', N'测试部', N'1', N'2017-03-25 07:30:07.000', N'3', null, N'1', N'1')
GO
GO
SET IDENTITY_INSERT [dbo].[AppDept] OFF
GO

-- ----------------------------
-- Table structure for AppDic
-- ----------------------------
DROP TABLE [dbo].[AppDic]
GO
CREATE TABLE [dbo].[AppDic] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Code] nvarchar(255) NULL ,
[Type] int NULL ,
[Name] nvarchar(255) NULL ,
[Status] int NULL ,
[Sort] int NULL ,
[Comment] nvarchar(255) NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[AppDic]', RESEED, 6)
GO

-- ----------------------------
-- Records of AppDic
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppDic] ON
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'1', N'LogType', N'0', N'日志类型', N'1', N'1', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'2', N'LogSource', N'0', N'日志来源', N'1', N'2', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'3', N'LogLevel', N'0', N'日志等级', N'1', N'3', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'4', N'Sex', N'0', N'性别', N'1', N'4', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'5', N'FrameStyle', N'0', N'框架样式', N'1', N'5', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'6', N'ExtJsTheme', N'0', N'ExtJs主题', N'1', N'6', null)
GO
GO
SET IDENTITY_INSERT [dbo].[AppDic] OFF
GO

-- ----------------------------
-- Table structure for AppDicItem
-- ----------------------------
DROP TABLE [dbo].[AppDicItem]
GO
CREATE TABLE [dbo].[AppDicItem] (
[ID] int NOT NULL IDENTITY(1,1) ,
[DicID] int NULL ,
[Code] nvarchar(255) NULL ,
[Name] nvarchar(255) NULL ,
[Status] int NULL ,
[Sort] int NULL ,
[Comment] nvarchar(255) NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[AppDicItem]', RESEED, 21)
GO

-- ----------------------------
-- Records of AppDicItem
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppDicItem] ON
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'1', N'3', N'Fatel', N'崩溃', N'1', N'1', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'2', N'3', N'Error', N'错误', N'1', N'2', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'3', N'3', N'Warn', N'警告', N'1', N'3', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'4', N'3', N'Info', N'消息', N'1', N'4', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'5', N'3', N'Debug', N'调试', N'1', N'5', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'6', N'1', N'System', N'系统事件', N'1', N'1', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'7', N'1', N'User', N'用户事件', N'1', N'2', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'8', N'2', N'WebApp', N'Web应用', N'1', N'1', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'9', N'2', N'MobileApp', N'移动应用', N'1', N'2', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'10', N'2', N'DesktopApp', N'桌面客户端', N'1', N'3', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'11', N'4', N'Man', N'男', N'1', N'1', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'12', N'4', N'Woman', N'女', N'1', N'2', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'13', N'5', N'Accordion', N'折叠面板', N'1', N'1', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'14', N'5', N'Desktop', N'桌面样式', N'1', N'2', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'15', N'5', N'Navigation', N'导航样式', N'1', N'3', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'16', N'6', N'Classic', N'Classic主题', N'1', N'1', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'17', N'6', N'Aria', N'Aria主题', N'1', N'2', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'18', N'6', N'Crisp', N'Crisp主题', N'1', N'3', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'19', N'6', N'Gray', N'Gray主题', N'1', N'4', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'20', N'6', N'Neptune', N'Neptune主题', N'1', N'5', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'21', N'6', N'Triton', N'Triton主题', N'1', N'6', null)
GO
GO
SET IDENTITY_INSERT [dbo].[AppDicItem] OFF
GO

-- ----------------------------
-- Table structure for AppLog
-- ----------------------------
DROP TABLE [dbo].[AppLog]
GO
CREATE TABLE [dbo].[AppLog] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Type] int NULL ,
[Source] int NULL ,
[Level] int NULL ,
[UserID] int NULL ,
[AddTime] datetime NULL ,
[IP] nvarchar(255) NULL ,
[Title] nvarchar(255) NULL ,
[Content] nvarchar(255) NULL ,
[Status] int NULL ,
[Comment] nvarchar(255) NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[AppLog]', RESEED, 10)
GO

-- ----------------------------
-- Records of AppLog
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppLog] ON
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'1', N'1', N'0', N'3', N'1', N'2017-04-15 15:15:18.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'2', N'1', N'0', N'3', N'1', N'2017-04-15 20:07:22.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'3', N'1', N'0', N'3', N'1', N'2017-04-15 20:39:39.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'4', N'1', N'0', N'3', N'1', N'2017-04-16 08:16:53.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'5', N'1', N'0', N'3', null, N'2017-04-16 09:34:00.000', N'::1', N'用户User登录失败！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'6', N'1', N'0', N'3', N'2', N'2017-04-16 09:34:07.000', N'::1', N'用户test登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'7', N'1', N'0', N'3', N'1', N'2017-04-16 09:34:22.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'8', N'1', N'0', N'3', N'2', N'2017-04-16 09:34:39.000', N'::1', N'用户test登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'9', N'1', N'0', N'3', N'1', N'2017-04-16 09:34:54.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'10', N'1', N'0', N'3', N'1', N'2017-04-16 09:46:06.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
SET IDENTITY_INSERT [dbo].[AppLog] OFF
GO

-- ----------------------------
-- Table structure for AppMenu
-- ----------------------------
DROP TABLE [dbo].[AppMenu]
GO
CREATE TABLE [dbo].[AppMenu] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Name] nvarchar(255) NOT NULL ,
[Code] nvarchar(255) NOT NULL ,
[PID] int NULL ,
[UrlType] int NULL ,
[Url] nvarchar(255) NULL ,
[IconType] int NULL ,
[Icon] nvarchar(255) NULL ,
[Status] int NULL ,
[Sort] int NULL ,
[Comment] nvarchar(255) NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[AppMenu]', RESEED, 4006)
GO

-- ----------------------------
-- Records of AppMenu
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppMenu] ON
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment]) VALUES (N'1', N'系统管理', N'001', null, N'0', null, N'1', N'Computer', N'1', N'10', null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment]) VALUES (N'2', N'权限管理', N'001001', N'1', N'0', null, N'1', N'Userkey', N'1', N'30', null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment]) VALUES (N'3', N'菜单管理', N'001001001', N'2', N'1', N'App.view.authority.menu.List', N'1', N'Applicationsidetree', N'1', N'20', null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment]) VALUES (N'4', N'在线办公', N'002', null, N'0', null, N'0', null, N'1', N'20', null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment]) VALUES (N'5', N'组织机构', N'001002', N'1', N'1', N'App.view.personnel.dept.List', N'1', N'Building', N'1', N'10', null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment]) VALUES (N'6', N'用户管理', N'001003', N'1', N'1', N'App.view.personnel.user.List', N'1', N'User', N'1', N'20', null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment]) VALUES (N'7', N'角色管理', N'001001002', N'2', N'1', N'App.view.authority.role.List', N'1', N'Group', N'1', N'10', null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment]) VALUES (N'8', N'数据字典', N'001004', N'1', N'0', N'App.view.core.dic.List', N'1', N'Book', N'1', N'40', null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment]) VALUES (N'9', N'系统配置', N'001005', N'1', N'1', N'App.view.core.config.List', N'1', N'Wrench', N'1', N'50', null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment]) VALUES (N'10', N'系统日志', N'001006', N'1', N'1', N'App.view.core.logs.List', N'1', N'Page', N'1', N'60', null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment]) VALUES (N'4006', N'数据库备份', N'001007', N'1', N'1', N'App.view.core.databaseBackup.List', N'1', N'Database', N'1', N'70', null)
GO
GO
SET IDENTITY_INSERT [dbo].[AppMenu] OFF
GO

-- ----------------------------
-- Table structure for AppRole
-- ----------------------------
DROP TABLE [dbo].[AppRole]
GO
CREATE TABLE [dbo].[AppRole] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Name] nvarchar(255) NULL ,
[Status] int NULL ,
[Code] nvarchar(255) NULL ,
[Sort] int NULL ,
[Comment] nvarchar(255) NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[AppRole]', RESEED, 2006)
GO

-- ----------------------------
-- Records of AppRole
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppRole] ON
GO
INSERT INTO [dbo].[AppRole] ([ID], [Name], [Status], [Code], [Sort], [Comment]) VALUES (N'5', N'超级管理员', N'1', N'SuperAdmin', N'1', null)
GO
GO
INSERT INTO [dbo].[AppRole] ([ID], [Name], [Status], [Code], [Sort], [Comment]) VALUES (N'2006', N'普通用户', N'1', N'User', N'2', null)
GO
GO
SET IDENTITY_INSERT [dbo].[AppRole] OFF
GO

-- ----------------------------
-- Table structure for AppRoleMenu
-- ----------------------------
DROP TABLE [dbo].[AppRoleMenu]
GO
CREATE TABLE [dbo].[AppRoleMenu] (
[ID] int NOT NULL IDENTITY(1,1) ,
[RoleID] int NULL ,
[MenuID] int NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[AppRoleMenu]', RESEED, 23)
GO

-- ----------------------------
-- Records of AppRoleMenu
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppRoleMenu] ON
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'4', N'5', N'1')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'5', N'5', N'5')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'6', N'5', N'6')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'10', N'5', N'8')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'11', N'5', N'9')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'12', N'5', N'10')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'13', N'5', N'4006')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'19', N'5', N'2')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'20', N'5', N'7')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'21', N'5', N'3')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'22', N'5', N'4')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'23', N'2006', N'4')
GO
GO
SET IDENTITY_INSERT [dbo].[AppRoleMenu] OFF
GO

-- ----------------------------
-- Table structure for AppUser
-- ----------------------------
DROP TABLE [dbo].[AppUser]
GO
CREATE TABLE [dbo].[AppUser] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Username] nvarchar(255) NULL ,
[Password] nvarchar(255) NULL ,
[Name] nvarchar(255) NULL ,
[Sex] int NULL ,
[RoleID] int NULL ,
[DeptID] int NULL ,
[Status] int NULL ,
[Duty] nvarchar(255) NULL ,
[Phone] nvarchar(255) NULL ,
[Email] nvarchar(255) NULL ,
[FaceUrl] nvarchar(255) NULL ,
[AddTime] datetime NULL ,
[Sort] int NULL ,
[Comment] nvarchar(255) NULL ,
[Birthday] datetime NULL ,
[Address] nvarchar(255) NULL ,
[isAdmin] bit NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[AppUser]', RESEED, 2)
GO

-- ----------------------------
-- Records of AppUser
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppUser] ON
GO
INSERT INTO [dbo].[AppUser] ([ID], [Username], [Password], [Name], [Sex], [RoleID], [DeptID], [Status], [Duty], [Phone], [Email], [FaceUrl], [AddTime], [Sort], [Comment], [Birthday], [Address], [isAdmin]) VALUES (N'1', N'admin', N'OhpHH5gn55nuplWK0h2esw==', N'管理员', N'1', N'5', N'3014', N'1', null, null, null, null, null, N'1', null, N'1990-01-01 00:00:00.000', null, N'1')
GO
GO
INSERT INTO [dbo].[AppUser] ([ID], [Username], [Password], [Name], [Sex], [RoleID], [DeptID], [Status], [Duty], [Phone], [Email], [FaceUrl], [AddTime], [Sort], [Comment], [Birthday], [Address], [isAdmin]) VALUES (N'2', N'test', N'OhpHH5gn55nuplWK0h2esw==', N'测试', N'2', N'2006', N'3014', N'1', null, null, null, null, N'2017-04-16 09:33:28.000', N'2', null, null, null, N'0')
GO
GO
SET IDENTITY_INSERT [dbo].[AppUser] OFF
GO

-- ----------------------------
-- Indexes structure for table AppConfig
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppConfig
-- ----------------------------
ALTER TABLE [dbo].[AppConfig] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppConfigSection
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppConfigSection
-- ----------------------------
ALTER TABLE [dbo].[AppConfigSection] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppDatabaseBackup
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppDatabaseBackup
-- ----------------------------
ALTER TABLE [dbo].[AppDatabaseBackup] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppDept
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppDept
-- ----------------------------
ALTER TABLE [dbo].[AppDept] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppDic
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppDic
-- ----------------------------
ALTER TABLE [dbo].[AppDic] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppDicItem
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppDicItem
-- ----------------------------
ALTER TABLE [dbo].[AppDicItem] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppLog
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppLog
-- ----------------------------
ALTER TABLE [dbo].[AppLog] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppMenu
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppMenu
-- ----------------------------
ALTER TABLE [dbo].[AppMenu] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppRole
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppRole
-- ----------------------------
ALTER TABLE [dbo].[AppRole] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppRoleMenu
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppRoleMenu
-- ----------------------------
ALTER TABLE [dbo].[AppRoleMenu] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppUser
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppUser
-- ----------------------------
ALTER TABLE [dbo].[AppUser] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[AppConfig]
-- ----------------------------
ALTER TABLE [dbo].[AppConfig] ADD FOREIGN KEY ([SectionID]) REFERENCES [dbo].[AppConfigSection] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppConfig] ADD FOREIGN KEY ([SectionID]) REFERENCES [dbo].[AppConfigSection] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppConfig] ADD FOREIGN KEY ([SectionID]) REFERENCES [dbo].[AppConfigSection] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[AppConfigSection]
-- ----------------------------
ALTER TABLE [dbo].[AppConfigSection] ADD FOREIGN KEY ([SectionID]) REFERENCES [dbo].[AppConfigSection] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppConfigSection] ADD FOREIGN KEY ([SectionID]) REFERENCES [dbo].[AppConfigSection] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppConfigSection] ADD FOREIGN KEY ([SectionID]) REFERENCES [dbo].[AppConfigSection] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[AppDatabaseBackup]
-- ----------------------------
ALTER TABLE [dbo].[AppDatabaseBackup] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDatabaseBackup] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[AppDept]
-- ----------------------------
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[AppDicItem]
-- ----------------------------
ALTER TABLE [dbo].[AppDicItem] ADD FOREIGN KEY ([DicID]) REFERENCES [dbo].[AppDic] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDicItem] ADD FOREIGN KEY ([DicID]) REFERENCES [dbo].[AppDic] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDicItem] ADD FOREIGN KEY ([DicID]) REFERENCES [dbo].[AppDic] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[AppLog]
-- ----------------------------
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[AppMenu]
-- ----------------------------
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[AppRoleMenu]
-- ----------------------------
ALTER TABLE [dbo].[AppRoleMenu] ADD FOREIGN KEY ([MenuID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppRoleMenu] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[AppUser]
-- ----------------------------
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([DeptID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([DeptID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([DeptID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
