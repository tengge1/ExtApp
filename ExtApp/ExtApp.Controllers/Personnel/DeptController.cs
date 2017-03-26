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
        /// 获取所有
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List()
        {
            var list = bll.List().Select(o => new
            {
                ID = o.ID,
                PID = o.PDept == null ? 0 : o.PDept.ID,
                PName = o.PDept == null ? "" : o.PDept.Name,
                Code = o.Code,
                Name = o.Name,
                Type = o.Type,
                AddUserID = o.AddUser == null ? 0 : o.AddUser.ID,
                AddUserName = o.AddUser == null ? "" : o.AddUser.Name,
                AddTime = o.AddTime == null ? "" : o.AddTime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                Sort = o.Sort,
                Status = o.Status,
                Comment = o.Comment
            }).ToList();

            return Json(list);
        }

        /// <summary>
        /// 获取所有子部门
        /// </summary>
        /// <param name="PID"></param>
        /// <returns></returns>
        public JsonResult GetChildNodes(int PID)
        {
            var list = bll.GetChildNodes(PID);
            return base.List<DeptTreeNode>(list.Count(), list);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add([FromBody]DeptEditParam p)
        {
            var dept = new Dept
            {
                ID = 0,
                PDept = new Dept { ID = p.PID },
                Code = "",
                Name = p.Name,
                Type = p.Type == null ? 0 : p.Type.Value,
                AddUser = AdminHelper.Admin,
                AddTime = DateTime.Now,
                Sort = p.Sort == null ? 0 : p.Sort.Value,
                Status = p.Status == null ? 1 : p.Status.Value,
                Comment = p.Comment
            };
            return Json(bll.Add(dept));
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Edit(DeptEditParam p)
        {
            // 获取机构
            var dept = bll.Get(p.ID);
            if (dept == null)
            {
                return Error("机构不存在！");
            }

            dept.Comment = p.Comment;
            dept.Name = p.Name;
            dept.PDept = p.PID == 0 ? null : new Dept { ID = p.PID };
            dept.Sort = p.Sort == null ? 0 : p.Sort.Value;
            dept.Status = p.Status == null ? 1 : p.Status.Value;
            dept.Type = p.Type == null ? 0 : p.Type.Value;

            return Json(bll.Edit(dept));
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
