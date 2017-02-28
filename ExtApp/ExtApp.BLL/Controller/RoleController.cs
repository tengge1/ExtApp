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

namespace ExtApp.BLL.Controller
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
            ISession session = NHibernateHelper.GetCurrentSession();
            IQuery query = session.CreateQuery("from Role where Status<>-1 and (Name like :name or Code like :name) order by Layer,ID desc");
            query.SetParameter("name", "%" + name + "%");
            int total = query.List().Count;
            query.SetFirstResult((pageNum - 1) * pageSize);
            query.SetMaxResults(pageSize);
            IList<Role> list = query.List<Role>();
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
