/*
Navicat SQL Server Data Transfer

Source Server         : (LocalDB)\MSSQLLocalDB
Source Server Version : 120000
Source Host           : (LocalDB)\MSSQLLocalDB:1433
Source Database       : E:\EXTJS权限管理平台\EXTAPP.WEB\APP_DATA\EXTAPP.MDF
Source Schema         : dbo

Target Server Type    : SQL Server
Target Server Version : 120000
File Encoding         : 65001

Date: 2016-11-05 12:14:13
*/


-- ----------------------------
-- Table structure for AppConfigSection
-- ----------------------------
DROP TABLE [AppConfigSection]
GO
CREATE TABLE [AppConfigSection] (
[ID] int NOT NULL IDENTITY(1,1) ,
[SectionID] int NULL ,
[Name] nvarchar(255) NULL ,
[Layer] int NULL ,
[Status] int NULL ,
[Memo] nvarchar(255) NULL 
)


GO

-- ----------------------------
-- Records of AppConfigSection
-- ----------------------------
BEGIN TRANSACTION
GO
SET IDENTITY_INSERT [AppConfigSection] ON
GO
SET IDENTITY_INSERT [AppConfigSection] OFF
GO
COMMIT TRANSACTION
GO

-- ----------------------------
-- Table structure for AppDept
-- ----------------------------
DROP TABLE [AppDept]
GO
CREATE TABLE [AppDept] (
[ID] int NOT NULL IDENTITY(1,1) ,
[PID] int NULL ,
[Code] nvarchar(255) NULL ,
[Name] nvarchar(255) NULL ,
[Layer] int NULL ,
[Status] int NULL ,
[Memo] nvarchar(255) NULL 
)


GO
DBCC CHECKIDENT(N'[AppDept]', RESEED, 3013)
GO

-- ----------------------------
-- Records of AppDept
-- ----------------------------
BEGIN TRANSACTION
GO
SET IDENTITY_INSERT [AppDept] ON
GO
INSERT INTO [AppDept] ([ID], [PID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (N'3', null, N'001', N'中国移动', N'10', N'0', null), (N'2021', null, N'002', N'中国联通', N'20', N'0', null), (N'2022', N'3', N'001001', N'北京分部', N'0', N'0', null)
GO
GO
SET IDENTITY_INSERT [AppDept] OFF
GO
COMMIT TRANSACTION
GO

-- ----------------------------
-- Table structure for AppDic
-- ----------------------------
DROP TABLE [AppDic]
GO
CREATE TABLE [AppDic] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Code] nvarchar(255) NULL ,
[Type] int NULL ,
[Name] nvarchar(255) NULL ,
[Status] int NULL ,
[Memo] nvarchar(255) NULL 
)


GO
DBCC CHECKIDENT(N'[AppDic]', RESEED, 15)
GO

-- ----------------------------
-- Records of AppDic
-- ----------------------------
BEGIN TRANSACTION
GO
SET IDENTITY_INSERT [AppDic] ON
GO
INSERT INTO [AppDic] ([ID], [Code], [Type], [Name], [Status], [Memo]) VALUES (N'1', N'xtzd', N'0', N'系统字典', N'-1', N''), (N'2', N'xtzd', N'0', N'系统字典', N'-1', N''), (N'3', N'test', N'0', N'测试', N'-1', N''), (N'4', N'323', N'0', N'232', N'-1', N''), (N'5', N'Sex', N'1', N'性别', N'-1', N''), (N'6', N'mm', N'1', N'妈妈', N'-1', N''), (N'7', N'lala', N'0', N'434', N'-1', N'434'), (N'8', N'434', N'1', N'4343', N'-1', N'434'), (N'9', N'rer', N'1', N'rer', N'-1', N'rer'), (N'10', N'rt', N'1', N'trt', N'-1', N'trt'), (N'11', N'Sex', N'0', N'性别', N'0', N''), (N'12', N'LogType', N'0', N'日志类型', N'0', N''), (N'13', N'LogSource', N'0', N'日志来源', N'0', N''), (N'14', N'LogLevel', N'0', N'日志等级', N'0', N''), (N'15', N'test123', N'0', N'测试123', N'-1', N'444455555')
GO
GO
SET IDENTITY_INSERT [AppDic] OFF
GO
COMMIT TRANSACTION
GO

