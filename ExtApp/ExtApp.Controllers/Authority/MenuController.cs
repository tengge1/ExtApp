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
    /// 菜单控制器
    /// </summary>
    public class MenuController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private MenuBLL bll;

        /// <summary>
        /// 列表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List()
        {
            return Json(bll.List());
        }

        /// <summary>
        /// 获取子节点
        /// </summary>
        /// <param name="PID"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult GetChildNodes(int PID)
        {
            var list = bll.GetChildNodes(PID);
            return base.List<MenuNode>(list.Count(), list);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add(MenuEditParam p)
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
        public JsonResult Edit(MenuEditParam p)
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
