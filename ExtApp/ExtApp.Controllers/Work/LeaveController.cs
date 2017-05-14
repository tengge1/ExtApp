using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Http.ModelBinding;

using ExtApp.Model;
using ExtApp.BLL;

namespace ExtApp.Controller
{
    /// <summary>
    /// 请假控制器
    /// </summary>
    public class LeaveController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private LeaveBLL bll;
    }
}
