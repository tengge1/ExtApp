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
    /// 字典控制器
    /// </summary>
    public class DicController : ApiBase
    {
        /// <summary>
        /// 获取列表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List()
        {
            var session = NHibernateHelper.GetCurrentSession();
            IQuery query = session.CreateQuery("from Dic where Status=0 order by ID");
            var list = query.List<Dic>();
            return Json(new ListResult<Dic>
            {
                Code = 200,
                Msg = "获取数据成功！",
                Total = list.Count(),
                Items = list
            });
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add(Dic model)
        {
            var session = NHibernateHelper.GetCurrentSession();
            session.SaveOrUpdate(model);
            return Json(new Result
            {
                Code = 200,
                Msg = "添加成功！"
            });
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Edit(Dic model)
        {
            var session = NHibernateHelper.GetCurrentSession();
            session.SaveOrUpdate(model);
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
            var session = NHibernateHelper.GetCurrentSession();
            var model = session.Get<Dic>(id);
            model.Status = -1;
            session.SaveOrUpdate(model);
            session.Flush();
            return Json(new Result
            {
                Code = 200,
                Msg = "删除成功！"
            });
        }
    }
}
