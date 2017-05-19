using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;
using System.Web;
using NHibernate.Criterion;

using ExtApp.Model;
using ExtApp.DAL;

namespace ExtApp.BLL
{
    /// <summary>
    /// 登录BLL
    /// </summary>
    public class LoginBLL
    {
        /// <summary>
        /// dal
        /// </summary>
        private UserDAL dal;

        /// <summary>
        /// 登录
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public LoginResult Login(LoginModel model)
        {
            var query1 = Restrictions.Eq("Username", model.Username);
            var query2 = Restrictions.Eq("Password", PasswordHelper.Crypt(model.Password));
            var query = Restrictions.And(query1, query2);
            var user = dal.Get(query);
            if (user == null)
            {
                LogHelper.Info("用户" + model.Username + "登录失败！", type: LogType.User);
                return new LoginResult(300, "用户名或密码错误！");
            }

            // 生成登录票据
            var cookie = FormsAuthentication.GetAuthCookie(user.Username, false);
            var ticket = FormsAuthentication.Decrypt(cookie.Value);
            var newTicket = new FormsAuthenticationTicket(ticket.Version, ticket.Name, ticket.IssueDate, ticket.Expiration, ticket.IsPersistent, user.ID.ToString()); // 将用户ID写入ticket
            cookie.Value = FormsAuthentication.Encrypt(newTicket);
            HttpContext.Current.Response.Cookies.Add(cookie);

            // 验证权限后将获得的用户信息写入Session
            HttpContext.Current.Items.Add("__userID", user.ID.ToString());
            LogHelper.Info("用户" + model.Username + "登录成功！", type: LogType.User);
            return new LoginResult(200, "登录成功！", user, cookie.Value);
        }

        /// <summary>
        /// 注销
        /// </summary>
        /// <returns></returns>
        public Result Logout()
        {
            HttpContext.Current.Response.Cookies.Clear();
            return new Result(200, "注销成功！");
        }

        /// <summary>
        /// 修改密码
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public Result ChangePwd(ChangePwdModel model)
        {
            if (string.IsNullOrEmpty(model.OldPwd) || string.IsNullOrEmpty(model.NewPwd) || string.IsNullOrEmpty(model.ConfirmPwd))
            {
                return new Result(300, "密码不允许为空！");
            }

            if (model.NewPwd != model.ConfirmPwd)
            {
                return new Result(300, "新密码和确认密码不相同！");
            }

            // 校验原密码
            var query1 = Restrictions.Eq("Username", AdminHelper.Admin.Username);
            var query2 = Restrictions.Eq("Password", PasswordHelper.Crypt(model.OldPwd));
            var query = Restrictions.And(query1, query2);
            var user = dal.Get(query);
            if (user == null)
            {
                return new Result(300, "原密码错误！");
            }

            // 修改密码
            user.Password = PasswordHelper.Crypt(model.NewPwd);
            dal.Update(user);

            return new Result(200, "密码修改成功！");
        }
    }
}
