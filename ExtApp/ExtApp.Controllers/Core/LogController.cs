using NHibernate;
using NHibernate.Cfg;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

using ExtApp.Model;
using ExtApp.BLL;
using NHibernate.Criterion;

namespace ExtApp.Controller
{
    /// <summary>
    /// 日志控制器
    /// </summary>
    public class LogController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private LogBLL bll;

        /// <summary>
        /// 获取列表
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="maxResults"></param>
        /// <param name="name"></param>
        /// <param name="type"></param>
        /// <param name="source"></param>
        /// <param name="level"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List(int firstResult, int maxResults, string name = null, int? type = null, int? source = null, int? level = null)
        {
            ICriterion query = Restrictions.Eq("Status", 0);

            // 关键词
            if (name != null)
            {
                var query1 = Restrictions.Like("Title", name, MatchMode.Anywhere);
                var query2 = Restrictions.Like("Content", name, MatchMode.Anywhere);
                var query3 = Restrictions.Or(query1, query2);
                query = Restrictions.And(query, query3);
            }

            // 类型
            if (type == 0) // 系统事件
            {
                var query1 = Restrictions.Eq("Type", LogType.System);
                query = Restrictions.And(query, query1);
            }
            else if (type == 1) // 用户事件
            {
                var query1 = Restrictions.Eq("Type", LogType.User);
                query = Restrictions.And(query, query1);
            }

            // 来源
            if (source == 0) // Web系统
            {
                var query1 = Restrictions.Eq("Source", LogSource.WebApp);
                query = Restrictions.And(query, query1);
            }
            else if (source == 1) // 移动应用
            {
                var query1 = Restrictions.Eq("Source", LogSource.MobileApp);
                query = Restrictions.And(query, query1);
            }
            else if (source == 2) // 桌面客户端
            {
                var query1 = Restrictions.Eq("Source", LogSource.DesktopApp);
                query = Restrictions.And(query, query1);
            }

            // 等级
            if (level == 0) // 崩溃
            {
                var query1 = Restrictions.Eq("Level", LogLevel.Fatal);
                query = Restrictions.And(query, query1);
            }
            else if (level == 1) // 错误
            {
                var query1 = Restrictions.Eq("Level", LogLevel.Error);
                query = Restrictions.And(query, query1);
            }
            else if (level == 2) // 警告
            {
                var query1 = Restrictions.Eq("Level", LogLevel.Warn);
                query = Restrictions.And(query, query1);
            }
            else if (level == 3) // 消息
            {
                var query1 = Restrictions.Eq("Level", LogLevel.Info);
                query = Restrictions.And(query, query1);
            }
            else if (level == 4) // 调试
            {
                var query1 = Restrictions.Eq("Level", LogLevel.Debug);
                query = Restrictions.And(query, query1);
            }

            var total = 0;
            var list = bll.List(firstResult, maxResults, query, out total);

            return base.List(total, list.Select(o => new
            {
                ID = o.ID,
                Type = o.Type,
                Source = o.Source,
                Level = o.Level,
                UserID = o.AddUser == null ? 0 : o.AddUser.ID,
                UserName = o.AddUser == null ? "系统" : o.AddUser.Username,
                AddTime = o.AddTime.ToString("yyyy-MM-dd HH:mm:ss"),
                IP = o.IP,
                Title = o.Title,
                Content = o.Content,
                Status = o.Status,
                Comment = o.Comment
            }).ToList<object>());
        }
    }
}
