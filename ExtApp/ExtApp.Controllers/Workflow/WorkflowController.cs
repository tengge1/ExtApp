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
    /// 工作流控制器
    /// </summary>
    public class WorkflowController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private WorkflowBLL bll;

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
        /// 添加
        /// </summary>
        /// <param name="workflow"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add(Workflow model)
        {
            var result = bll.Add(model);
            return Json(result);
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Edit(Workflow model)
        {
            var result = bll.Edit(model);
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
