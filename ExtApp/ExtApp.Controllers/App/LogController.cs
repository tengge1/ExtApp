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
        /// 列表
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="maxResults"></param>
        /// <param name="name"></param>
        /// <param name="typeID"></param>
        /// <param name="sourceID"></param>
        /// <param name="levelID"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List(int firstResult, int maxResults, string name = null, int? typeID = null, int? sourceID = null, int? levelID = null)
        {
            var result = bll.List(firstResult, maxResults, name, typeID, sourceID, levelID);
            return Json(result);
        }

        /// <summary>
        /// 清空所有日志
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult ClearAll()
        {
            var result = bll.ClearAll();
            return Json(result);
        }
    }
}
