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
    /// 字典控制器
    /// </summary>
    public class DicController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private DicBLL bll;

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
        /// 获取子节点
        /// </summary>
        /// <returns></returns>
        public JsonResult GetChildNodes()
        {
            var result = bll.GetChildNodes();
            return Json(result);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add(DicEditParam p)
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
        public JsonResult Edit(DicEditParam p)
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
