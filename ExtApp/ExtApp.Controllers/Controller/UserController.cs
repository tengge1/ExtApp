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
    /// 用户控制器
    /// </summary>
    public class UserController : ApiBase
    {
        /// <summary>
        /// 获取列表
        /// </summary>
        /// <param name="keyword"></param>
        /// <param name="pageSize"></param>
        /// <param name="pageNum"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List(string keyword, int pageSize, int pageNum)
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            IQuery query = session.CreateQuery("from User where Username like :keyword or Name like :keyword");
            query.SetParameter("keyword", "%" + keyword + "%");
            var list = query.List<User>().ToList();
            return Json(list);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add(User user)
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            session.SaveOrUpdate(user);
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
            ISession session = NHibernateHelper.GetCurrentSession();
            session.SaveOrUpdate(user);
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
            session.Delete("from User where ID=" + id);
            session.Flush();
            return Json(new Result
            {
                Code = 200,
                Msg = "删除成功！"
            });
        }
    }
}
