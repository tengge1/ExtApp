using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 日志来源
    /// </summary>
    public enum LogSource
    {
        /// <summary>
        /// Web应用
        /// </summary>
        WebApp,

        /// <summary>
        /// 移动应用
        /// </summary>
        MobileApp,

        /// <summary>
        /// 桌面客户端
        /// </summary>
        DesktopApp
    }
}
