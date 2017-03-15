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
    /// 组织机构控制器
    /// </summary>
    public class DeptController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private DeptBLL bll = new DeptBLL();

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
                TypeID = o.Type == null ? 0 : o.Type.ID,
                TypeCode = o.Type == null ? "" : o.Type.Code,
                TypeName = o.Type == null ? "" : o.Type.Name,
                HeadID = o.Head == null ? 0 : o.Head.ID,
                HeadName = o.Head == null ? "" : o.Head.Name,
                AddUserID = o.AddUser == null ? 0 : o.AddUser.ID,
                AddUserName = o.AddUser == null ? "" : o.AddUser.Name,
                AddTime = o.AddTime.ToString("yyyy-MM-dd HH:mm:ss"),
                Sort = o.Sort,
                Status = o.Status,
                Comment = o.Comment
            }).ToList();

            return Json(list);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="pid"></param>
        /// <param name="name"></param>
        /// <param name="typeID"></param>
        /// <param name="headID"></param>
        /// <param name="sort"></param>
        /// <param name="status"></param>
        /// <param name="comment"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add(int pid, string name, int? typeID, int? headID, int? sort, int? status = 1, string comment = "")
        {
            var dept = new Dept
            {
                ID = 0,
                PDept = new Dept { ID = pid },
                Code = "",
                Name = name,
                Type = typeID == null ? null : new DicItem { ID = typeID.Value },
                Head = headID == null ? null : new User { ID = headID.Value },
                AddUser = AdminHelper.Admin,
                AddTime = DateTime.Now,
                Sort = sort == null ? 0 : sort.Value,
                Status = status == null ? 1 : status.Value,
                Comment = comment
            };
            return Json(bll.Add(dept));
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="dept"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Edit(Dept dept)
        {
            return Json(bll.Edit(dept));
        }

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Delete(int id)
        {
            return Json(bll.Delete(id));
        }
    }
}
