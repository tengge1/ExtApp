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
        /// 获取列表
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="maxResults"></param>
        /// <param name="name"></param>
        /// <param name="status"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List(int firstResult, int maxResults, string name = "", int? status = null)
        {
            ICriterion query = Restrictions.Gt("Status", -1);

            // 编码、名称
            if (!string.IsNullOrEmpty(name))
            {
                var query1 = Restrictions.Like("Code", name, MatchMode.Anywhere);
                var query2 = Restrictions.Like("Name", name, MatchMode.Anywhere);
                var query3 = Restrictions.Or(query1, query2);
                query = Restrictions.And(query, query3);
            }

            // 状态
            if (status != null)
            {
                var query1 = Restrictions.Eq("Status", status);
                query = Restrictions.And(query, query1);
            }

            var total = 0;
            var list = bll.List(firstResult, maxResults, query, out total);

            return base.List<Role>(total, list);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="role"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add(Role role)
        {
            bll.Add(role);
            return base.Success("添加成功");
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="role"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Edit(Role role)
        {
            bll.Edit(role);
            return base.Success("修改成功");
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
            if (result)
            {
                return base.Success("删除成功！");
            }
            else
            {
                return base.Error("删除失败！");
            }
        }
    }
}
