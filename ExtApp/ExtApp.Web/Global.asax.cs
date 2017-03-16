using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using System.Web.SessionState;

using NHibernate;
using Spring.Context.Support;

namespace ExtApp.Web
{
    /// <summary>
    /// Web应用程序
    /// </summary>
    public class WebApplication : System.Web.HttpApplication
    {
        /// <summary>
        /// 初始化
        /// </summary>
        public override void Init()
        {
            // 开启ApiController的Session功能
            this.PostAuthenticateRequest += (sender, e) => HttpContext.Current.SetSessionStateBehavior(SessionStateBehavior.Required);

            base.Init();
        }

        /// <summary>
        /// 应用程序启动
        /// </summary>
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

            // 创建Spring依赖注入容器
            WebApplicationContext ctx = ContextRegistry.GetContext() as WebApplicationContext;

            // 写日志
            LogHelper.Info("系统启动");
        }
    }
}
