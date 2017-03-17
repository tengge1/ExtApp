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
        /// 登录用户信息
        /// </summary>
        public User user { get; set; }

        /// <summary>
        /// 登录票据
        /// </summary>
        public string Ticket { get; set; }
    }
}
