using NHibernate;
using NHibernate.Cfg;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using NHibernate.Criterion;

using ExtApp.Model;
using ExtApp.BLL;

namespace ExtApp.Controller
{
    /// <summary>
    /// 角色菜单控制器
    /// </summary>
    public class RoleMenuController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private RoleMenuBLL bll;

        /// <summary>
        /// 获取带有权限信息的菜单树
        /// </summary>
        /// <param name="PID"></param>
        /// <param name="roleID"></param>
        /// <returns></returns>
        public JsonResult GetChildNodes(int PID, int roleID = 0)
        {
            return Json(bll.GetChildNodes(PID, roleID));
        }

        /// <summary>
        /// 保存权限信息
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public JsonResult Save(RoleMenuParam p)
        {
            return Json(bll.Save(p));
        }
    }
}
