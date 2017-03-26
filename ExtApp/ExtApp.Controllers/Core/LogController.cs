using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

using ExtApp.Model;
using ExtApp.BLL;

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
        /// <param name="p"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List([FromUri]LogListParam p)
        {
            var total = 0;
            var list = bll.List(p, out total);

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