-- ----------------------------
-- Table structure for AppDicItem
-- ----------------------------
DROP TABLE [AppDicItem]
GO
CREATE TABLE [AppDicItem] (
[ID] int NOT NULL IDENTITY(1,1) ,
[DicID] int NULL ,
[Code] nvarchar(255) NULL ,
[Name] nvarchar(255) NULL ,
[Layer] int NULL ,
[Status] int NULL ,
[Memo] nvarchar(255) NULL 
)


GO

-- ----------------------------
-- Records of AppDicItem
-- ----------------------------
BEGIN TRANSACTION
GO
SET IDENTITY_INSERT [AppDicItem] ON
GO
SET IDENTITY_INSERT [AppDicItem] OFF
GO
COMMIT TRANSACTION
GO

-- ----------------------------
-- Table structure for AppLog
-- ----------------------------
DROP TABLE [AppLog]
GO
CREATE TABLE [AppLog] (
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
[Memo] nvarchar(255) NULL 
)


GO
DBCC CHECKIDENT(N'[AppLog]', RESEED, 1044)
GO

-- ----------------------------
-- Records of AppLog
-- ----------------------------
BEGIN TRANSACTION
GO
SET IDENTITY_INSERT [AppLog] ON
GO
INSERT INTO [AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (N'1', N'0', N'2', N'3', null, N'2016-10-24 22:11:36.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'2', N'1', N'2', N'3', null, N'2016-10-24 22:11:50.000', N'::1', N'用户admin登录成功！', N'', N'0', N''), (N'3', N'0', N'2', N'3', null, N'2016-10-24 22:22:56.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'4', N'1', N'2', N'3', null, N'2016-10-24 22:23:52.000', N'::1', N'用户admin登录成功！', N'', N'0', N''), (N'1002', N'0', N'2', N'3', null, N'2016-10-25 07:56:18.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1003', N'1', N'2', N'3', null, N'2016-10-25 07:56:26.000', N'::1', N'用户admin登录成功！', N'', N'0', N''), (N'1004', N'0', N'2', N'3', null, N'2016-10-25 08:01:13.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1005', N'1', N'2', N'3', N'1', N'2016-10-25 08:01:19.000', N'::1', N'用户admin登录成功！', N'', N'0', N''), (N'1006', N'1', N'2', N'3', N'1', N'2016-10-25 08:02:11.000', N'::1', N'用户admin登录成功！', N'', N'0', N''), (N'1007', N'0', N'2', N'3', null, N'2016-10-25 08:04:32.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1008', N'0', N'2', N'3', null, N'2016-10-26 07:58:18.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1009', N'1', N'2', N'3', N'1', N'2016-10-26 07:58:32.000', N'::1', N'用户admin登录成功！', N'', N'0', N''), (N'1010', N'0', N'2', N'3', null, N'2016-10-26 12:01:08.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1011', N'1', N'2', N'3', N'1', N'2016-10-26 12:01:16.000', N'::1', N'用户admin登录成功！', N'', N'0', N''), (N'1012', N'0', N'2', N'3', null, N'2016-10-27 07:42:53.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1013', N'1', N'2', N'3', N'1', N'2016-10-27 07:43:37.000', N'::1', N'用户admin登录成功！', N'', N'0', N''), (N'1014', N'0', N'2', N'3', null, N'2016-10-27 07:48:12.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1015', N'0', N'2', N'3', null, N'2016-10-27 07:51:38.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1016', N'0', N'2', N'3', null, N'2016-10-27 12:00:43.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1017', N'1', N'2', N'3', N'1', N'2016-10-27 12:00:52.000', N'::1', N'用户admin登录成功！', N'', N'0', N''), (N'1018', N'0', N'2', N'3', null, N'2016-10-27 12:18:15.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1019', N'0', N'2', N'3', null, N'2016-10-27 12:31:35.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1020', N'0', N'2', N'3', null, N'2016-10-28 22:02:51.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1021', N'1', N'2', N'3', N'1', N'2016-10-28 22:03:02.000', N'::1', N'用户admin登录成功！', N'', N'0', N''), (N'1022', N'0', N'2', N'3', null, N'2016-10-30 22:14:35.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1023', N'1', N'2', N'3', N'1', N'2016-10-30 22:14:45.000', N'::1', N'用户admin登录成功！', N'', N'0', N''), (N'1024', N'0', N'2', N'3', null, N'2016-10-31 19:35:03.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1025', N'1', N'2', N'3', N'1', N'2016-10-31 19:35:54.000', N'::1', N'用户admin登录成功！', N'', N'0', N''), (N'1026', N'0', N'2', N'3', null, N'2016-10-31 19:40:03.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1027', N'0', N'2', N'3', null, N'2016-10-31 19:44:28.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1028', N'0', N'2', N'3', null, N'2016-10-31 19:45:46.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1029', N'0', N'2', N'3', null, N'2016-10-31 20:01:56.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1030', N'0', N'2', N'3', null, N'2016-10-31 20:03:55.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1031', N'0', N'2', N'3', null, N'2016-10-31 20:06:05.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1032', N'0', N'0', N'3', null, N'2016-10-31 20:08:52.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1033', N'0', N'0', N'3', null, N'2016-10-31 21:14:50.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1034', N'0', N'0', N'3', null, N'2016-11-01 21:07:42.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1035', N'1', N'0', N'3', N'1', N'2016-11-01 21:07:56.000', N'::1', N'用户admin登录成功！', N'', N'0', N''), (N'1036', N'0', N'0', N'3', null, N'2016-11-01 22:11:36.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1037', N'0', N'0', N'3', null, N'2016-11-02 20:28:16.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1038', N'1', N'0', N'3', N'1', N'2016-11-02 20:28:30.000', N'::1', N'用户admin登录成功！', N'', N'0', N''), (N'1039', N'1', N'0', N'3', null, N'2016-11-02 21:45:45.000', N'::1', N'用户admin登录成功！', N'', N'0', N''), (N'1040', N'0', N'0', N'3', null, N'2016-11-03 07:51:27.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1041', N'1', N'0', N'3', N'1', N'2016-11-03 07:51:47.000', N'::1', N'用户admin登录成功！', N'', N'0', N''), (N'1042', N'0', N'0', N'3', null, N'2016-11-04 12:57:04.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1043', N'0', N'0', N'3', null, N'2016-11-05 08:01:05.000', N'127.0.0.1', N'系统启动', N'', N'0', N''), (N'1044', N'1', N'0', N'3', N'1', N'2016-11-05 12:11:06.000', N'::1', N'用户admin登录成功！', N'', N'0', N'')
GO
GO
SET IDENTITY_INSERT [AppLog] OFF
GO
COMMIT TRANSACTION
GO

-- ----------------------------
-- Table structure for AppLoginSession
-- ----------------------------
DROP TABLE [AppLoginSession]
GO
CREATE TABLE [AppLoginSession] (
[Guid] nvarchar(255) NOT NULL ,
[UserID] int NULL ,
[LoginTime] datetime NULL ,
[LoginIP] nvarchar(255) NULL ,
[Expire] int NULL 
)


GO

-- ----------------------------
-- Records of AppLoginSession
-- ----------------------------
BEGIN TRANSACTION
GO
INSERT INTO [AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'02ee37c5-285e-440c-b9e8-2ec8fb7bfa86', N'1', N'2016-10-09 12:08:34.000', N'localhost', N'7200'), (N'0357d8ff-2329-4d94-823c-6ac5c353f2df', N'1', N'2016-10-10 21:12:09.000', N'localhost', N'7200'), (N'0e18276f-2bd1-41a1-a070-f14d480ed1f1', N'1', N'2016-10-10 21:01:57.000', N'localhost', N'7200'), (N'0f3d02cf-5def-48d3-a531-8f321df12890', N'1', N'2016-10-09 08:26:42.000', N'localhost', N'7200'), (N'195a7b28-3fd3-4dfd-af23-cdd59db98516', N'1', N'2016-10-15 12:46:33.000', N'localhost', N'7200'), (N'19c4b9fe-59ea-4f90-a258-61ee16a08908', N'1', N'2016-10-13 07:42:55.000', N'localhost', N'7200'), (N'1c7deb4e-10a9-4eca-af8d-745ddaff3981', N'1', N'2016-10-10 21:56:27.000', N'localhost', N'7200'), (N'1ed34557-b70c-448c-ab18-e60a1c13005b', N'1', N'2016-10-10 08:22:32.000', N'localhost', N'7200'), (N'1fca8def-16aa-47e7-9f67-1165823afdc9', N'1', N'2016-10-20 08:02:30.000', N'localhost', N'7200'), (N'20e77cbd-8b8a-448f-a49e-a19ac1175c04', N'1', N'2016-10-23 13:37:21.000', N'localhost', N'7200'), (N'27e79b4b-665d-4376-b706-085363e209c1', N'1', N'2016-10-08 20:08:36.000', N'localhost', N'7200'), (N'2b82f96f-939d-44a1-804e-c048222376f5', N'1', N'2016-10-23 12:03:41.000', N'localhost', N'7200'), (N'2e42812c-f302-4320-8d42-0785df76e0b1', N'1', N'2016-10-09 12:32:39.000', N'localhost', N'7200'), (N'2f3dfa76-65ee-4744-a486-fdde27958896', N'1', N'2016-10-17 12:08:10.000', N'localhost', N'7200'), (N'3cd834da-619d-4c8f-89e4-bf0071372246', N'1', N'2016-10-13 08:21:31.000', N'localhost', N'7200'), (N'3e68b768-d150-4f91-876e-b4d4642b83d2', N'1', N'2016-10-12 12:28:33.000', N'localhost', N'7200'), (N'3f2c3a19-c69c-4bc8-8ce4-f568c4bf9a31', N'1', N'2016-10-19 07:56:33.000', N'localhost', N'7200'), (N'410a2b5b-3a36-4a27-b2ac-80817c9f9638', N'1', N'2016-10-15 11:05:56.000', N'localhost', N'7200'), (N'5a367d20-17a1-4dc5-9956-132a4451571d', N'1', N'2016-10-08 11:58:45.000', N'localhost', N'7200'), (N'5cb88cb5-f907-4551-9b44-b70e4744d088', N'1', N'2016-10-07 19:53:05.000', N'localhost', N'7200'), (N'71e8f024-c8a1-46fd-b571-dbf2d86ae28b', N'1', N'2016-10-20 12:14:10.000', N'localhost', N'7200'), (N'783e97f1-a0c1-4505-8505-b3d176a30a0b', N'1', N'2016-10-08 17:11:51.000', N'localhost', N'7200'), (N'7a0d6758-3cbd-4a2b-9dc3-da544abde1b2', N'1', N'2016-10-23 12:10:50.000', N'localhost', N'7200'), (N'7bf849e8-0a5d-432e-81dd-1ee9d24045e2', N'1', N'2016-10-10 21:03:25.000', N'localhost', N'7200'), (N'7c5ad1d3-ecb9-4b73-88cb-bdd5a2ceaefa', N'1', N'2016-10-09 12:08:16.000', N'localhost', N'7200'), (N'8154ab0e-bcdf-4f14-8d02-d9ad5eafec6e', N'1', N'2016-10-10 20:18:19.000', N'localhost', N'7200'), (N'8424af31-23a0-42f5-b31e-f9d6af34cc4c', N'1', N'2016-10-15 14:56:14.000', N'localhost', N'7200'), (N'8e5476c1-ec42-43dc-bdb2-a3d9b5405033', N'1', N'2016-10-15 14:58:25.000', N'localhost', N'7200'), (N'983e4deb-dc41-41bb-8975-bad1e979fdd9', N'1', N'2016-10-11 12:09:43.000', N'localhost', N'7200'), (N'a3da809a-f816-4bb3-bf64-2cbd38181f09', N'1', N'2016-10-23 12:30:14.000', N'localhost', N'7200'), (N'a6bc0ab7-1dc8-4b28-a035-828738618ceb', N'1', N'2016-10-11 12:21:34.000', N'localhost', N'7200'), (N'a776572c-3c0f-4a4e-9a54-9dfe446c1a5e', N'1', N'2016-10-08 21:50:20.000', N'localhost', N'7200'), (N'af4cecc5-e509-4c72-bf72-285395bb4e7c', N'1', N'2016-10-11 12:20:46.000', N'localhost', N'7200'), (N'b416d3f3-4439-47ec-b61e-9a454b1d2324', N'1', N'2016-10-15 12:46:25.000', N'localhost', N'7200'), (N'be92d417-1ebd-482f-8b55-f63433ce208f', N'1', N'2016-10-23 13:29:22.000', N'localhost', N'7200'), (N'c5af8573-3765-4ab1-8850-bb753774b666', N'1', N'2016-10-23 15:41:51.000', N'localhost', N'7200'), (N'ca3cc407-e2c7-4bc8-926b-1a38ce7d96b6', N'1', N'2016-10-13 11:51:17.000', N'localhost', N'7200'), (N'dc099704-1c53-4a82-b51e-e6fefc198d13', N'1', N'2016-10-15 10:58:54.000', N'localhost', N'7200'), (N'e5efb487-965c-4200-96f8-6337165dcb6b', N'1', N'2016-10-12 07:40:06.000', N'localhost', N'7200'), (N'ead5d07e-cb1a-43d5-865b-b730ebed823c', N'1', N'2016-10-23 12:12:16.000', N'localhost', N'7200'), (N'f72cb10c-1b77-4f0f-b8a0-d221a33d817e', N'1', N'2016-10-10 21:10:43.000', N'localhost', N'7200'), (N'fb1cc49d-34ee-45fb-80ab-031a70471b28', N'1', N'2016-10-20 07:51:53.000', N'localhost', N'7200'), (N'fecc05ec-36a3-470f-9e32-40fbaa30db26', N'1', N'2016-10-10 21:22:06.000', N'localhost', N'7200')
GO
GO
COMMIT TRANSACTION
GO

-- ----------------------------
-- Table structure for AppMenu
-- ----------------------------
DROP TABLE [AppMenu]
GO
CREATE TABLE [AppMenu] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Name] nvarchar(255) NOT NULL ,
[Code] nvarchar(255) NOT NULL ,
[PID] int NOT NULL ,
[UrlType] int NULL ,
[Url] nvarchar(255) NULL ,
[IconType] int NULL ,
[Icon] nvarchar(255) NULL ,
[Layer] int NULL ,
[Status] int NULL ,
[Memo] nvarchar(255) NULL 
)


