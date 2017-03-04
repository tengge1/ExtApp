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

namespace ExtApp.Controller
{
    /// <summary>
    /// 角色控制器
    /// </summary>
    public class RoleController : ApiBase
    {
        /// <summary>
        /// 获取列表
        /// </summary>
        /// <param name="pageSize"></param>
        /// <param name="pageNum"></param>
        /// <param name="name"></param>
        /// <param name="status"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List(int pageSize, int pageNum, string name = "", string status = "")
        {
            var session = NHibernateHelper.GetCurrentSession();
            var query = session.QueryOver<Role>().Where(o => o.Status != -1);

            // 编码、名称
            if (!string.IsNullOrEmpty(name))
            {
                query = query.Where(o => o.Name.Contains(name) || o.Code.Contains(name));
            }

            // 状态
            if (!string.IsNullOrEmpty(status))
            {
                query = query.Where(o => o.Status.ToString() == status);
            }

            var total = query.RowCount();
            var list = query.Skip((pageNum - 1) * pageSize).Take(pageSize).List<Role>();
            return Json(new ListResult<Role>
            {
                Code = 200,
                Msg = "执行成功",
                Total = total,
                Items = list
            });
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="role"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add(Role role)
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            session.SaveOrUpdate(role);
            return Json(new Result
            {
                Code = 200,
                Msg = "添加成功！"
            });
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="role"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Edit(Role role)
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            session.SaveOrUpdate(role);
            session.Flush();
            return Json(new Result
            {
                Code = 200,
                Msg = "修改成功！"
            });
        }

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Delete(int id)
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            Role role = session.Get<Role>(id);
            role.Status = -1;
            session.SaveOrUpdate(role);
            session.Flush();
            return Json(new Result
            {
                Code = 200,
                Msg = "删除成功！"
            });
        }
    }
}
