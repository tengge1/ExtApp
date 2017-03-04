using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 日志严重程度
    /// </summary>
    public enum LogLevel
    {
        /// <summary>
        /// 崩溃
        /// </summary>
        Fatal,

        /// <summary>
        /// 错误
        /// </summary>
        Error,

        /// <summary>
        /// 警告
        /// </summary>
        Warn,

        /// <summary>
        /// 消息
        /// </summary>
        Info,

        /// <summary>
        /// 调试
        /// </summary>
        Debug
    }
}
