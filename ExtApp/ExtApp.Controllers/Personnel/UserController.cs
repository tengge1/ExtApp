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
        /// <param name="firstResult"></param>
        /// <param name="maxResults"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List(int firstResult, int maxResults, string name = null)
        {
            ICriterion query = Restrictions.Gt("Status", -1);

            // 关键词
            if (name != null)
            {
                var query1 = Restrictions.Like("Username", name, MatchMode.Anywhere);
                var query2 = Restrictions.Like("Name", name, MatchMode.Anywhere);
                var query3 = Restrictions.Or(query1, query2);
                query = Restrictions.And(query, query3);
            }

            var total = 0;
            var list = bll.List(firstResult, maxResults, out total, query);

            return base.List(total, list.Select(o => new
            {
                ID = o.ID,
                Username = o.Username,
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
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add(User user)
        {
            bll.Add(user);
            return Json(new Result
            {
                Code = 200,
                Msg = "添加成功！"
            });
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Edit(User user)
        {
            bll.Edit(user);
            return Json(new Result
            {
                Code = 200,
                Msg = "修改成功！"
            });
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
            if (result == true)
            {
                return Success("删除成功！");
            }
            return Success("删除失败！");
        }
    }
}
