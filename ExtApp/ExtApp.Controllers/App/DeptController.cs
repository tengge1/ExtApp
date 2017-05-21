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
    /// 组织机构控制器
    /// </summary>
    public class DeptController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private DeptBLL bll;

        /// <summary>
        /// 获取所有子部门
        /// </summary>
        /// <param name="PID"></param>
        /// <returns></returns>
        public JsonResult GetChildNodes(int PID)
        {
            var result = bll.GetChildNodes(PID);
            return Json(result);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add([FromBody]Dept model)
        {
            var result = bll.Add(model);
            return Json(result);
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Edit(Dept model)
        {
            var result = bll.Edit(model);
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
