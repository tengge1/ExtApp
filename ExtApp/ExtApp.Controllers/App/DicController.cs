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
        /// 根据数据字典code获取字典项
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult GetItems(string code)
        {
            return Json(bll.GetItems(code));
        }

        /// <summary>
        /// 获取子节点
        /// </summary>
        /// <param name="name">名称搜索</param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult GetChildNodes(string name = "")
        {
            var result = bll.GetChildNodes(name);
            return Json(result);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add(Dic model)
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
        public JsonResult Edit(Dic model)
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
