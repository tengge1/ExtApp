using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 执行结果模型
    /// </summary>
    public class Result
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        public Result()
        {

        }

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="Code">状态码</param>
        /// <param name="Msg">状态说明</param>
        public Result(int Code, string Msg)
        {
            this.Code = Code;
            this.Msg = Msg;
        }

        /// <summary>
        /// 状态码（200-成功，300-失败，301-登录超时）
        /// </summary>
        public int Code { get; set; }

        /// <summary>
        /// 状态说明
        /// </summary>
        public string Msg { get; set; }
    }
}
