using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Http.ModelBinding;

using ExtApp.Model;
using ExtApp.BLL;
using System.Web.Http.Controllers;

namespace ExtApp.Controller
{
    /// <summary>
    /// 消息控制器
    /// </summary>
    public class MessageController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private MessageBLL bll;

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
        /// 添加消息
        /// </summary>
        /// <param name="message"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add(Message message)
        {
            var result = bll.Add(message);
            return Json(result);
        }

        /// <summary>
        /// 编辑消息
        /// </summary>
        /// <param name="message"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Edit(Message message)
        {
            var result = bll.Edit(message);
            return Json(result);
        }

        /// <summary>
        /// 删除消息
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Delete(int ID)
        {
            var result = bll.Delete(ID);
            return Json(result);
        }

        /// <summary>
        /// 发送消息
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Send(int ID)
        {
            var result = bll.Send(ID);
            return Json(result);
        }
    }
}
