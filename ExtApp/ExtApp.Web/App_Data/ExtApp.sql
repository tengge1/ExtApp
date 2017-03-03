USE [master]
GO
/****** Object:  Database [ExtApp]    Script Date: 03/03/2017 12:21:22 ******/
CREATE DATABASE [ExtApp] ON  PRIMARY 
( NAME = N'ExtApp', FILENAME = N'D:\Program Files\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\DATA\ExtApp.mdf' , SIZE = 2304KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'ExtApp_log', FILENAME = N'D:\Program Files\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\DATA\ExtApp_log.ldf' , SIZE = 768KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
EXEC dbo.sp_dbcmptlevel @dbname=N'ExtApp', @new_cmptlevel=80
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ExtApp].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ExtApp] SET ANSI_NULL_DEFAULT OFF
GO
ALTER DATABASE [ExtApp] SET ANSI_NULLS OFF
GO
ALTER DATABASE [ExtApp] SET ANSI_PADDING OFF
GO
ALTER DATABASE [ExtApp] SET ANSI_WARNINGS OFF
GO
ALTER DATABASE [ExtApp] SET ARITHABORT OFF
GO
ALTER DATABASE [ExtApp] SET AUTO_CLOSE OFF
GO
ALTER DATABASE [ExtApp] SET AUTO_CREATE_STATISTICS ON
GO
ALTER DATABASE [ExtApp] SET AUTO_SHRINK OFF
GO
ALTER DATABASE [ExtApp] SET AUTO_UPDATE_STATISTICS ON
GO
ALTER DATABASE [ExtApp] SET CURSOR_CLOSE_ON_COMMIT OFF
GO
ALTER DATABASE [ExtApp] SET CURSOR_DEFAULT  GLOBAL
GO
ALTER DATABASE [ExtApp] SET CONCAT_NULL_YIELDS_NULL OFF
GO
ALTER DATABASE [ExtApp] SET NUMERIC_ROUNDABORT OFF
GO
ALTER DATABASE [ExtApp] SET QUOTED_IDENTIFIER OFF
GO
ALTER DATABASE [ExtApp] SET RECURSIVE_TRIGGERS OFF
GO
ALTER DATABASE [ExtApp] SET  ENABLE_BROKER
GO
ALTER DATABASE [ExtApp] SET AUTO_UPDATE_STATISTICS_ASYNC OFF
GO
ALTER DATABASE [ExtApp] SET DATE_CORRELATION_OPTIMIZATION OFF
GO
ALTER DATABASE [ExtApp] SET TRUSTWORTHY OFF
GO
ALTER DATABASE [ExtApp] SET ALLOW_SNAPSHOT_ISOLATION OFF
GO
ALTER DATABASE [ExtApp] SET PARAMETERIZATION SIMPLE
GO
ALTER DATABASE [ExtApp] SET READ_COMMITTED_SNAPSHOT OFF
GO
ALTER DATABASE [ExtApp] SET  READ_WRITE
GO
ALTER DATABASE [ExtApp] SET RECOVERY SIMPLE
GO
ALTER DATABASE [ExtApp] SET  MULTI_USER
GO
ALTER DATABASE [ExtApp] SET PAGE_VERIFY CHECKSUM
GO
ALTER DATABASE [ExtApp] SET DB_CHAINING OFF
GO
EXEC sys.sp_db_vardecimal_storage_format N'ExtApp', N'ON'
GO
USE [ExtApp]
GO
/****** Object:  ForeignKey [FK__AppDept__PID__29572725]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppDept] DROP CONSTRAINT [FK__AppDept__PID__29572725]
GO
/****** Object:  ForeignKey [FK__AppConfig__Secti__286302EC]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppConfigSection] DROP CONSTRAINT [FK__AppConfig__Secti__286302EC]
GO
/****** Object:  ForeignKey [FK__AppDicIte__DicID__2D27B809]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppDicItem] DROP CONSTRAINT [FK__AppDicIte__DicID__2D27B809]
GO
/****** Object:  ForeignKey [FK__AppUser__DeptID__30F848ED]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppUser] DROP CONSTRAINT [FK__AppUser__DeptID__30F848ED]
GO
/****** Object:  ForeignKey [FK__AppUser__RoleID__300424B4]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppUser] DROP CONSTRAINT [FK__AppUser__RoleID__300424B4]
GO
/****** Object:  ForeignKey [FK__AppDeptRo__DeptI__2C3393D0]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppDeptRoleMenu] DROP CONSTRAINT [FK__AppDeptRo__DeptI__2C3393D0]
GO
/****** Object:  ForeignKey [FK__AppDeptRo__MenuI__2A4B4B5E]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppDeptRoleMenu] DROP CONSTRAINT [FK__AppDeptRo__MenuI__2A4B4B5E]
GO
/****** Object:  ForeignKey [FK__AppDeptRo__RoleI__2B3F6F97]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppDeptRoleMenu] DROP CONSTRAINT [FK__AppDeptRo__RoleI__2B3F6F97]
GO
/****** Object:  ForeignKey [FK__AppConfig__Secti__276EDEB3]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppConfig] DROP CONSTRAINT [FK__AppConfig__Secti__276EDEB3]
GO
/****** Object:  ForeignKey [FK__AppLoginS__UserI__2F10007B]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppLoginSession] DROP CONSTRAINT [FK__AppLoginS__UserI__2F10007B]
GO
/****** Object:  ForeignKey [FK__AppLog__UserID__2E1BDC42]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppLog] DROP CONSTRAINT [FK__AppLog__UserID__2E1BDC42]
GO
/****** Object:  Table [dbo].[AppLog]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppLog] DROP CONSTRAINT [FK__AppLog__UserID__2E1BDC42]
GO
DROP TABLE [dbo].[AppLog]
GO
/****** Object:  Table [dbo].[AppLoginSession]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppLoginSession] DROP CONSTRAINT [FK__AppLoginS__UserI__2F10007B]
GO
DROP TABLE [dbo].[AppLoginSession]
GO
/****** Object:  Table [dbo].[AppConfig]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppConfig] DROP CONSTRAINT [FK__AppConfig__Secti__276EDEB3]
GO
DROP TABLE [dbo].[AppConfig]
GO
/****** Object:  Table [dbo].[AppDeptRoleMenu]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppDeptRoleMenu] DROP CONSTRAINT [FK__AppDeptRo__DeptI__2C3393D0]
GO
ALTER TABLE [dbo].[AppDeptRoleMenu] DROP CONSTRAINT [FK__AppDeptRo__MenuI__2A4B4B5E]
GO
ALTER TABLE [dbo].[AppDeptRoleMenu] DROP CONSTRAINT [FK__AppDeptRo__RoleI__2B3F6F97]
GO
DROP TABLE [dbo].[AppDeptRoleMenu]
GO
/****** Object:  Table [dbo].[AppUser]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppUser] DROP CONSTRAINT [FK__AppUser__DeptID__30F848ED]
GO
ALTER TABLE [dbo].[AppUser] DROP CONSTRAINT [FK__AppUser__RoleID__300424B4]
GO
DROP TABLE [dbo].[AppUser]
GO
/****** Object:  Table [dbo].[AppDicItem]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppDicItem] DROP CONSTRAINT [FK__AppDicIte__DicID__2D27B809]
GO
DROP TABLE [dbo].[AppDicItem]
GO
/****** Object:  Table [dbo].[AppDic]    Script Date: 03/03/2017 12:21:23 ******/
DROP TABLE [dbo].[AppDic]
GO
/****** Object:  Table [dbo].[AppConfigSection]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppConfigSection] DROP CONSTRAINT [FK__AppConfig__Secti__286302EC]
GO
DROP TABLE [dbo].[AppConfigSection]
GO
/****** Object:  Table [dbo].[AppDept]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppDept] DROP CONSTRAINT [FK__AppDept__PID__29572725]
GO
DROP TABLE [dbo].[AppDept]
GO
/****** Object:  Table [dbo].[AppMenu]    Script Date: 03/03/2017 12:21:23 ******/
DROP TABLE [dbo].[AppMenu]
GO
/****** Object:  Table [dbo].[AppRole]    Script Date: 03/03/2017 12:21:23 ******/
DROP TABLE [dbo].[AppRole]
GO
/****** Object:  Table [dbo].[AppRole]    Script Date: 03/03/2017 12:21:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppRole](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NULL,
	[Status] [int] NULL,
	[Memo] [nvarchar](255) NULL,
	[Code] [nvarchar](255) NULL,
	[Layer] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AppRole] ON
INSERT [dbo].[AppRole] ([ID], [Name], [Status], [Memo], [Code], [Layer]) VALUES (5, N'超级管理员', 0, NULL, N'cjgly', 10)
INSERT [dbo].[AppRole] ([ID], [Name], [Status], [Memo], [Code], [Layer]) VALUES (6, N'总经理', 0, NULL, N'zjl', 20)
INSERT [dbo].[AppRole] ([ID], [Name], [Status], [Memo], [Code], [Layer]) VALUES (7, N'测试', -1, NULL, N'cs', 30)
INSERT [dbo].[AppRole] ([ID], [Name], [Status], [Memo], [Code], [Layer]) VALUES (1002, N'副总经理', 0, NULL, N'fzjl', 30)
INSERT [dbo].[AppRole] ([ID], [Name], [Status], [Memo], [Code], [Layer]) VALUES (1003, N'部门主管', 0, NULL, N'bmzg', 40)
INSERT [dbo].[AppRole] ([ID], [Name], [Status], [Memo], [Code], [Layer]) VALUES (1004, N'项目经理', 0, NULL, N'xmjl', 50)
INSERT [dbo].[AppRole] ([ID], [Name], [Status], [Memo], [Code], [Layer]) VALUES (1005, N'普通职工', 0, NULL, N'ptzg', 60)
INSERT [dbo].[AppRole] ([ID], [Name], [Status], [Memo], [Code], [Layer]) VALUES (2002, N'教师', 0, NULL, N'js', 70)
INSERT [dbo].[AppRole] ([ID], [Name], [Status], [Memo], [Code], [Layer]) VALUES (2003, N'学生', 0, NULL, N'xs', 80)
INSERT [dbo].[AppRole] ([ID], [Name], [Status], [Memo], [Code], [Layer]) VALUES (2004, N'测试', 0, NULL, N'test', 90)
INSERT [dbo].[AppRole] ([ID], [Name], [Status], [Memo], [Code], [Layer]) VALUES (2005, N'测试122222', -1, N'33333', N'cs12', 0)
SET IDENTITY_INSERT [dbo].[AppRole] OFF
/****** Object:  Table [dbo].[AppMenu]    Script Date: 03/03/2017 12:21:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppMenu](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Code] [nvarchar](255) NOT NULL,
	[PID] [int] NOT NULL,
	[UrlType] [int] NULL,
	[Url] [nvarchar](255) NULL,
	[IconType] [int] NULL,
	[Icon] [nvarchar](255) NULL,
	[Layer] [int] NULL,
	[Status] [int] NULL,
	[Memo] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AppMenu] ON
INSERT [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Layer], [Status], [Memo]) VALUES (1, N'系统管理', N'001', 0, 0, NULL, 1, N'Computer', 5, 0, NULL)
INSERT [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Layer], [Status], [Memo]) VALUES (2, N'权限管理', N'001001', 1, 0, NULL, 1, N'Userkey', 30, 0, NULL)
INSERT [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Layer], [Status], [Memo]) VALUES (3, N'系统菜单管理', N'001001001', 2, 1, N'App.view.sys.appMenu.List', 1, N'Applicationsidetree', 20, 0, NULL)
INSERT [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Layer], [Status], [Memo]) VALUES (4, N'在线办公', N'002', 0, 0, NULL, 0, NULL, 10, 0, NULL)
INSERT [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Layer], [Status], [Memo]) VALUES (5, N'组织机构管理', N'001002', 1, 1, N'App.view.sys.dept.List', 1, N'Building', 10, 0, NULL)
INSERT [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Layer], [Status], [Memo]) VALUES (6, N'用户管理', N'001003', 1, 1, N'App.view.sys.user.List', 1, N'User', 20, 0, NULL)
INSERT [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Layer], [Status], [Memo]) VALUES (7, N'角色管理', N'001001002', 2, 1, N'App.view.sys.role.List', 1, N'Group', 10, 0, NULL)
INSERT [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Layer], [Status], [Memo]) VALUES (8, N'数据字典', N'001004', 1, 0, N'App.view.sys.dic.List', 1, N'Book', 40, 0, NULL)
INSERT [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Layer], [Status], [Memo]) VALUES (9, N'系统配置', N'001005', 1, 1, N'App.view.sys.config.List', 1, N'Wrench', 50, 0, NULL)
INSERT [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Layer], [Status], [Memo]) VALUES (10, N'系统日志', N'001006', 1, 1, N'App.view.sys.logs.List', 1, N'Page', 60, 0, NULL)
INSERT [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Layer], [Status], [Memo]) VALUES (1002, N'通知公告', N'002001', 4, 0, NULL, 0, NULL, 10, 0, NULL)
INSERT [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Layer], [Status], [Memo]) VALUES (1003, N'工作日志', N'002002', 4, 0, NULL, 0, NULL, 20, 0, NULL)
INSERT [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Layer], [Status], [Memo]) VALUES (1004, N'邮件收发', N'002003', 4, 0, NULL, 0, NULL, 30, 0, NULL)
INSERT [dbo].[AppMenu] ([ID], [Name], [Code], [PID], [UrlType], [Url], [IconType], [Icon], [Layer], [Status], [Memo]) VALUES (1005, N'发送通知公告', N'002001001', 1002, 0, NULL, 0, NULL, 10, 0, NULL)
SET IDENTITY_INSERT [dbo].[AppMenu] OFF
/****** Object:  Table [dbo].[AppDept]    Script Date: 03/03/2017 12:21:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppDept](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[PID] [int] NULL,
	[Code] [nvarchar](255) NULL,
	[Name] [nvarchar](255) NULL,
	[Layer] [int] NULL,
	[Status] [int] NULL,
	[Memo] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AppDept] ON
INSERT [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (3, NULL, N'001', N'中国移动', 10, 0, NULL)
INSERT [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (2021, NULL, N'002', N'中国联通', 20, 0, NULL)
INSERT [dbo].[AppDept] ([ID], [PID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (2022, 3, N'001001', N'北京分部', 0, 0, NULL)
SET IDENTITY_INSERT [dbo].[AppDept] OFF
/****** Object:  Table [dbo].[AppConfigSection]    Script Date: 03/03/2017 12:21:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppConfigSection](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NULL,
	[Layer] [int] NULL,
	[Status] [int] NULL,
	[Memo] [nvarchar](255) NULL,
	[SectionID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AppConfigSection] ON
INSERT [dbo].[AppConfigSection] ([ID], [Name], [Layer], [Status], [Memo], [SectionID]) VALUES (1, N'组织机构配置', 1, 0, N'', NULL)
INSERT [dbo].[AppConfigSection] ([ID], [Name], [Layer], [Status], [Memo], [SectionID]) VALUES (2, N'用户配置', 2, 0, N'', NULL)
INSERT [dbo].[AppConfigSection] ([ID], [Name], [Layer], [Status], [Memo], [SectionID]) VALUES (3, N'权限配置', 3, 0, N'', NULL)
INSERT [dbo].[AppConfigSection] ([ID], [Name], [Layer], [Status], [Memo], [SectionID]) VALUES (4, N'角色配置', 1, 0, N'', 3)
INSERT [dbo].[AppConfigSection] ([ID], [Name], [Layer], [Status], [Memo], [SectionID]) VALUES (5, N'系统菜单配置', 2, 0, N'', 3)
INSERT [dbo].[AppConfigSection] ([ID], [Name], [Layer], [Status], [Memo], [SectionID]) VALUES (6, N'数据字典配置', 4, 0, N'', NULL)
INSERT [dbo].[AppConfigSection] ([ID], [Name], [Layer], [Status], [Memo], [SectionID]) VALUES (7, N'系统日志配置', 5, 0, N'', NULL)
INSERT [dbo].[AppConfigSection] ([ID], [Name], [Layer], [Status], [Memo], [SectionID]) VALUES (8, N'文件配置', 6, 0, N'', NULL)
INSERT [dbo].[AppConfigSection] ([ID], [Name], [Layer], [Status], [Memo], [SectionID]) VALUES (9, N'上传配置', 1, 0, N'', 8)
INSERT [dbo].[AppConfigSection] ([ID], [Name], [Layer], [Status], [Memo], [SectionID]) VALUES (10, N'下载配置', 2, 0, N'', 8)
SET IDENTITY_INSERT [dbo].[AppConfigSection] OFF
/****** Object:  Table [dbo].[AppDic]    Script Date: 03/03/2017 12:21:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppDic](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](255) NULL,
	[Type] [int] NULL,
	[Name] [nvarchar](255) NULL,
	[Status] [int] NULL,
	[Memo] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AppDic] ON
INSERT [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Memo]) VALUES (1, N'LogType', 0, N'日志类型', 0, N'')
INSERT [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Memo]) VALUES (2, N'LogSource', 0, N'日志来源', 0, N'')
INSERT [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Memo]) VALUES (3, N'LogLevel', 0, N'日志等级', 0, N'')
INSERT [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Memo]) VALUES (4, N'Sex', 0, N'性别', 0, N'')
INSERT [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Memo]) VALUES (5, N'FrameStyle', 0, N'框架样式', 0, N'')
INSERT [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Memo]) VALUES (6, N'ExtJsTheme', 0, N'ExtJs主题', 0, N'')
INSERT [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Memo]) VALUES (7, N'test1', 1, N'测试一', 0, N'')
INSERT [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Memo]) VALUES (8, N'test2', 1, N'测试2', 0, N'')
INSERT [dbo].[AppDic] ([ID], [Code], [Type], [Name], [Status], [Memo]) VALUES (9, N'test3', 1, N'测试3', -1, N'')
SET IDENTITY_INSERT [dbo].[AppDic] OFF
/****** Object:  Table [dbo].[AppDicItem]    Script Date: 03/03/2017 12:21:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppDicItem](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[DicID] [int] NULL,
	[Code] [nvarchar](255) NULL,
	[Name] [nvarchar](255) NULL,
	[Layer] [int] NULL,
	[Status] [int] NULL,
	[Memo] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AppDicItem] ON
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (1, 3, N'Fatel', N'崩溃', 1, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (2, 3, N'Error', N'错误', 2, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (3, 3, N'Warn', N'警告', 3, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (4, 3, N'Info', N'消息', 4, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (5, 3, N'Debug', N'调试', 5, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (6, 1, N'System', N'系统事件', 1, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (7, 1, N'User', N'用户事件', 2, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (8, 2, N'WebApp', N'Web应用', 1, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (9, 2, N'MobileApp', N'移动应用', 2, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (10, 2, N'DesktopApp', N'桌面客户端', 3, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (11, 4, N'Man', N'男', 1, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (12, 4, N'Woman', N'女', 2, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (13, 5, N'Accordion', N'折叠面板', 1, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (14, 5, N'Desktop', N'桌面样式', 2, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (15, 5, N'Navigation', N'导航样式', 3, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (16, 6, N'Classic', N'Classic主题', 1, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (17, 6, N'Aria', N'Aria主题', 2, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (18, 6, N'Crisp', N'Crisp主题', 3, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (19, 6, N'Gray', N'Gray主题', 4, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (20, 6, N'Neptune', N'Neptune主题', 5, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (21, 6, N'Triton', N'Triton主题', 6, 0, N'')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (22, 7, N'2222', N'测试子项11', 1, -1, N'test')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (23, 7, N'545', N'545', 555, -1, N'545')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (24, 7, N'456', N'123', 789, 0, N'1111111111111')
INSERT [dbo].[AppDicItem] ([ID], [DicID], [Code], [Name], [Layer], [Status], [Memo]) VALUES (25, 8, N'333', N'测试333', 33, 0, N'')
SET IDENTITY_INSERT [dbo].[AppDicItem] OFF
/****** Object:  Table [dbo].[AppUser]    Script Date: 03/03/2017 12:21:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppUser](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](255) NULL,
	[Password] [nvarchar](255) NULL,
	[Name] [nvarchar](255) NULL,
	[Sex] [int] NULL,
	[RoleID] [int] NULL,
	[DeptID] [int] NULL,
	[Layer] [int] NULL,
	[Status] [int] NULL,
	[Memo] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AppUser] ON
INSERT [dbo].[AppUser] ([ID], [Username], [Password], [Name], [Sex], [RoleID], [DeptID], [Layer], [Status], [Memo]) VALUES (1, N'admin', N'123', N'管理员', 0, 5, 3, 0, 0, N'超级管理员')
INSERT [dbo].[AppUser] ([ID], [Username], [Password], [Name], [Sex], [RoleID], [DeptID], [Layer], [Status], [Memo]) VALUES (3, NULL, NULL, NULL, 0, NULL, NULL, 0, 0, N'0')
INSERT [dbo].[AppUser] ([ID], [Username], [Password], [Name], [Sex], [RoleID], [DeptID], [Layer], [Status], [Memo]) VALUES (9, N'haha', N'123', N'测试', 0, 6, 2021, 2, 0, N'备注。。。')
SET IDENTITY_INSERT [dbo].[AppUser] OFF
/****** Object:  Table [dbo].[AppDeptRoleMenu]    Script Date: 03/03/2017 12:21:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppDeptRoleMenu](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Status] [int] NULL,
	[Memo] [nvarchar](255) NULL,
	[DeptID] [int] NULL,
	[RoleID] [int] NULL,
	[MenuID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AppConfig]    Script Date: 03/03/2017 12:21:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppConfig](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NULL,
	[ConfigKey] [nvarchar](255) NULL,
	[ConfigValue] [nvarchar](255) NULL,
	[Layer] [int] NULL,
	[Status] [int] NULL,
	[Memo] [nvarchar](255) NULL,
	[SectionID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AppConfig] ON
INSERT [dbo].[AppConfig] ([ID], [Name], [ConfigKey], [ConfigValue], [Layer], [Status], [Memo], [SectionID]) VALUES (1, N'用户初始密码', N'UserInitPwd', N'123', 1, 0, N'用户初始化密码', 2)
SET IDENTITY_INSERT [dbo].[AppConfig] OFF
/****** Object:  Table [dbo].[AppLoginSession]    Script Date: 03/03/2017 12:21:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppLoginSession](
	[Guid] [nvarchar](255) NOT NULL,
	[UserID] [int] NULL,
	[LoginTime] [datetime] NULL,
	[LoginIP] [nvarchar](255) NULL,
	[Expire] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'02ee37c5-285e-440c-b9e8-2ec8fb7bfa86', 1, CAST(0x0000A69A00C81B58 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'0357d8ff-2329-4d94-823c-6ac5c353f2df', 1, CAST(0x0000A69B015D680C AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'0e18276f-2bd1-41a1-a070-f14d480ed1f1', 1, CAST(0x0000A69B015A9ADC AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'0f3d02cf-5def-48d3-a531-8f321df12890', 1, CAST(0x0000A69A008B2B58 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'195a7b28-3fd3-4dfd-af23-cdd59db98516', 1, CAST(0x0000A6A000D28A0C AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'19c4b9fe-59ea-4f90-a258-61ee16a08908', 1, CAST(0x0000A69E007F24D4 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'1c7deb4e-10a9-4eca-af8d-745ddaff3981', 1, CAST(0x0000A69B016992E4 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'1ed34557-b70c-448c-ab18-e60a1c13005b', 1, CAST(0x0000A69B008A0660 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'1fca8def-16aa-47e7-9f67-1165823afdc9', 1, CAST(0x0000A6A5008485C8 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'20e77cbd-8b8a-448f-a49e-a19ac1175c04', 1, CAST(0x0000A6A800E07DEC AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'27e79b4b-665d-4376-b706-085363e209c1', 1, CAST(0x0000A699014BF3B0 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'2b82f96f-939d-44a1-804e-c048222376f5', 1, CAST(0x0000A6A800C6C3FC AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'2e42812c-f302-4320-8d42-0785df76e0b1', 1, CAST(0x0000A69A00CEB8B4 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'2f3dfa76-65ee-4744-a486-fdde27958896', 1, CAST(0x0000A6A200C7FF38 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'3cd834da-619d-4c8f-89e4-bf0071372246', 1, CAST(0x0000A69E0089BEE4 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'3e68b768-d150-4f91-876e-b4d4642b83d2', 1, CAST(0x0000A69D00CD986C AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'3f2c3a19-c69c-4bc8-8ce4-f568c4bf9a31', 1, CAST(0x0000A6A40082E36C AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'410a2b5b-3a36-4a27-b2ac-80817c9f9638', 1, CAST(0x0000A6A000B6E770 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'5a367d20-17a1-4dc5-9956-132a4451571d', 1, CAST(0x0000A69900C5691C AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'5cb88cb5-f907-4551-9b44-b70e4744d088', 1, CAST(0x0000A6980147B0AC AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'71e8f024-c8a1-46fd-b571-dbf2d86ae28b', 1, CAST(0x0000A6A500C9A518 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'783e97f1-a0c1-4505-8505-b3d176a30a0b', 1, CAST(0x0000A699011B67F4 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'7a0d6758-3cbd-4a2b-9dc3-da544abde1b2', 1, CAST(0x0000A6A800C8BAB8 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'7bf849e8-0a5d-432e-81dd-1ee9d24045e2', 1, CAST(0x0000A69B015B01FC AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'7c5ad1d3-ecb9-4b73-88cb-bdd5a2ceaefa', 1, CAST(0x0000A69A00C80640 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'8154ab0e-bcdf-4f14-8d02-d9ad5eafec6e', 1, CAST(0x0000A69B014E9EE4 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'8424af31-23a0-42f5-b31e-f9d6af34cc4c', 1, CAST(0x0000A6A000F62868 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'8e5476c1-ec42-43dc-bdb2-a3d9b5405033', 1, CAST(0x0000A6A000F6C1EC AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'983e4deb-dc41-41bb-8975-bad1e979fdd9', 1, CAST(0x0000A69C00C86C34 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'a3da809a-f816-4bb3-bf64-2cbd38181f09', 1, CAST(0x0000A6A800CE0EC8 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'a6bc0ab7-1dc8-4b28-a035-828738618ceb', 1, CAST(0x0000A69C00CBAD68 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'a776572c-3c0f-4a4e-9a54-9dfe446c1a5e', 1, CAST(0x0000A6990167E4D0 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'af4cecc5-e509-4c72-bf72-285395bb4e7c', 1, CAST(0x0000A69C00CB7528 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'b416d3f3-4439-47ec-b61e-9a454b1d2324', 1, CAST(0x0000A6A000D280AC AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'be92d417-1ebd-482f-8b55-f63433ce208f', 1, CAST(0x0000A6A800DE4C98 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'c5af8573-3765-4ab1-8850-bb753774b666', 1, CAST(0x0000A6A80102AFD4 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'ca3cc407-e2c7-4bc8-926b-1a38ce7d96b6', 1, CAST(0x0000A69E00C35C1C AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'dc099704-1c53-4a82-b51e-e6fefc198d13', 1, CAST(0x0000A6A000B4F8E8 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'e5efb487-965c-4200-96f8-6337165dcb6b', 1, CAST(0x0000A69D007E5EC8 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'ead5d07e-cb1a-43d5-865b-b730ebed823c', 1, CAST(0x0000A6A800C91F80 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'f72cb10c-1b77-4f0f-b8a0-d221a33d817e', 1, CAST(0x0000A69B015D0344 AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'fb1cc49d-34ee-45fb-80ab-031a70471b28', 1, CAST(0x0000A6A500819B4C AS DateTime), N'localhost', 7200)
INSERT [dbo].[AppLoginSession] ([Guid], [UserID], [LoginTime], [LoginIP], [Expire]) VALUES (N'fecc05ec-36a3-470f-9e32-40fbaa30db26', 1, CAST(0x0000A69B016023A8 AS DateTime), N'localhost', 7200)
/****** Object:  Table [dbo].[AppLog]    Script Date: 03/03/2017 12:21:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppLog](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Type] [int] NULL,
	[Source] [int] NULL,
	[Level] [int] NULL,
	[UserID] [int] NULL,
	[AddTime] [datetime] NULL,
	[IP] [nvarchar](255) NULL,
	[Title] [nvarchar](255) NULL,
	[Content] [nvarchar](255) NULL,
	[Status] [int] NULL,
	[Memo] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AppLog] ON
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1, 0, 2, 3, NULL, CAST(0x0000A6A9016DBC20 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (2, 1, 2, 3, NULL, CAST(0x0000A6A9016DCC88 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (3, 0, 2, 3, NULL, CAST(0x0000A6A90170D900 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4, 1, 2, 3, NULL, CAST(0x0000A6A901711AA0 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1002, 0, 2, 3, NULL, CAST(0x0000A6AA0082D1D8 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1003, 1, 2, 3, NULL, CAST(0x0000A6AA0082DB38 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1004, 0, 2, 3, NULL, CAST(0x0000A6AA00842B8C AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1005, 1, 2, 3, 1, CAST(0x0000A6AA00843294 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1006, 1, 2, 3, 1, CAST(0x0000A6AA00846F84 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1007, 0, 2, 3, NULL, CAST(0x0000A6AA008514C0 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1008, 0, 2, 3, NULL, CAST(0x0000A6AB00835E78 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1009, 1, 2, 3, 1, CAST(0x0000A6AB00836EE0 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1010, 0, 2, 3, NULL, CAST(0x0000A6AB00C610B0 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1011, 1, 2, 3, 1, CAST(0x0000A6AB00C61A10 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1012, 0, 2, 3, NULL, CAST(0x0000A6AC007F227C AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1013, 1, 2, 3, 1, CAST(0x0000A6AC007F560C AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1014, 0, 2, 3, NULL, CAST(0x0000A6AC00809850 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1015, 0, 2, 3, NULL, CAST(0x0000A6AC008189B8 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1016, 0, 2, 3, NULL, CAST(0x0000A6AC00C5F364 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1017, 1, 2, 3, 1, CAST(0x0000A6AC00C5FDF0 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1018, 0, 2, 3, NULL, CAST(0x0000A6AC00CAC434 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1019, 0, 2, 3, NULL, CAST(0x0000A6AC00CE6DB4 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1020, 0, 2, 3, NULL, CAST(0x0000A6AD016B54E4 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1021, 1, 2, 3, 1, CAST(0x0000A6AD016B61C8 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1022, 0, 2, 3, NULL, CAST(0x0000A6AF016E8DE4 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1023, 1, 2, 3, 1, CAST(0x0000A6AF016E999C AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1024, 0, 2, 3, NULL, CAST(0x0000A6B00142BCB4 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1025, 1, 2, 3, 1, CAST(0x0000A6B00142F878 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1026, 0, 2, 3, NULL, CAST(0x0000A6B001441C44 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1027, 0, 2, 3, NULL, CAST(0x0000A6B0014552D0 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1028, 0, 2, 3, NULL, CAST(0x0000A6B00145AE38 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1029, 0, 2, 3, NULL, CAST(0x0000A6B0014A1EF0 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1030, 0, 2, 3, NULL, CAST(0x0000A6B0014AAA64 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1031, 0, 2, 3, NULL, CAST(0x0000A6B0014B42BC AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1032, 0, 0, 3, NULL, CAST(0x0000A6B0014C0670 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1033, 0, 0, 3, NULL, CAST(0x0000A6B0015E24B8 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1034, 0, 0, 3, NULL, CAST(0x0000A6B1015C2F28 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1035, 1, 0, 3, 1, CAST(0x0000A6B1015C3F90 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1036, 0, 0, 3, NULL, CAST(0x0000A6B1016DBC20 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1037, 0, 0, 3, NULL, CAST(0x0000A6B201515A80 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1038, 1, 0, 3, 1, CAST(0x0000A6B201516AE8 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1039, 1, 0, 3, NULL, CAST(0x0000A6B20166A28C AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1040, 0, 0, 3, NULL, CAST(0x0000A6B3017B6500 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1041, 1, 0, 3, 1, CAST(0x0000A6B3017B662C AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1042, 0, 0, 3, NULL, CAST(0x0000A6B3017E0A58 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1043, 0, 0, 3, NULL, CAST(0x0000A6B401573680 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1044, 1, 0, 3, 1, CAST(0x0000A6B4015737AC AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1045, 0, 0, 3, NULL, CAST(0x0000A6B4015CED00 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1046, 0, 0, 3, NULL, CAST(0x0000A6B501505B08 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1047, 1, 0, 3, 1, CAST(0x0000A6B501505B08 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1048, 0, 0, 3, NULL, CAST(0x0000A6B50150EFDC AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1049, 0, 0, 3, NULL, CAST(0x0000A6B501546BA8 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1050, 1, 0, 3, 1, CAST(0x0000A6B501546CD4 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1051, 0, 0, 3, NULL, CAST(0x0000A6B501558614 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (1052, 0, 0, 3, NULL, CAST(0x0000A6B501714E30 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (2051, 0, 0, 3, NULL, CAST(0x0000A6B50173CA84 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (2052, 1, 0, 3, 1, CAST(0x0000A6B50173CBB0 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (2053, 0, 0, 3, NULL, CAST(0x0000A6B50181C8F0 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (2054, 1, 0, 3, 1, CAST(0x0000A6B501829E38 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (2055, 0, 0, 3, NULL, CAST(0x0000A6B50188376C AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (3055, 0, 0, 3, NULL, CAST(0x0000A6B60097D5EC AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (3056, 1, 0, 3, 1, CAST(0x0000A6B60097D718 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (3057, 0, 0, 3, NULL, CAST(0x0000A6B60098A1D4 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (3058, 0, 0, 3, NULL, CAST(0x0000A6B600A92F54 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (3059, 0, 0, 3, NULL, CAST(0x0000A6B800C98448 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (3060, 0, 0, 3, NULL, CAST(0x0000A6B800CB370C AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (3061, 0, 0, 3, NULL, CAST(0x0000A6B800CB57DC AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (3062, 0, 0, 3, NULL, CAST(0x0000A6B800CBB920 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (3063, 0, 0, 3, NULL, CAST(0x0000A6B800CCFA38 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (3064, 1, 0, 3, 1, CAST(0x0000A6B800CD026C AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4060, 0, 0, 3, NULL, CAST(0x0000A6B9007E19A4 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4061, 1, 0, 3, 1, CAST(0x0000A6B9007F1B74 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4062, 0, 0, 3, NULL, CAST(0x0000A6B900CBD66C AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4063, 1, 0, 3, 1, CAST(0x0000A6B900CBFF70 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4064, 1, 0, 3, 1, CAST(0x0000A6B900CC261C AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4065, 0, 0, 3, NULL, CAST(0x0000A6B900CCC450 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4066, 1, 0, 3, 1, CAST(0x0000A6B900CCCC84 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4067, 0, 0, 3, NULL, CAST(0x0000A6B900CDDB38 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4068, 0, 0, 3, NULL, CAST(0x0000A6B900CE1CD8 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4069, 0, 0, 3, NULL, CAST(0x0000A6B900CE6454 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4070, 0, 0, 3, NULL, CAST(0x0000A6BA007F32E4 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4071, 1, 0, 3, 1, CAST(0x0000A6BA007F4220 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4072, 0, 0, 3, NULL, CAST(0x0000A6BA00871BE4 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4073, 0, 0, 3, NULL, CAST(0x0000A6BA00C4FE78 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4074, 1, 0, 3, 1, CAST(0x0000A6BA00C507D8 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4075, 0, 0, 3, NULL, CAST(0x0000A6BA00CA5990 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4076, 0, 0, 3, NULL, CAST(0x0000A6BA00CC8E68 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4077, 0, 0, 3, NULL, CAST(0x0000A6BA00D6DFD0 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4078, 0, 0, 3, NULL, CAST(0x0000A6BA01623B34 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4079, 1, 0, 3, 1, CAST(0x0000A6BA01627E00 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4080, 0, 0, 3, NULL, CAST(0x0000A6BB0177C288 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (4081, 1, 0, 3, 1, CAST(0x0000A6BB0177C3B4 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5080, 0, 0, 3, NULL, CAST(0x0000A6BC00AB15A8 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5081, 1, 0, 3, 1, CAST(0x0000A6BC00AB192C AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5082, 0, 0, 3, NULL, CAST(0x0000A6BC00AB4104 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5083, 1, 0, 3, 1, CAST(0x0000A6BC00AB59A0 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5084, 0, 0, 3, NULL, CAST(0x0000A6BC00B0F658 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5085, 0, 0, 3, NULL, CAST(0x0000A6BC00BBD6B8 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5086, 0, 0, 3, NULL, CAST(0x0000A6BC0118E6F0 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5087, 1, 0, 3, 1, CAST(0x0000A6BC0118F17C AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
GO
print 'Processed 100 total records'
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5088, 0, 0, 3, NULL, CAST(0x0000A6BC011B2780 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5089, 0, 0, 3, NULL, CAST(0x0000A6BC011DA3D4 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5090, 0, 0, 3, NULL, CAST(0x0000A6BC016763E8 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5091, 1, 0, 3, 1, CAST(0x0000A6BC01676514 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5092, 1, 0, 3, 1, CAST(0x0000A6BC0167B974 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5093, 0, 0, 3, NULL, CAST(0x0000A6BC016A9964 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5094, 0, 0, 3, NULL, CAST(0x0000A6BC016DF0DC AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5095, 0, 0, 3, NULL, CAST(0x0000A6BC016EC3CC AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5096, 0, 0, 3, NULL, CAST(0x0000A6BC0171D3C8 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (5097, 0, 0, 3, NULL, CAST(0x0000A6BC017A00C0 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6097, 0, 0, 3, NULL, CAST(0x0000A6BE0082AB2C AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6098, 1, 0, 3, 1, CAST(0x0000A6BE0082B5B8 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6099, 0, 0, 3, NULL, CAST(0x0000A6BE00C55530 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6100, 1, 0, 3, 1, CAST(0x0000A6BE00C55E90 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6101, 0, 0, 3, NULL, CAST(0x0000A6BE00C6DB6C AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6102, 0, 0, 3, NULL, CAST(0x0000A6BF0080FE44 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6103, 1, 0, 3, 1, CAST(0x0000A6BF0081135C AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6104, 0, 0, 3, NULL, CAST(0x0000A6BF00C4A7C0 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6105, 1, 0, 3, 1, CAST(0x0000A6BF00C51264 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6106, 0, 0, 3, NULL, CAST(0x0000A6C0007FBC00 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6107, 1, 0, 3, NULL, CAST(0x0000A6C0007FC560 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6108, 0, 0, 3, NULL, CAST(0x0000A6C000CA4B80 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6109, 1, 0, 3, 1, CAST(0x0000A6C000CCD710 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6110, 1, 0, 3, 1, CAST(0x0000A6C000D72878 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6111, 0, 0, 3, NULL, CAST(0x0000A6C100818D3C AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6112, 1, 0, 3, 1, CAST(0x0000A6C1008198F4 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6113, 0, 0, 3, NULL, CAST(0x0000A6C1008CC328 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6114, 1, 0, 3, 1, CAST(0x0000A6C1008CC328 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6115, 0, 0, 3, NULL, CAST(0x0000A6C100C9B1FC AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6116, 1, 0, 3, 1, CAST(0x0000A6C100C9BB5C AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6117, 1, 0, 3, 1, CAST(0x0000A6C100D01BC8 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (6118, 0, 0, 3, NULL, CAST(0x0000A6C100D07730 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7118, 0, 0, 3, NULL, CAST(0x0000A6C200C9B454 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7119, 1, 0, 3, 1, CAST(0x0000A6C200CA40F4 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7120, 0, 0, 3, NULL, CAST(0x0000A6C200CBF868 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7121, 0, 0, 3, NULL, CAST(0x0000A6C200CF7D94 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7122, 0, 0, 3, NULL, CAST(0x0000A6C600C942A8 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7123, 0, 0, 3, NULL, CAST(0x0000A6C7008123C4 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7124, 1, 0, 3, 1, CAST(0x0000A6C700812E50 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7125, 0, 0, 3, NULL, CAST(0x0000A6C700C6B4C0 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7126, 1, 0, 3, NULL, CAST(0x0000A6C700C6C780 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7127, 0, 0, 3, NULL, CAST(0x0000A6C700C950B8 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7128, 1, 0, 3, NULL, CAST(0x0000A6C700C950B8 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7129, 0, 0, 3, NULL, CAST(0x0000A6C80082C9A4 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7130, 1, 0, 3, 1, CAST(0x0000A6C80082D55C AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7131, 1, 0, 3, 1, CAST(0x0000A6C80083D150 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7132, 0, 0, 3, NULL, CAST(0x0000A6DA00C6B13C AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7133, 1, 0, 3, NULL, CAST(0x0000A6DA00C6C3FC AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7134, 0, 0, 3, NULL, CAST(0x0000A6F800C43038 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7135, 1, 0, 3, 1, CAST(0x0000A6F800C43D1C AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7136, 0, 0, 3, NULL, CAST(0x0000A70500CB4774 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7137, 1, 0, 3, 1, CAST(0x0000A70500CB5584 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7138, 0, 0, 3, NULL, CAST(0x0000A71500CFD44C AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7139, 0, 0, 3, NULL, CAST(0x0000A71500D000D4 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7140, 1, 0, 3, 1, CAST(0x0000A71500D000D4 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7141, 0, 0, 3, NULL, CAST(0x0000A71A008256CC AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7142, 1, 0, 3, 1, CAST(0x0000A71A00826158 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7143, 0, 0, 3, NULL, CAST(0x0000A72400825474 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7144, 1, 0, 3, NULL, CAST(0x0000A7240082602C AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7145, 0, 0, 3, NULL, CAST(0x0000A72700C3A014 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7146, 1, 0, 3, NULL, CAST(0x0000A72700C3B2D4 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7147, 0, 0, 3, NULL, CAST(0x0000A72700C5FF1C AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7148, 0, 0, 3, NULL, CAST(0x0000A729007E73E0 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7149, 0, 0, 3, NULL, CAST(0x0000A72B007E1170 AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7150, 1, 0, 3, 1, CAST(0x0000A72B007E19A4 AS DateTime), N'::1', N'用户admin登录成功！', N'', 0, N'')
INSERT [dbo].[AppLog] ([ID], [Type], [Source], [Level], [UserID], [AddTime], [IP], [Title], [Content], [Status], [Memo]) VALUES (7151, 0, 0, 3, NULL, CAST(0x0000A72B008345DC AS DateTime), N'127.0.0.1', N'系统启动', N'', 0, N'')
SET IDENTITY_INSERT [dbo].[AppLog] OFF
/****** Object:  ForeignKey [FK__AppDept__PID__29572725]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppDept]  WITH CHECK ADD FOREIGN KEY([PID])
REFERENCES [dbo].[AppDept] ([ID])
GO
/****** Object:  ForeignKey [FK__AppConfig__Secti__286302EC]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppConfigSection]  WITH CHECK ADD FOREIGN KEY([SectionID])
REFERENCES [dbo].[AppConfigSection] ([ID])
GO
/****** Object:  ForeignKey [FK__AppDicIte__DicID__2D27B809]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppDicItem]  WITH CHECK ADD FOREIGN KEY([DicID])
REFERENCES [dbo].[AppDic] ([ID])
GO
/****** Object:  ForeignKey [FK__AppUser__DeptID__30F848ED]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppUser]  WITH CHECK ADD FOREIGN KEY([DeptID])
REFERENCES [dbo].[AppDept] ([ID])
GO
/****** Object:  ForeignKey [FK__AppUser__RoleID__300424B4]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppUser]  WITH CHECK ADD FOREIGN KEY([RoleID])
REFERENCES [dbo].[AppRole] ([ID])
GO
/****** Object:  ForeignKey [FK__AppDeptRo__DeptI__2C3393D0]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppDeptRoleMenu]  WITH CHECK ADD FOREIGN KEY([DeptID])
REFERENCES [dbo].[AppDept] ([ID])
GO
/****** Object:  ForeignKey [FK__AppDeptRo__MenuI__2A4B4B5E]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppDeptRoleMenu]  WITH CHECK ADD FOREIGN KEY([MenuID])
REFERENCES [dbo].[AppMenu] ([ID])
GO
/****** Object:  ForeignKey [FK__AppDeptRo__RoleI__2B3F6F97]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppDeptRoleMenu]  WITH CHECK ADD FOREIGN KEY([RoleID])
REFERENCES [dbo].[AppRole] ([ID])
GO
/****** Object:  ForeignKey [FK__AppConfig__Secti__276EDEB3]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppConfig]  WITH CHECK ADD FOREIGN KEY([SectionID])
REFERENCES [dbo].[AppConfigSection] ([ID])
GO
/****** Object:  ForeignKey [FK__AppLoginS__UserI__2F10007B]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppLoginSession]  WITH CHECK ADD FOREIGN KEY([UserID])
REFERENCES [dbo].[AppUser] ([ID])
GO
/****** Object:  ForeignKey [FK__AppLog__UserID__2E1BDC42]    Script Date: 03/03/2017 12:21:23 ******/
ALTER TABLE [dbo].[AppLog]  WITH CHECK ADD FOREIGN KEY([UserID])
REFERENCES [dbo].[AppUser] ([ID])
GO
