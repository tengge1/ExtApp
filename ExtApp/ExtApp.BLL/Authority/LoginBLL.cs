using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ExtApp.Model;

namespace ExtApp.BLL
{
    /// <summary>
    /// 登录BLL
    /// </summary>
    public class LoginBLL
    {
        /// <summary>
        /// 登录
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public LoginResult Login(LoginModel model)
        {
            var result = AdminHelper.Login(model.Username, model.Password);
            if (result.Code == 200)
            {
                LogHelper.Info("用户" + model.Username + "登录成功！", type: LogType.User);
            }
            else
            {
                LogHelper.Info("用户" + model.Username + "登录失败！", type: LogType.User);
            }
            result.user = null;
            return result;
        }

        /// <summary>
        /// 注销
        /// </summary>
        /// <returns></returns>
        public Result Logout()
        {
            return AdminHelper.Logout();
        }

        /// <summary>
        /// 修改密码
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public Result ChangePwd(ChangePwdModel model)
        {
            return AdminHelper.ChangePassword(model.OldPwd, model.NewPwd, model.ConfirmPwd);
        }
    }
}
