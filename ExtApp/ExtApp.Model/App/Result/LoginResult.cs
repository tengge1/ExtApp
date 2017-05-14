using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 登录结果模型
    /// </summary>
    public class LoginResult : Result
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        public LoginResult()
        {

        }

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="code"></param>
        /// <param name="msg"></param>
        /// <param name="user"></param>
        /// <param name="ticket"></param>
        public LoginResult(int code, string msg, User user = null, string ticket = null)
        {
            this.Code = code;
            this.Msg = msg;
            this.user = user;
            this.Ticket = ticket;
        }

        /// <summary>
        /// 登录用户信息
        /// </summary>
        public User user { get; set; }

        /// <summary>
        /// 登录票据
        /// </summary>
        public string Ticket { get; set; }
    }
}
