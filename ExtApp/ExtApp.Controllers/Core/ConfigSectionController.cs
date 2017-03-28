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
        /// 获取列表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List()
        {
            var result = bll.List();
            return Json(result);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public JsonResult Add(ConfigSectionParam p)
        {
            var result = bll.Add(p);
            return Json(result);
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Edit(ConfigSectionParam p)
        {
            var result = bll.Edit(p);
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
