using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using System.Web.SessionState;

using NHibernate;
using Spring.Web.Mvc;

namespace ExtApp.Web
{
    /// <summary>
    /// Web应用程序
    /// </summary>
    public class WebApplication : SpringMvcApplication
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

            // 写日志
            LogHelper.Info("系统启动");
        }

        /// <summary>
        /// 解决“会话状态已创建一个会话 ID，但由于响应已被应用程序刷新而无法保存它。”错误
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Session_Start(object sender, EventArgs e)
        {
            var sessionId = Session.SessionID;
        }
    }
}
