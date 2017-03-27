using NHibernate;
using NHibernate.Cfg;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using NHibernate.Criterion;

using ExtApp.Model;
using ExtApp.BLL;

namespace ExtApp.Controller
{
    /// <summary>
    /// 菜单控制器
    /// </summary>
    public class MenuController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private MenuBLL bll;

        /// <summary>
        /// 获取子节点
        /// </summary>
        /// <param name="PID"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult GetChildNodes(int PID)
        {
            var list = bll.GetChildNodes(PID);
            return base.List<MenuNode>(list.Count(), list);
        }

        /// <summary>
        /// 树形结构
        /// </summary>
        /// <returns></returns>
        public JsonResult Tree()
        {
            var obj = bll.Tree(Restrictions.Eq("Status", 1));
            return base.Tree(obj);
        }

        /// <summary>
        /// 获取列表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List()
        {
            var list = bll.List(null, "Sort", Sort.Asc);
            return Json(list);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="appMenu"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Add(Menu appMenu)
        {
            ISession session = NHibernateHelper.GetCurrentSession();

            // 查找父节点的Code
            string PCode = "";
            if (appMenu.PID > 0) // 不是顶级菜单
            {
                IQuery query1 = session.CreateQuery("from Menu where ID=:pid");
                query1.SetParameter("pid", appMenu.PID);
                Menu appMenu1 = query1.UniqueResult<Menu>();
                if (appMenu1 != null)
                {
                    PCode = appMenu1.Code;
                }
            }

            // 为当前结点生成Code
            string Code = "";
            IQuery query = session.CreateQuery("from Menu where PID=:pid");
            query.SetParameter("pid", appMenu.PID);
            IList<Menu> list = query.List<Menu>();
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

            // 添加菜单
            appMenu.Code = Code;
            session.SaveOrUpdate(appMenu);
            return Json(new Result
            {
                Code = 200,
                Msg = "添加成功！"
            });
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="appMenu"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Edit(Menu appMenu)
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            session.SaveOrUpdate(appMenu);
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
            session.Delete("from AppMenu where ID=" + id);
            session.Flush();
            return Json(new Result
            {
                Code = 200,
                Msg = "删除成功！"
            });
        }
    }
}