GO
DBCC CHECKIDENT(N'[AppMenu]', RESEED, 4001)
GO

-- ----------------------------
-- Records of AppMenu
-- ----------------------------
BEGIN TRANSACTION
GO
SET IDENTITY_INSERT [AppMenu] ON
GO
INSERT INTO [AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Layer], [Status], [Memo]) VALUES (N'1', N'系统管理', N'001', N'0', N'0', null, N'1', N'Computer', N'5', N'0', null), (N'2', N'权限管理', N'001001', N'1', N'0', null, N'1', N'Userkey', N'30', N'0', null), (N'3', N'系统菜单管理', N'001001001', N'2', N'1', N'ExtApp.view.sys.appMenu.List', N'1', N'Applicationsidetree', N'20', N'0', null), (N'4', N'在线办公', N'002', N'0', N'0', null, N'0', null, N'10', N'0', null), (N'5', N'组织机构管理', N'001002', N'1', N'1', N'ExtApp.view.sys.dept.List', N'1', N'Building', N'10', N'0', null), (N'6', N'用户管理', N'001003', N'1', N'1', N'ExtApp.view.sys.user.List', N'1', N'User', N'20', N'0', null), (N'7', N'角色管理', N'001001002', N'2', N'1', N'ExtApp.view.sys.role.List', N'1', N'Group', N'10', N'0', null), (N'8', N'数据字典', N'001004', N'1', N'0', N'ExtApp.view.sys.dic.List', N'1', N'Book', N'40', N'0', null), (N'9', N'系统配置', N'001005', N'1', N'0', null, N'1', N'Wrench', N'50', N'0', null), (N'10', N'系统日志', N'001006', N'1', N'1', N'ExtApp.view.sys.logs.List', N'1', N'Page', N'60', N'0', null), (N'1002', N'通知公告', N'002001', N'4', N'0', null, N'0', null, N'10', N'0', null), (N'1003', N'工作日志', N'002002', N'4', N'0', null, N'0', null, N'20', N'0', null), (N'1004', N'邮件收发', N'002003', N'4', N'0', null, N'0', null, N'30', N'0', null), (N'1005', N'发送通知公告', N'002001001', N'1002', N'0', null, N'0', null, N'10', N'0', null)
GO
GO
SET IDENTITY_INSERT [AppMenu] OFF
GO
COMMIT TRANSACTION
GO

