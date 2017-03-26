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
    /// 登录控制器
    /// </summary>
    public class LoginController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private LoginBLL bll;

        /// <summary>
        /// 登录
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost]
        public JsonResult Login(LoginModel model)
        {
            return Json(bll.Login(model));
        }

        /// <summary>
        /// 注销
        /// </summary>
        /// <returns></returns>
        public JsonResult Logout()
        {
            return Json(bll.Logout());
        }

        /// <summary>
        /// 修改密码
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult ChangePwd([FromBody]ChangePwdModel model)
        {
            return Json(bll.ChangePwd(model));
        }
    }
}
