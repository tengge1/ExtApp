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
using NHibernate.Criterion;

namespace ExtApp.Controller
{
    /// <summary>
    /// 角色控制器
    /// </summary>
    public class RoleController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private RoleBLL bll;

        /// <summary>
        /// 列表
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List([FromUri]RoleListParam p)
        {
            var total = 0;
            var list = bll.List(p, out total);
            return base.List<Role>(total, list);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add(RoleEditParam p)
        {
            return Json(bll.Add(p));
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="role"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Edit(RoleEditParam p)
        {
            return Json(bll.Edit(p));
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