-- ----------------------------
-- Table structure for AppRole
-- ----------------------------
DROP TABLE [AppRole]
GO
CREATE TABLE [AppRole] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Name] nvarchar(255) NULL ,
[Status] int NULL ,
[Memo] nvarchar(255) NULL ,
[Code] nvarchar(255) NULL ,
[Layer] int NULL 
)


GO
DBCC CHECKIDENT(N'[AppRole]', RESEED, 2001)
GO

-- ----------------------------
-- Records of AppRole
-- ----------------------------
BEGIN TRANSACTION
GO
SET IDENTITY_INSERT [AppRole] ON
GO
INSERT INTO [AppRole] ([ID], [Name], [Status], [Memo], [Code], [Layer]) VALUES (N'5', N'超级管理员', N'0', null, N'cjgly', N'10'), (N'6', N'总经理', N'0', null, N'zjl', N'20'), (N'7', N'测试', N'-1', null, N'cs', N'30'), (N'1002', N'副总经理', N'0', null, N'fzjl', N'30'), (N'1003', N'部门主管', N'0', null, N'bmzg', N'40'), (N'1004', N'项目经理', N'0', null, N'xmjl', N'50'), (N'1005', N'普通职工', N'0', null, N'ptzg', N'60')
GO
GO
SET IDENTITY_INSERT [AppRole] OFF
GO
COMMIT TRANSACTION
GO

