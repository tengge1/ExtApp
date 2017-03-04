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
    /// 组织机构控制器
    /// </summary>
    public class DeptController : ApiBase
    {
        /// <summary>
        /// 获取列表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List()
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            IQuery query = session.CreateQuery("from Dept order by PDept.ID,Layer");
            var list = query.List<Dept>();
            return Json(list);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="PID"></param>
        /// <param name="Name"></param>
        /// <param name="Layer"></param>
        /// <param name="Status"></param>
        /// <param name="Memo"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add([FromBody]Dept dept)
        {
            ISession session = NHibernateHelper.GetCurrentSession();

            // 查找父节点的Code
            string PCode = "";
            if (dept.PDept != null) // 不是顶级菜单
            {
                IQuery query1 = session.CreateQuery("from Dept where ID=:pid");
                query1.SetParameter("pid", dept.PDept.ID);
                var dept1 = query1.UniqueResult<Dept>();
                if (dept1 != null)
                {
                    PCode = dept1.Code;
                }
            }

            // 为当前结点生成Code
            string Code = "";
            IList<Dept> list = new List<Dept>();
            if (dept.PDept == null) // 顶级机构
            {
                IQuery query = session.CreateQuery("from Dept where PDept is null");
                list = query.List<Dept>();
            }
            else // 其他机构
            {
                IQuery query = session.CreateQuery("from Dept where PDept.ID=:pid");
                query.SetParameter("pid", dept.PDept.ID);
                list = query.List<Dept>();
            }

            for (var i = 1; i <= 999; i++)
            {
                if (i < 10) // 1-9
                {
                    Code = PCode + "00" + i;
                }
                else if (i < 100) // 10-99
                {
                    Code = PCode + "0" + i;
                }
                else // 100-999
                {
                    Code = PCode + i;
                }
                if (list.Where(o => o.Code == Code).Count() == 0)
                {
                    break;
                }
            }

            // 添加
            dept.Code = Code;
            session.SaveOrUpdate(dept);
            return Json(new Result
            {
                Code = 200,
                Msg = "添加成功！"
            });
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="dept"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Edit(Dept dept)
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            session.SaveOrUpdate(dept);
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
            session.Delete("from Dept where ID=" + id);
            session.Flush();
            return Json(new Result
            {
                Code = 200,
                Msg = "删除成功！"
            });
        }
    }
}
