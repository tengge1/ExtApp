/*
Navicat SQL Server Data Transfer

Source Server         : SQLEXPRESS
Source Server Version : 130000
Source Host           : .\SQLEXPRESS:1433
Source Database       : ExtApp
Source Schema         : dbo

Target Server Type    : SQL Server
Target Server Version : 130000
File Encoding         : 65001

Date: 2017-05-26 07:49:22
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
DBCC CHECKIDENT(N'[dbo].[AppConfig]', RESEED, 5)
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
INSERT INTO [dbo].[AppConfig] ([ID], [Name], [ConfigKey], [ConfigValue], [Status], [SectionID], [Sort], [Comment]) VALUES (N'3', N'框架样式', N'FrameStyle', N'accordion', N'1', N'1004', N'0', N'框架样式字典中的一种。')
GO
GO
INSERT INTO [dbo].[AppConfig] ([ID], [Name], [ConfigKey], [ConfigValue], [Status], [SectionID], [Sort], [Comment]) VALUES (N'4', N'ExtJs主题', N'ExtJsTheme', N'classic', N'1', N'1004', N'0', N'ExtJs主题字典中的其中一种。')
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
DBCC CHECKIDENT(N'[dbo].[AppConfigSection]', RESEED, 1004)
GO

-- ----------------------------
-- Records of AppConfigSection
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppConfigSection] ON
GO
INSERT INTO [dbo].[AppConfigSection] ([ID], [Name], [Status], [SectionID], [Sort], [Comment]) VALUES (N'2', N'用户管理配置', N'1', null, N'1', null)
GO
GO
INSERT INTO [dbo].[AppConfigSection] ([ID], [Name], [Status], [SectionID], [Sort], [Comment]) VALUES (N'1003', N'数据库配置', N'1', null, N'2', null)
GO
GO
INSERT INTO [dbo].[AppConfigSection] ([ID], [Name], [Status], [SectionID], [Sort], [Comment]) VALUES (N'1004', N'用户界面配置', N'1', null, N'0', null)
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
DBCC CHECKIDENT(N'[dbo].[AppDatabaseBackup]', RESEED, 3)
GO

-- ----------------------------
-- Records of AppDatabaseBackup
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppDatabaseBackup] ON
GO
INSERT INTO [dbo].[AppDatabaseBackup] ([ID], [Name], [FileName], [AddTime], [IsCurrent], [AddUserID], [Comment]) VALUES (N'2', N'数据库2017-04-15备份', N'ExtApp20170415154144.bak', N'2017-04-15 15:41:44.000', N'0', N'1', null)
GO
GO
INSERT INTO [dbo].[AppDatabaseBackup] ([ID], [Name], [FileName], [AddTime], [IsCurrent], [AddUserID], [Comment]) VALUES (N'3', N'数据库2017-05-17备份', N'ExtApp20170517120752.bak', N'2017-05-17 12:07:52.000', N'0', N'1', null)
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
[Type] int NULL ,
[TypeID] int NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[AppDept]', RESEED, 3026)
GO

-- ----------------------------
-- Records of AppDept
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppDept] ON
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type], [TypeID]) VALUES (N'3014', null, N'001', N'董事会', N'1', N'2017-03-17 07:34:24.000', N'1', null, N'1', N'1', N'22')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type], [TypeID]) VALUES (N'3015', N'3014', N'001001', N'总经理办', N'1', N'2017-03-17 07:40:10.000', N'1', null, N'1', N'1', N'22')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type], [TypeID]) VALUES (N'3017', N'3014', N'001002', N'研发部', N'1', N'2017-03-18 07:41:25.000', N'2', null, N'1', N'1', N'22')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type], [TypeID]) VALUES (N'3018', N'3017', N'001002001', N'项目部', N'1', N'2017-03-18 07:43:18.000', N'1', null, N'1', N'1', N'22')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type], [TypeID]) VALUES (N'3019', N'3017', N'001002002', N'产品部', N'1', N'2017-03-18 07:43:28.000', N'2', null, N'1', N'1', N'22')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type], [TypeID]) VALUES (N'3020', N'3014', N'001003', N'财务部', N'1', N'2017-03-18 07:43:45.000', N'3', null, N'1', N'1', N'22')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type], [TypeID]) VALUES (N'3021', N'3014', N'001004', N'综合部', N'1', N'2017-03-18 07:43:56.000', N'4', null, N'1', N'1', N'22')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type], [TypeID]) VALUES (N'3024', N'3020', N'001003001', N'会计', N'1', N'2017-03-20 07:54:33.000', N'1', null, N'1', N'1', N'22')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type], [TypeID]) VALUES (N'3025', N'3020', N'001003002', N'出纳', N'1', N'2017-03-20 07:54:49.000', N'2', null, N'1', N'1', N'22')
GO
GO
INSERT INTO [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Status], [AddTime], [Sort], [Comment], [AddUserID], [Type], [TypeID]) VALUES (N'3026', N'3017', N'001002003', N'测试部', N'1', N'2017-03-25 07:30:07.000', N'3', null, N'1', N'1', N'22')
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
DBCC CHECKIDENT(N'[dbo].[AppDic]', RESEED, 15)
GO

-- ----------------------------
-- Records of AppDic
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppDic] ON
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'1', N'LogType', N'24', N'日志类型', N'1', N'1', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'2', N'LogSource', N'24', N'日志来源', N'1', N'2', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'3', N'LogLevel', N'24', N'日志等级', N'1', N'3', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'4', N'Sex', N'24', N'性别', N'1', N'4', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'5', N'FrameStyle', N'24', N'框架样式', N'1', N'5', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'6', N'ExtJsTheme', N'24', N'ExtJs主题', N'1', N'6', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'7', N'DeptType', N'24', N'组织机构类型', N'1', N'0', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'8', N'DicType', N'24', N'字典类型', N'1', N'0', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'9', N'UrlType', N'24', N'Url类型', N'1', N'1', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'10', N'IconType', N'24', N'图标类型', N'1', N'0', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'11', N'OpenType', N'24', N'菜单打开方式', N'1', N'0', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'12', N'MessageType', N'24', N'消息类型', N'1', N'0', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'13', N'MessageSendType', N'24', N'消息发送状态', N'1', N'0', null)
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'14', N'MessageReceiveType', N'24', N'消息接收状态', N'1', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Sort], [Comment]) VALUES (N'15', N'LeaveType', N'25', N'请假类型', N'1', N'0', N'')
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
DBCC CHECKIDENT(N'[dbo].[AppDicItem]', RESEED, 49)
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
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'13', N'5', N'accordion', N'折叠面板', N'1', N'1', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'14', N'5', N'desktop', N'桌面样式', N'1', N'2', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'16', N'6', N'classic', N'Classic主题', N'1', N'1', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'17', N'6', N'aria', N'Aria主题', N'1', N'2', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'18', N'6', N'crisp', N'Crisp主题', N'1', N'3', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'19', N'6', N'gray', N'Gray主题', N'1', N'4', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'20', N'6', N'neptune', N'Neptune主题', N'1', N'5', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'21', N'6', N'triton', N'Triton主题', N'1', N'6', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'22', N'7', N'Organization', N'机构', N'1', N'1', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'23', N'7', N'Region', N'地域', N'1', N'2', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'24', N'8', N'System', N'系统', N'1', N'1', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'25', N'8', N'User', N'用户', N'1', N'2', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'26', N'9', N'ExtJsClass', N'ExtJs类', N'1', N'1', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'27', N'9', N'UrlAddress', N'Url地址', N'1', N'2', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'28', N'10', N'CSS', N'CSS样式', N'1', N'1', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'29', N'10', N'IconUrl', N'图标Url', N'1', N'2', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'30', N'11', N'NoIframe', N'非iframe方式', N'1', N'1', N'选项卡中打开，不使用iframe。')
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'31', N'11', N'Iframe', N'iframe方式', N'1', N'2', N'选项卡中打开，使用Iframe。')
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'32', N'11', N'Dialog', N'对话框中打开', N'1', N'3', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'33', N'11', N'Top', N'顶层窗口打开', N'1', N'4', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'34', N'11', N'Blank', N'新窗口打开', N'1', N'5', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'35', N'12', N'SystemMessage', N'系统消息', N'1', N'10', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'36', N'12', N'UserMessage', N'用户消息', N'1', N'20', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'37', N'13', N'Draft', N'草稿', N'1', N'10', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'38', N'13', N'Send', N'已发送', N'1', N'20', null)
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'39', N'14', N'Unread', N'未读', N'1', N'10', N'')
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'40', N'14', N'Read', N'已读', N'1', N'20', N'')
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'41', N'14', N'Delete', N'已删', N'1', N'30', N'')
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'42', N'15', N'PaidLeave', N'带薪休假', N'1', N'1', N'')
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'43', N'15', N'VisitLeave', N'探亲假', N'1', N'2', N'')
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'44', N'15', N'FuneralLeave', N'婚丧假', N'1', N'3', N'')
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'45', N'15', N'MaternityLeave', N'产假', N'1', N'4', N'')
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'46', N'15', N'PaternityLeave', N'陪护假', N'1', N'5', N'')
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'47', N'15', N'BusinessLeave', N'因公外出', N'1', N'6', N'')
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'48', N'15', N'SickLeave', N'病假', N'1', N'7', N'')
GO
GO
INSERT INTO [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Status], [Sort], [Comment]) VALUES (N'49', N'15', N'CompassionateLeave', N'事假', N'1', N'8', N'')
GO
GO
SET IDENTITY_INSERT [dbo].[AppDicItem] OFF
GO

-- ----------------------------
-- Table structure for AppFiles
-- ----------------------------
DROP TABLE [dbo].[AppFiles]
GO
CREATE TABLE [dbo].[AppFiles] (
[ID] int NOT NULL IDENTITY(1,1) ,
[PID] int NULL ,
[Name] nvarchar(255) NULL ,
[Type] nvarchar(255) NULL ,
[Url] nvarchar(255) NULL ,
[Size] bigint NULL ,
[Extension] nvarchar(255) NULL ,
[Picture] nvarchar(255) NULL ,
[AddTime] datetime NULL ,
[ModuleID] int NULL ,
[AddUserID] int NULL 
)


GO

-- ----------------------------
-- Records of AppFiles
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppFiles] ON
GO
SET IDENTITY_INSERT [dbo].[AppFiles] OFF
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
DBCC CHECKIDENT(N'[dbo].[AppLog]', RESEED, 90)
GO

-- ----------------------------
-- Records of AppLog
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppLog] ON
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'37', N'7', N'8', N'4', N'1', N'2017-04-25 07:32:02.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'38', N'7', N'8', N'4', N'1', N'2017-04-25 19:20:39.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'39', N'7', N'8', N'4', N'1', N'2017-04-25 20:41:15.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'40', N'7', N'8', N'4', N'1', N'2017-04-25 21:16:37.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'41', N'7', N'8', N'4', N'1', N'2017-04-26 07:19:02.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'42', N'7', N'8', N'4', N'1', N'2017-04-26 11:51:11.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'43', N'7', N'8', N'4', N'1', N'2017-04-26 20:14:39.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'44', N'7', N'8', N'4', N'1', N'2017-04-27 20:37:00.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'45', N'7', N'8', N'4', N'1', N'2017-04-28 21:20:36.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'46', N'7', N'8', N'4', N'1', N'2017-04-29 17:41:53.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'47', N'7', N'8', N'4', N'1', N'2017-04-29 21:07:26.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'48', N'7', N'8', N'4', N'1', N'2017-04-30 08:11:25.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'49', N'7', N'8', N'4', N'2', N'2017-04-30 15:32:36.000', N'::1', N'用户test登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'50', N'7', N'8', N'4', N'1', N'2017-04-30 15:38:45.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'51', N'7', N'8', N'4', N'2', N'2017-04-30 15:41:48.000', N'::1', N'用户test登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'52', N'7', N'8', N'4', N'1', N'2017-04-30 16:00:10.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'53', N'7', N'8', N'4', N'2', N'2017-04-30 16:01:00.000', N'::1', N'用户test登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'54', N'7', N'8', N'4', N'1', N'2017-04-30 16:21:23.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'55', N'7', N'8', N'4', N'2', N'2017-04-30 17:14:52.000', N'::1', N'用户test登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'56', N'7', N'8', N'4', N'1', N'2017-04-30 17:15:10.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'57', N'7', N'8', N'4', N'1', N'2017-04-30 17:15:26.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'58', N'7', N'8', N'4', N'1', N'2017-05-01 10:48:21.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'59', N'7', N'8', N'4', N'1', N'2017-05-01 11:59:30.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'60', N'7', N'8', N'4', N'1', N'2017-05-02 20:01:24.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'61', N'7', N'8', N'4', N'1', N'2017-05-03 20:17:06.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'62', N'7', N'8', N'4', N'1', N'2017-05-04 20:04:45.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'63', N'7', N'8', N'4', N'1', N'2017-05-05 19:51:03.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'64', N'7', N'8', N'4', N'1', N'2017-05-06 21:21:14.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'65', N'7', N'8', N'4', N'1', N'2017-05-07 09:23:54.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'66', N'7', N'8', N'4', N'1', N'2017-05-08 20:47:52.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'67', N'7', N'8', N'4', N'1', N'2017-05-13 23:41:35.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'68', N'7', N'8', N'4', N'1', N'2017-05-16 07:47:07.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'69', N'7', N'8', N'4', N'1', N'2017-05-17 07:16:06.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'70', N'7', N'8', N'4', N'1', N'2017-05-17 07:47:13.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'71', N'7', N'8', N'4', N'1', N'2017-05-17 12:07:31.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'72', N'7', N'8', N'4', N'1', N'2017-05-18 07:25:09.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'73', N'7', N'8', N'4', N'1', N'2017-05-19 07:29:03.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'74', N'7', N'8', N'4', N'1', N'2017-05-19 07:50:54.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'75', N'7', N'8', N'4', N'1', N'2017-05-20 07:42:50.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'76', N'7', N'8', N'4', N'1', N'2017-05-22 07:46:01.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'77', N'7', N'8', N'4', N'1', N'2017-05-22 12:06:04.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'78', N'7', N'8', N'4', N'1', N'2017-05-22 12:12:32.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'79', N'7', N'8', N'4', N'1', N'2017-05-22 12:13:02.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'80', N'7', N'8', N'4', N'1', N'2017-05-22 12:14:06.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'81', N'7', N'8', N'4', N'1', N'2017-05-22 12:15:46.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'82', N'7', N'8', N'4', N'1', N'2017-05-22 12:17:11.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'83', N'7', N'8', N'4', N'1', N'2017-05-22 12:18:03.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'84', N'7', N'8', N'4', N'1', N'2017-05-23 07:45:06.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'85', N'7', N'8', N'4', N'1', N'2017-05-24 07:40:48.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'86', N'7', N'8', N'4', N'1', N'2017-05-24 07:41:22.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'87', N'7', N'8', N'4', null, N'2017-05-26 07:32:22.000', N'::1', N'用户admin登录失败！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'88', N'7', N'8', N'4', N'1', N'2017-05-26 07:32:26.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'89', N'7', N'8', N'4', N'1', N'2017-05-26 07:36:47.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
INSERT INTO [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Comment]) VALUES (N'90', N'7', N'8', N'4', N'1', N'2017-05-26 07:37:15.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
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
[Comment] nvarchar(255) NULL ,
[OpenType] int NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[AppMenu]', RESEED, 4036)
GO

-- ----------------------------
-- Records of AppMenu
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppMenu] ON
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'1', N'系统管理', N'001', null, null, null, N'28', N'Computer', N'1', N'10', null, null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'2', N'权限管理', N'001001', N'1', null, null, N'28', N'Userkey', N'1', N'30', null, null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'3', N'菜单管理', N'001001001', N'2', N'26', N'App.app.menu.List', N'28', N'Applicationsidetree', N'1', N'20', null, N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4', N'在线办公', N'002', null, null, null, N'28', N'Printer', N'1', N'20', null, null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'5', N'组织机构', N'001002', N'1', N'26', N'App.app.dept.List', N'28', N'Building', N'1', N'10', null, N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'6', N'用户管理', N'001003', N'1', N'26', N'App.app.user.List', N'28', N'User', N'1', N'20', null, N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'7', N'角色管理', N'001001002', N'2', N'26', N'App.app.role.List', N'28', N'Group', N'1', N'10', null, N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'8', N'数据字典', N'001004', N'1', N'26', N'App.app.dic.List', N'28', N'Book', N'1', N'40', null, N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'9', N'系统配置', N'001005', N'1', N'26', N'App.app.config.List', N'28', N'Wrench', N'1', N'50', null, N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'10', N'系统日志', N'001006', N'1', N'26', N'App.app.logs.List', N'28', N'Page', N'1', N'60', null, N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4006', N'数据库备份', N'001007', N'1', N'26', N'App.app.databaseBackup.List', N'28', N'Database', N'1', N'70', null, N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4010', N'实验中心', N'003', null, null, N'', N'28', N'Color', N'1', N'200', N'', null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4011', N'打开方式', N'003001', N'4010', null, null, N'28', N'Worldlink', N'1', N'0', null, null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4012', N'选项卡打开(NoIframe)', N'003001001', N'4011', N'26', N'App.app.user.List', N'28', N'User', N'1', N'1', null, N'30')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4013', N'选项卡打开(Iframe)', N'003001002', N'4011', N'26', N'App.app.user.List', N'28', N'User', N'1', N'2', null, N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4014', N'对话框打开(Dialog)', N'003001003', N'4011', N'26', N'App.app.user.List', N'28', N'User', N'1', N'3', null, N'32')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4015', N'顶层窗口打开(Top)', N'003001004', N'4011', N'26', N'App.app.user.List', N'28', N'User', N'1', N'4', null, N'33')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4016', N'新窗口打开(Blank)', N'003001005', N'4011', N'26', N'App.app.user.List', N'28', N'User', N'1', N'5', null, N'34')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4017', N'工作流', N'001008', N'1', null, null, N'28', N'Chartorganisation', N'1', N'35', null, null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4018', N'工作流设计', N'001008001', N'4017', N'26', N'App.app.workflow.List', N'28', N'Chartorganisationadd', N'1', N'10', null, N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4019', N'消息中心', N'002001', N'4', null, null, N'28', N'Email', N'1', N'10', null, null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4020', N'发送消息', N'002001001', N'4019', N'26', N'App.work.message.List', N'28', N'Emailadd', N'1', N'10', null, N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4021', N'接收消息', N'002001002', N'4019', N'26', N'App.work.messageReceive.List', N'28', N'Emailtransfer', N'1', N'20', null, N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4022', N'打开百度', N'003001006', N'4011', N'27', N'http://www.baidu.com', N'28', N'User', N'1', N'60', null, N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4023', N'自定义控件', N'003002', N'4010', null, N'', N'28', N'Star', N'1', N'20', N'', N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4024', N'冒泡弹窗', N'003002001', N'4023', N'26', N'App.app.test.NotifyTest', N'28', N'Applicationcascade', N'1', N'10', N'', N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4025', N'机构下拉选择', N'003002002', N'4023', N'26', N'App.app.test.DeptSelectTest', N'28', N'Awardstargold1', N'1', N'20', N'', N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4026', N'菜单下拉选择', N'003002003', N'4023', N'26', N'App.app.test.MenuSelectTest', N'28', N'Awardstargold2', N'1', N'30', N'', N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4027', N'搜索表单', N'003002004', N'4023', N'26', N'App.app.test.SearchFormTest', N'28', N'Awardstargold3', N'1', N'40', N'', N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4028', N'用户选择', N'003002005', N'4023', N'26', N'App.app.test.UserSelectTest', N'28', N'Awardstarsilver1', N'1', N'50', N'', N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4029', N'地图绘制', N'003002006', N'4023', N'26', N'App.app.test.MapDrawTest', N'29', N'Mapedit', N'1', N'60', N'', N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4030', N'地图展示', N'003002007', N'4023', N'26', N'App.app.test.MapShowTest', N'28', N'Mapstart', N'1', N'70', N'', N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4031', N'附件上传', N'003002008', N'4023', N'26', N'App.app.test.FileUploadTest', N'28', N'Film', N'1', N'80', N'', N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4033', N'请假管理', N'002002', N'4', null, N'', N'28', N'Applicationedit', N'1', N'20', N'', null)
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4034', N'在线请假', N'002002001', N'4033', N'26', N'App.work.leave.apply.List', N'28', N'User', N'1', N'10', N'', N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4035', N'请假审批', N'002002002', N'4033', N'26', N'App.work.leave.assign.List', N'28', N'User', N'1', N'20', N'', N'31')
GO
GO
INSERT INTO [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Status], [Sort], [Comment], [OpenType]) VALUES (N'4036', N'请假查询', N'002002003', N'4033', N'26', N'App.work.leave.query.List', N'28', N'User', N'1', N'30', N'', N'31')
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
DBCC CHECKIDENT(N'[dbo].[AppRole]', RESEED, 2007)
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
DBCC CHECKIDENT(N'[dbo].[AppRoleMenu]', RESEED, 71)
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
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'25', N'5', N'4010')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'26', N'5', N'4011')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'27', N'5', N'4012')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'28', N'5', N'4013')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'29', N'5', N'4014')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'30', N'5', N'4015')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'31', N'5', N'4016')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'32', N'5', N'4017')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'33', N'5', N'4018')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'34', N'5', N'4019')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'35', N'5', N'4020')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'36', N'5', N'4021')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'37', N'5', N'4022')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'38', N'2006', N'4019')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'39', N'2006', N'4020')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'40', N'2006', N'4021')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'41', N'2006', N'4010')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'42', N'2006', N'4011')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'43', N'2006', N'4012')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'44', N'2006', N'4013')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'45', N'2006', N'4014')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'46', N'2006', N'4015')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'47', N'2006', N'4016')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'48', N'2006', N'4022')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'49', N'5', N'4023')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'50', N'5', N'4024')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'51', N'5', N'4025')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'52', N'5', N'4026')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'53', N'5', N'4027')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'54', N'5', N'4028')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'55', N'5', N'4029')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'56', N'5', N'4030')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'57', N'5', N'4031')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'59', N'5', N'4033')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'60', N'5', N'4034')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'61', N'5', N'4035')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'62', N'5', N'4036')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'63', N'2006', N'4023')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'64', N'2006', N'4024')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'65', N'2006', N'4025')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'66', N'2006', N'4026')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'67', N'2006', N'4027')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'68', N'2006', N'4028')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'69', N'2006', N'4029')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'70', N'2006', N'4030')
GO
GO
INSERT INTO [dbo].[AppRoleMenu] ([ID], [RoleID], [MenuID]) VALUES (N'71', N'2006', N'4031')
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
[isAdmin] bit NULL ,
[UserID] int NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[AppUser]', RESEED, 2)
GO

-- ----------------------------
-- Records of AppUser
-- ----------------------------
SET IDENTITY_INSERT [dbo].[AppUser] ON
GO
INSERT INTO [dbo].[AppUser] ([ID], [Username], [Password], [Name], [Sex], [RoleID], [DeptID], [Status], [Duty], [Phone], [Email], [FaceUrl], [AddTime], [Sort], [Comment], [Birthday], [Address], [isAdmin], [UserID]) VALUES (N'1', N'admin', N'OhpHH5gn55nuplWK0h2esw==', N'管理员', N'11', N'5', N'3014', N'1', null, null, null, null, null, N'1', null, N'1990-01-01 00:00:00.000', null, N'1', null)
GO
GO
INSERT INTO [dbo].[AppUser] ([ID], [Username], [Password], [Name], [Sex], [RoleID], [DeptID], [Status], [Duty], [Phone], [Email], [FaceUrl], [AddTime], [Sort], [Comment], [Birthday], [Address], [isAdmin], [UserID]) VALUES (N'2', N'test', N'OhpHH5gn55nuplWK0h2esw==', N'测试', N'12', N'2006', N'3014', N'1', null, null, null, null, N'2017-04-16 09:33:28.000', N'2', null, null, null, N'0', null)
GO
GO
SET IDENTITY_INSERT [dbo].[AppUser] OFF
GO

-- ----------------------------
-- Table structure for Leave
-- ----------------------------
DROP TABLE [dbo].[Leave]
GO
CREATE TABLE [dbo].[Leave] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Title] nvarchar(255) NULL ,
[Content] nvarchar(1000) NULL ,
[StartTime] datetime NULL ,
[EndTime] datetime NULL ,
[Days] int NULL ,
[AddTime] datetime NULL ,
[Comment] nvarchar(255) NULL ,
[WorkInstanceID] int NULL ,
[Type] int NULL ,
[AddUser] int NULL ,
[Status] int NULL 
)


GO

-- ----------------------------
-- Records of Leave
-- ----------------------------
SET IDENTITY_INSERT [dbo].[Leave] ON
GO
SET IDENTITY_INSERT [dbo].[Leave] OFF
GO

-- ----------------------------
-- Table structure for Message
-- ----------------------------
DROP TABLE [dbo].[Message]
GO
CREATE TABLE [dbo].[Message] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Title] nvarchar(255) NULL ,
[Content] nvarchar(MAX) NULL ,
[AddTime] datetime NULL ,
[SendTime] datetime NULL ,
[Comment] nvarchar(255) NULL ,
[TypeID] int NULL ,
[AddUserID] int NULL ,
[Status] int NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[Message]', RESEED, 3)
GO

-- ----------------------------
-- Records of Message
-- ----------------------------
SET IDENTITY_INSERT [dbo].[Message] ON
GO
INSERT INTO [dbo].[Message] ([ID], [Title], [Content], [AddTime], [SendTime], [Comment], [TypeID], [AddUserID], [Status]) VALUES (N'1', N'你好，测试', N'这是管理员发给测试的消息。', N'2017-04-30 15:41:28.000', N'2017-04-30 15:41:31.000', N'', N'36', N'1', N'38')
GO
GO
INSERT INTO [dbo].[Message] ([ID], [Title], [Content], [AddTime], [SendTime], [Comment], [TypeID], [AddUserID], [Status]) VALUES (N'2', N'你好，管理员', N'这是测试发给管理员的消息。', N'2017-04-30 15:42:29.000', N'2017-04-30 15:42:31.000', N'', N'36', N'2', N'38')
GO
GO
INSERT INTO [dbo].[Message] ([ID], [Title], [Content], [AddTime], [SendTime], [Comment], [TypeID], [AddUserID], [Status]) VALUES (N'3', N'草稿消息', N'测试看不到。。。', N'2017-04-30 16:00:45.000', null, N'', N'36', N'1', N'37')
GO
GO
SET IDENTITY_INSERT [dbo].[Message] OFF
GO

-- ----------------------------
-- Table structure for MessageReceive
-- ----------------------------
DROP TABLE [dbo].[MessageReceive]
GO
CREATE TABLE [dbo].[MessageReceive] (
[ID] int NOT NULL IDENTITY(1,1) ,
[ReadTime] datetime NULL ,
[Comment] nvarchar(255) NULL ,
[MessageID] int NULL ,
[UserID] int NULL ,
[Status] int NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[MessageReceive]', RESEED, 3)
GO

-- ----------------------------
-- Records of MessageReceive
-- ----------------------------
SET IDENTITY_INSERT [dbo].[MessageReceive] ON
GO
INSERT INTO [dbo].[MessageReceive] ([ID], [ReadTime], [Comment], [MessageID], [UserID], [Status]) VALUES (N'1', null, null, N'1', N'2', N'39')
GO
GO
INSERT INTO [dbo].[MessageReceive] ([ID], [ReadTime], [Comment], [MessageID], [UserID], [Status]) VALUES (N'2', N'2017-04-30 16:36:35.000', null, N'2', N'1', N'40')
GO
GO
INSERT INTO [dbo].[MessageReceive] ([ID], [ReadTime], [Comment], [MessageID], [UserID], [Status]) VALUES (N'3', null, null, N'3', N'2', N'39')
GO
GO
SET IDENTITY_INSERT [dbo].[MessageReceive] OFF
GO

-- ----------------------------
-- Table structure for Workflow
-- ----------------------------
DROP TABLE [dbo].[Workflow]
GO
CREATE TABLE [dbo].[Workflow] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Name] nvarchar(255) NULL ,
[Version] int NULL ,
[Data] nvarchar(MAX) NULL ,
[AddTime] datetime NULL ,
[Comment] nvarchar(255) NULL ,
[AddUserID] int NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[Workflow]', RESEED, 4)
GO

-- ----------------------------
-- Records of Workflow
-- ----------------------------
SET IDENTITY_INSERT [dbo].[Workflow] ON
GO
INSERT INTO [dbo].[Workflow] ([ID], [Name], [Version], [Data], [AddTime], [Comment], [AddUserID]) VALUES (N'1', N'请销假流程', N'1', N'<mxGraphModel><root><Workflow label="MyWorkflow" description="" href="" id="0"><mxCell/></Workflow><Layer label="Default Layer" id="1"><mxCell parent="0"/></Layer><Symbol label="Symbol" description="" href="" id="2"><mxCell style="symbol;image=images/symbols/event.png" vertex="1" parent="1"><mxGeometry x="350" y="30" width="32" height="32" as="geometry"/></mxCell></Symbol><Task label="Task" description="" href="" id="3"><mxCell vertex="1" parent="1"><mxGeometry x="330" y="130" width="72" height="32" as="geometry"/></mxCell></Task><Symbol label="Symbol" description="" href="" id="4"><mxCell style="symbol;image=images/symbols/event_end.png" vertex="1" parent="1"><mxGeometry x="350" y="222" width="32" height="32" as="geometry"/></mxCell></Symbol><Edge label="" description="" id="5"><mxCell edge="1" parent="1" source="2" target="3"><mxGeometry relative="1" as="geometry"/></mxCell></Edge><Edge label="" description="" id="6"><mxCell edge="1" parent="1" source="3" target="4"><mxGeometry relative="1" as="geometry"/></mxCell></Edge></root></mxGraphModel>', N'2017-04-27 21:56:27.000', N'测试', N'1')
GO
GO
INSERT INTO [dbo].[Workflow] ([ID], [Name], [Version], [Data], [AddTime], [Comment], [AddUserID]) VALUES (N'4', N'工资发放流程', N'1', null, N'2017-05-08 21:00:51.000', N'', N'1')
GO
GO
SET IDENTITY_INSERT [dbo].[Workflow] OFF
GO

-- ----------------------------
-- Table structure for WorkflowEvent
-- ----------------------------
DROP TABLE [dbo].[WorkflowEvent]
GO
CREATE TABLE [dbo].[WorkflowEvent] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Name] nvarchar(255) NULL 
)


GO

-- ----------------------------
-- Records of WorkflowEvent
-- ----------------------------
SET IDENTITY_INSERT [dbo].[WorkflowEvent] ON
GO
SET IDENTITY_INSERT [dbo].[WorkflowEvent] OFF
GO

-- ----------------------------
-- Table structure for WorkflowInstance
-- ----------------------------
DROP TABLE [dbo].[WorkflowInstance]
GO
CREATE TABLE [dbo].[WorkflowInstance] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Name] nvarchar(255) NULL 
)


GO

-- ----------------------------
-- Records of WorkflowInstance
-- ----------------------------
SET IDENTITY_INSERT [dbo].[WorkflowInstance] ON
GO
SET IDENTITY_INSERT [dbo].[WorkflowInstance] OFF
GO

-- ----------------------------
-- Table structure for WorkflowLine
-- ----------------------------
DROP TABLE [dbo].[WorkflowLine]
GO
CREATE TABLE [dbo].[WorkflowLine] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Name] nvarchar(255) NULL 
)


GO

-- ----------------------------
-- Records of WorkflowLine
-- ----------------------------
SET IDENTITY_INSERT [dbo].[WorkflowLine] ON
GO
SET IDENTITY_INSERT [dbo].[WorkflowLine] OFF
GO

-- ----------------------------
-- Table structure for WorkflowNode
-- ----------------------------
DROP TABLE [dbo].[WorkflowNode]
GO
CREATE TABLE [dbo].[WorkflowNode] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Name] nvarchar(255) NULL 
)


GO

-- ----------------------------
-- Records of WorkflowNode
-- ----------------------------
SET IDENTITY_INSERT [dbo].[WorkflowNode] ON
GO
SET IDENTITY_INSERT [dbo].[WorkflowNode] OFF
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
-- Indexes structure for table AppFiles
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppFiles
-- ----------------------------
ALTER TABLE [dbo].[AppFiles] ADD PRIMARY KEY ([ID])
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
-- Indexes structure for table Leave
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table Leave
-- ----------------------------
ALTER TABLE [dbo].[Leave] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table Message
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table Message
-- ----------------------------
ALTER TABLE [dbo].[Message] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table MessageReceive
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table MessageReceive
-- ----------------------------
ALTER TABLE [dbo].[MessageReceive] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table Workflow
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table Workflow
-- ----------------------------
ALTER TABLE [dbo].[Workflow] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table WorkflowEvent
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table WorkflowEvent
-- ----------------------------
ALTER TABLE [dbo].[WorkflowEvent] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table WorkflowInstance
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table WorkflowInstance
-- ----------------------------
ALTER TABLE [dbo].[WorkflowInstance] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table WorkflowLine
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table WorkflowLine
-- ----------------------------
ALTER TABLE [dbo].[WorkflowLine] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table WorkflowNode
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table WorkflowNode
-- ----------------------------
ALTER TABLE [dbo].[WorkflowNode] ADD PRIMARY KEY ([ID])
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
ALTER TABLE [dbo].[AppConfig] ADD FOREIGN KEY ([SectionID]) REFERENCES [dbo].[AppConfigSection] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppConfig] ADD FOREIGN KEY ([SectionID]) REFERENCES [dbo].[AppConfigSection] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppConfig] ADD FOREIGN KEY ([SectionID]) REFERENCES [dbo].[AppConfigSection] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppConfig] ADD FOREIGN KEY ([SectionID]) REFERENCES [dbo].[AppConfigSection] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
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
ALTER TABLE [dbo].[AppConfigSection] ADD FOREIGN KEY ([SectionID]) REFERENCES [dbo].[AppConfigSection] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[AppDatabaseBackup]
-- ----------------------------
ALTER TABLE [dbo].[AppDatabaseBackup] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDatabaseBackup] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDatabaseBackup] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDatabaseBackup] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDatabaseBackup] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDatabaseBackup] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDatabaseBackup] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
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
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([TypeID]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([TypeID]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([TypeID]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([TypeID]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([TypeID]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([TypeID]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([TypeID]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([TypeID]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDept] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[AppDic]
-- ----------------------------
ALTER TABLE [dbo].[AppDic] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDic] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDic] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDic] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDic] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDic] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDic] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDic] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
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
ALTER TABLE [dbo].[AppDicItem] ADD FOREIGN KEY ([DicID]) REFERENCES [dbo].[AppDic] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDicItem] ADD FOREIGN KEY ([DicID]) REFERENCES [dbo].[AppDic] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDicItem] ADD FOREIGN KEY ([DicID]) REFERENCES [dbo].[AppDic] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDicItem] ADD FOREIGN KEY ([DicID]) REFERENCES [dbo].[AppDic] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDicItem] ADD FOREIGN KEY ([DicID]) REFERENCES [dbo].[AppDic] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDicItem] ADD FOREIGN KEY ([DicID]) REFERENCES [dbo].[AppDic] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppDicItem] ADD FOREIGN KEY ([DicID]) REFERENCES [dbo].[AppDic] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[AppFiles]
-- ----------------------------
ALTER TABLE [dbo].[AppFiles] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppFiles] ADD FOREIGN KEY ([ModuleID]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppFiles] ADD FOREIGN KEY ([ModuleID]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppFiles] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[AppLog]
-- ----------------------------
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Level]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Level]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Level]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Level]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Level]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Level]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Level]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Source]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Source]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Source]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Source]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Source]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Source]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Source]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Level]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Source]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppLog] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[AppMenu]
-- ----------------------------
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([IconType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([IconType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([IconType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([IconType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([IconType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([IconType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([OpenType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([OpenType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([OpenType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([OpenType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([UrlType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([UrlType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([UrlType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([UrlType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([UrlType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([UrlType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([IconType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([OpenType]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppMenu] ADD FOREIGN KEY ([PID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[AppRoleMenu]
-- ----------------------------
ALTER TABLE [dbo].[AppRoleMenu] ADD FOREIGN KEY ([MenuID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppRoleMenu] ADD FOREIGN KEY ([MenuID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppRoleMenu] ADD FOREIGN KEY ([MenuID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppRoleMenu] ADD FOREIGN KEY ([MenuID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppRoleMenu] ADD FOREIGN KEY ([MenuID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppRoleMenu] ADD FOREIGN KEY ([MenuID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppRoleMenu] ADD FOREIGN KEY ([MenuID]) REFERENCES [dbo].[AppMenu] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppRoleMenu] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppRoleMenu] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppRoleMenu] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppRoleMenu] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppRoleMenu] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppRoleMenu] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppRoleMenu] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
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
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([DeptID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([DeptID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([DeptID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([DeptID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([DeptID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
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
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([Sex]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([Sex]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([Sex]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([Sex]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([Sex]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([Sex]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([Sex]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[Leave] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([RoleID]) REFERENCES [dbo].[AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([DeptID]) REFERENCES [dbo].[AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([Sex]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[AppUser] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[Leave] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[Leave]
-- ----------------------------
ALTER TABLE [dbo].[Leave] ADD FOREIGN KEY ([AddUser]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[Leave] ADD FOREIGN KEY ([Status]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[Leave] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[Leave] ADD FOREIGN KEY ([Status]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[Leave] ADD FOREIGN KEY ([AddUser]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[Leave] ADD FOREIGN KEY ([Type]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[Message]
-- ----------------------------
ALTER TABLE [dbo].[Message] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[Message] ADD FOREIGN KEY ([Status]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[Message] ADD FOREIGN KEY ([TypeID]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[Message] ADD FOREIGN KEY ([TypeID]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[Message] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[Message] ADD FOREIGN KEY ([Status]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[MessageReceive]
-- ----------------------------
ALTER TABLE [dbo].[MessageReceive] ADD FOREIGN KEY ([MessageID]) REFERENCES [dbo].[Message] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[MessageReceive] ADD FOREIGN KEY ([Status]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[MessageReceive] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[MessageReceive] ADD FOREIGN KEY ([MessageID]) REFERENCES [dbo].[Message] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[MessageReceive] ADD FOREIGN KEY ([Status]) REFERENCES [dbo].[AppDicItem] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[MessageReceive] ADD FOREIGN KEY ([UserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [dbo].[Workflow]
-- ----------------------------
ALTER TABLE [dbo].[Workflow] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [dbo].[Workflow] ADD FOREIGN KEY ([AddUserID]) REFERENCES [dbo].[AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
