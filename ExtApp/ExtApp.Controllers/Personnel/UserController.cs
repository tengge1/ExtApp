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
        /// 获取列表
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List([FromUri]UserListParam p)
        {
            var total = 0;
            var list = bll.List(p, out total);

            return base.List(total, list.Select(o => new
            {
                ID = o.ID,
                Username = o.Username,
                Password = "***",
                Name = o.Name,
                Sex = o.Sex,
                DeptID = o.Dept == null ? 0 : o.Dept.ID,
                DeptName = o.Dept == null ? "" : o.Dept.Name,
                RoleID = o.Role == null ? 0 : o.Role.ID,
                RoleName = o.Role == null ? "" : o.Role.Name,
                Duty = o.Duty,
                Phone = o.Phone,
                Email = o.Email,
                Birthday = o.Birthday == null ? "" : o.Birthday.Value.ToString("yyyy-MM-dd"),
                Address = o.Address,
                FaceUrl = o.FaceUrl,
                AddTime = o.AddTime,
                Sort = o.Sort,
                Status = o.Status,
                Comment = o.Comment
            }).ToList<object>());
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add(UserEditParam p)
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
        public JsonResult Edit(UserEditParam p)
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
