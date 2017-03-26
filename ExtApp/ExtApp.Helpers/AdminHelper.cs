using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ExtApp.Model;
using System.Web.Security;
using System.Web;

namespace ExtApp
{
    /// <summary>
    /// 登录和权限帮助类
    /// </summary>
    public class AdminHelper
    {
        /// <summary>
        /// 当前登录用户
        /// </summary>
        public static User Admin
        {
            get
            {
                var userID = HttpContext.Current.Items["__userID"];
                if (userID == null)
                {
                    return null;
                }
                var session = NHibernateHelper.GetCurrentSession();
                var query = session.CreateQuery("from User where ID=:id");
                query.SetParameter("id", userID);
                return query.UniqueResult<User>();
            }
        }

        /// <summary>
        /// 用户登录
        /// </summary>
        /// <param name="username">用户名</param>
        /// <param name="password">密码</param>
        /// <returns></returns>
        public static LoginResult Login(string username, string password)
        {
            var session = NHibernateHelper.GetCurrentSession();
            var query = session.CreateQuery("from User where Username=:username and Password=:password");
            query.SetParameter("username", username);
            query.SetParameter("password", PasswordHelper.Crypt(password));
            var user = query.UniqueResult<User>();
            if (user == null)
            {
                return new LoginResult
                {
                    Code = 300,
                    Msg = "用户名或密码错误！"
                };
            }
            // 生成登录票据
            var cookie = FormsAuthentication.GetAuthCookie(username, false);
            var ticket = FormsAuthentication.Decrypt(cookie.Value);
            var newTicket = new FormsAuthenticationTicket(ticket.Version, ticket.Name, ticket.IssueDate, ticket.Expiration, ticket.IsPersistent, user.ID.ToString()); // 将用户ID写入ticket
            cookie.Value = FormsAuthentication.Encrypt(newTicket);
            HttpContext.Current.Response.Cookies.Add(cookie);

            // 验证权限后将获得的用户信息写入Session
            HttpContext.Current.Items.Add("__userID", user.ID.ToString());
            return new LoginResult
            {
                Code = 200,
                Msg = "登录成功！",
                user = user,
                Ticket = cookie.Value
            };
        }

        /// <summary>
        /// 注销
        /// </summary>
        /// <returns></returns>
        public static Result Logout()
        {
            HttpContext.Current.Response.Cookies.Clear();
            return new Result
            {
                Code = 200,
                Msg = "注销成功！"
            };
        }

        /// <summary>
        /// 修改密码
        /// </summary>
        /// <param name="oldPassword"></param>
        /// <param name="newPassword"></param>
        /// <param name="confirmPassword"></param>
        /// <returns></returns>
        public static Result ChangePassword(string oldPassword, string newPassword, string confirmPassword)
        {
            if (string.IsNullOrEmpty(oldPassword) || string.IsNullOrEmpty(newPassword) || string.IsNullOrEmpty(confirmPassword))
            {
                return new Result
                {
                    Code = 300,
                    Msg = "密码不允许为空！"
                };
            }
            if (newPassword != confirmPassword)
            {
                return new Result
                {
                    Code = 300,
                    Msg = "新密码和确认密码不相同！"
                };
            }

            // 校验原密码
            var username = AdminHelper.Admin.Username;
            var session = NHibernateHelper.GetCurrentSession();
            var query = session.QueryOver<User>();
            var users = query.Where(o => o.Username == username && o.Password == oldPassword).List();
            if (users.Count == 0)
            {
                return new Result
                {
                    Code = 300,
                    Msg = "原密码错误！"
                };
            }

            // 修改密码
            var user = users.FirstOrDefault();
            user.Password = newPassword;
            session.SaveOrUpdate(user);

            return new Result
            {
                Code = 200,
                Msg = "密码修改成功！"
            };
        }
    }
}
