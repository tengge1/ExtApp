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

namespace ExtApp.BLL.Controller
{
    /// <summary>
    /// 日志控制器
    /// </summary>
    public class LogController : ApiBase
    {
        /// <summary>
        /// 获取列表
        /// </summary>
        /// <param name="pageSize"></param>
        /// <param name="pageNum"></param>
        /// <param name="keyword"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List(int pageSize, int pageNum, string keyword = null, int? type = null, int? source = null, int? level = null)
        {
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<Log>();

            string hql = "from Log where 1=1";

            // 关键词
            if (keyword != null)
            {
                hql += " and (Title like :keyword or Content like :keyword) ";
            }

            // 类型
            if (type != null)
            {
                hql += " and Type=:type ";
            }

            // 来源
            if (source != null)
            {
                hql += " and Source=:source ";
            }

            // 等级
            if (level != null)
            {
                hql += " and Level=:level ";
            }

            // 排序
            hql += " order by ID desc ";

            IQuery query = session.CreateQuery(hql);
            if (keyword != null)
            {
                query.SetParameter("keyword", "%" + keyword + "%");
            }
            if (type != null)
            {
                query.SetParameter("type", type);
            }
            if (source != null)
            {
                query.SetParameter("source", source);
            }
            if (level != null)
            {
                query.SetParameter("level", level);
            }

            int total = query.List().Count;
            query.SetFirstResult((pageNum - 1) * pageSize);
            query.SetMaxResults(pageSize);
            var list = query.List<Log>();

            return Json(new ListResult<Log>
            {
                Code = 200,
                Msg = "执行成功",
                Total = total,
                Items = list
            });
        }
    }
}
