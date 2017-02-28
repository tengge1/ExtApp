using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 返回执行结果
    /// </summary>
    public class Result
    {
        /// <summary>
        /// 状态码（200-成功，300-失败，301-登录超时）
        /// </summary>
        public int Code { get; set; }

        /// <summary>
        /// 状态码说明
        /// </summary>
        public string Msg { get; set; }
    }
}