-- ----------------------------
-- Table structure for AppUser
-- ----------------------------
DROP TABLE [AppUser]
GO
CREATE TABLE [AppUser] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Username] nvarchar(255) NULL ,
[Password] nvarchar(255) NULL ,
[Name] nvarchar(255) NULL ,
[Sex] int NULL ,
[RoleID] int NULL ,
[DeptID] int NULL ,
[Layer] int NULL ,
[Status] int NULL ,
[Memo] nvarchar(255) NULL 
)


GO
DBCC CHECKIDENT(N'[AppUser]', RESEED, 2)
GO

-- ----------------------------
-- Records of AppUser
-- ----------------------------
BEGIN TRANSACTION
GO
SET IDENTITY_INSERT [AppUser] ON
GO
INSERT INTO [AppUser] ([ID], [Username], [Password], [Name], [Sex], [RoleID], [DeptID], [Layer], [Status], [Memo]) VALUES (N'1', N'admin', N'123', N'管理员', N'0', N'5', N'3', N'0', N'0', N'超级管理员'), (N'2', N'test', N'123', N'测试', N'0', null, null, N'0', N'0', null)
GO
GO
SET IDENTITY_INSERT [AppUser] OFF
GO
COMMIT TRANSACTION
GO

-- ----------------------------
-- Indexes structure for table AppConfigSection
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppConfigSection
-- ----------------------------
ALTER TABLE [AppConfigSection] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppDept
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppDept
-- ----------------------------
ALTER TABLE [AppDept] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppDic
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppDic
-- ----------------------------
ALTER TABLE [AppDic] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppDicItem
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppDicItem
-- ----------------------------
ALTER TABLE [AppDicItem] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppLog
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppLog
-- ----------------------------
ALTER TABLE [AppLog] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppLoginSession
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppLoginSession
-- ----------------------------
ALTER TABLE [AppLoginSession] ADD PRIMARY KEY ([Guid])
GO

