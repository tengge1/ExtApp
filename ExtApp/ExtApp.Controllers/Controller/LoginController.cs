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
    /// 登录控制器
    /// </summary>
    public class LoginController : ApiBase
    {
        /// <summary>
        /// 登录
        /// </summary>
        /// <param name="username">用户名</param>
        /// <param name="password">密码</param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost]
        public JsonResult Login(string username, string password)
        {
            var result = AdminHelper.Login(username, password);
            if (result.Code == 200)
            {
                LogHelper.Info("用户" + username + "登录成功！", type: LogType.User);
            }
            result.user = null;
            return Json(result);
        }

        /// <summary>
        /// 注销
        /// </summary>
        /// <returns></returns>
        public JsonResult Logout()
        {
            var result = AdminHelper.Logout();
            return Json(result);
        }

        /// <summary>
        /// 修改密码
        /// </summary>
        /// <param name="oldPwd"></param>
        /// <param name="newPwd"></param>
        /// <param name="confirmPwd"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult ChangePwd(string oldPwd, string newPwd, string confirmPwd)
        {
            var result = AdminHelper.ChangePassword(oldPwd, newPwd, confirmPwd);
            return Json(result);
        }
    }
}
