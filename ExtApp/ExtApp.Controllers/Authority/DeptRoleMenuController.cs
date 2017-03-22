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
    /// 机构角色菜单控制器
    /// </summary>
    public class DeptRoleMenuController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private DeptRoleMenuBLL bll;
    }
}
