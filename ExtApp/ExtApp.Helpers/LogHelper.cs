using NHibernate;
using NHibernate.Cfg;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

using ExtApp.Model;

namespace ExtApp
{
    /// <summary>
    /// 日志帮助类
    /// </summary>
    public sealed class LogHelper
    {
        /// <summary>
        /// 将日志写入数据库
        /// </summary>
        /// <param name="title">标题</param>
        /// <param name="content">内容</param>
        /// <param name="type">类型</param>
        /// <param name="source">来源</param>
        /// <param name="level">级别</param>
        /// <param name="memo">备注</param>
        public static void SaveLog(string title, string content = "", LogType type = LogType.System, LogSource source = LogSource.WebApp, LogLevel level = LogLevel.Info, string memo = "")
        {
            var log = new Log
            {
                AddTime = DateTime.Now,
                AddUser = null,
                Content = content,
                IP = "127.0.0.1",
                Level = level,
                Memo = memo,
                Source = source,
                Status = 0,
                Title = title,
                Type = type
            };
            if (type == LogType.User) // 用户事件写入IP和用户信息
            {
                log.AddUser = AdminHelper.Admin;
                log.IP = HttpContext.Current.Request.UserHostAddress;
            }
            var session = NHibernateHelper.GetCurrentSession();
            session.SaveOrUpdate(log);
            session.Flush();
        }

        /// <summary>
        /// 将致命消息写入数据库
        /// </summary>
        /// <param name="title">标题</param>
        /// <param name="content">内容</param>
        /// <param name="type">类型</param>
        /// <param name="source">来源</param>
        /// <param name="memo">备注</param>
        public static void Fatal(string title, string content = "", LogType type = LogType.System, LogSource source = LogSource.WebApp, string memo = "")
        {
            SaveLog(title, content, type, source, LogLevel.Fatal, memo);
        }

        /// <summary>
        /// 将错误消息写入数据库
        /// </summary>
        /// <param name="title">标题</param>
        /// <param name="content">内容</param>
        /// <param name="type">类型</param>
        /// <param name="source">来源</param>
        /// <param name="memo">备注</param>
        public static void Error(string title, string content = "", LogType type = LogType.System, LogSource source = LogSource.WebApp, string memo = "")
        {
            SaveLog(title, content, type, source, LogLevel.Error, memo);
        }

        /// <summary>
        /// 将警告消息写入数据库
        /// </summary>
        /// <param name="title">标题</param>
        /// <param name="content">内容</param>
        /// <param name="type">类型</param>
        /// <param name="source">来源</param>
        /// <param name="memo">备注</param>
        public static void Warn(string title, string content = "", LogType type = LogType.System, LogSource source = LogSource.WebApp, string memo = "")
        {
            SaveLog(title, content, type, source, LogLevel.Warn, memo);
        }

        /// <summary>
        /// 将一般消息写入数据库
        /// </summary>
        /// <param name="title">标题</param>
        /// <param name="content">内容</param>
        /// <param name="type">类型</param>
        /// <param name="source">来源</param>
        /// <param name="memo">备注</param>
        public static void Info(string title, string content = "", LogType type = LogType.System, LogSource source = LogSource.WebApp, string memo = "")
        {
            SaveLog(title, content, type, source, LogLevel.Info, memo);
        }

        /// <summary>
        /// 将一般消息写入数据库
        /// </summary>
        /// <param name="title">标题</param>
        /// <param name="content">内容</param>
        /// <param name="type">类型</param>
        /// <param name="source">来源</param>
        /// <param name="memo">备注</param>
        public static void Log(string title, string content = "", LogType type = LogType.System, LogSource source = LogSource.WebApp, string memo = "")
        {
            SaveLog(title, content, type, source, LogLevel.Info, memo);
        }

        /// <summary>
        /// 将调试消息写入数据库
        /// </summary>
        /// <param name="title">标题</param>
        /// <param name="content">内容</param>
        /// <param name="type">类型</param>
        /// <param name="source">来源</param>
        /// <param name="memo">备注</param>
        public static void Debug(string title, string content = "", LogType type = LogType.System, LogSource source = LogSource.WebApp, string memo = "")
        {
            SaveLog(title, content, type, source, LogLevel.Debug, memo);
        }
    }
}
