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
        /// <param name="fetchSize"></param>
        /// <param name="keyword"></param>
        /// <param name="type"></param>
        /// <param name="source"></param>
        /// <param name="level"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List(int firstResult, int fetchSize, string keyword = null, int? type = null, int? source = null, int? level = null)
        {
            ICriterion query = Restrictions.Eq("Status", 0);

            // 关键词
            if (keyword != null)
            {
                var query1 = Restrictions.Like("Title", keyword, MatchMode.Anywhere);
                var query2 = Restrictions.Like("Content", keyword, MatchMode.Anywhere);
                var query3 = Restrictions.Or(query1, query2);
                query = Restrictions.And(query, query3);
            }

            // 类型
            if (type != null)
            {
                var query1 = Restrictions.Eq("Type", type);
                query = Restrictions.And(query, query1);
            }

            // 来源
            if (source != null)
            {
                var query1 = Restrictions.Eq("Source", source);
                query = Restrictions.And(query, query1);
            }

            // 等级
            if (level != null)
            {
                var query1 = Restrictions.Eq("Level", level);
                query = Restrictions.And(query, query1);
            }
            var total = 0;
            var list = bll.List(firstResult, fetchSize, query, out total);

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
