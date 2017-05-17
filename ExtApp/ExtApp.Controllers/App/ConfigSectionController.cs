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

namespace ExtApp.Controller
{
    /// <summary>
    /// 配置节控制器
    /// </summary>
    public class ConfigSectionController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private ConfigSectionBLL bll;

        /// <summary>
        /// 获取子节点
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult GetChildNodes(int PID = 0, string name = "")
        {
            var result = bll.GetChildNodes(name);
            return Json(result);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public JsonResult Add(ConfigSection model)
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
        public JsonResult Edit(ConfigSection model)
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
