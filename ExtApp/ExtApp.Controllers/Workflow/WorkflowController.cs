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
    /// 工作流控制器
    /// </summary>
    public class WorkflowController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private WorkflowBLL bll;
    }
}