-- ----------------------------
-- Indexes structure for table AppMenu
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppMenu
-- ----------------------------
ALTER TABLE [AppMenu] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppRole
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppRole
-- ----------------------------
ALTER TABLE [AppRole] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table AppUser
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table AppUser
-- ----------------------------
ALTER TABLE [AppUser] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Foreign Key structure for table [AppConfigSection]
-- ----------------------------
ALTER TABLE [AppConfigSection] ADD FOREIGN KEY ([SectionID]) REFERENCES [AppConfigSection] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [AppDept]
-- ----------------------------
ALTER TABLE [AppDept] ADD FOREIGN KEY ([PID]) REFERENCES [AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [AppDicItem]
-- ----------------------------
ALTER TABLE [AppDicItem] ADD FOREIGN KEY ([DicID]) REFERENCES [AppDic] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [AppLog]
-- ----------------------------
ALTER TABLE [AppLog] ADD FOREIGN KEY ([UserID]) REFERENCES [AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [AppLoginSession]
-- ----------------------------
ALTER TABLE [AppLoginSession] ADD FOREIGN KEY ([UserID]) REFERENCES [AppUser] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

-- ----------------------------
-- Foreign Key structure for table [AppUser]
-- ----------------------------
ALTER TABLE [AppUser] ADD FOREIGN KEY ([RoleID]) REFERENCES [AppRole] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
ALTER TABLE [AppUser] ADD FOREIGN KEY ([DeptID]) REFERENCES [AppDept] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO
