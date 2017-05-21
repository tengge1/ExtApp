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
    /// 用户控制器
    /// </summary>
    public class UserController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private UserBLL bll;

        /// <summary>
        /// 列表
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="maxResults"></param>
        /// <param name="name"></param>
        /// <param name="deptID"></param>
        /// <param name="roleID"></param>
        /// <param name="status"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List(int firstResult, int maxResults, string name = null, int? deptID = null, int? roleID = null, int? status = null)
        {
            var result = bll.List(firstResult, maxResults, name, deptID, roleID, status);
            return base.Json(result);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add(User user)
        {
            var result = bll.Add(user);
            return Json(result);
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Edit(User user)
        {
            var result = bll.Edit(user);
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

        /// <summary>
        /// 重置密码
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult ResetPassword(int ID)
        {
            var result = bll.ResetPassword(ID);
            return Json(result);
        }
    }
}
