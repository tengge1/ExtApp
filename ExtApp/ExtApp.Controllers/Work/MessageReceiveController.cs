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
    /// 消息接收控制器
    /// </summary>
    public class MessageReceiveController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private MessageReceiveBLL bll;

        /// <summary>
        /// 列表
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="maxResults"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List(int firstResult, int maxResults, string name = "")
        {
            var result = bll.List(firstResult, maxResults, name);
            return Json(result);
        }

        /// <summary>
        /// 阅读
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult Read(int ID)
        {
            var result = bll.Read(ID);
            return Json(result);
        }

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Delete(int ID)
        {
            var result = bll.Delete(ID);
            return Json(result);
        }
    }
}
