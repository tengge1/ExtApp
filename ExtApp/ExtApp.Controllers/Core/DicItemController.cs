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

namespace ExtApp.Controller
{
    /// <summary>
    /// 字典项目控制器
    /// </summary>
    public class DicItemController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private DicItemBLL bll;

        /// <summary>
        /// 获取列表
        /// </summary>
        /// <param name="dicID"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List(int dicID)
        {
            var session = NHibernateHelper.GetCurrentSession();
            IQuery query = session.CreateQuery("from DicItem where Status=0 and Dict.ID=:dicID order by Layer");
            query.SetParameter("dicID", dicID);
            var list = query.List<DicItem>();
            return Json(new ListResult<DicItem>
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
        public JsonResult Add(DicItem model)
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
        public JsonResult Edit(DicItem model)
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
            var model = session.Get<DicItem>(id);
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
