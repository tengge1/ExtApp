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

        protected override System.Web.Http.Dependencies.IDependencyResolver BuildWebApiDependencyResolver()
        {
            //get the 'default' resolver, populated from the 'main' config metadata
            var resolver = base.BuildWebApiDependencyResolver();

            //check if its castable to a SpringWebApiDependencyResolver
            var springResolver = resolver as SpringWebApiDependencyResolver;

            //if it is, add additional config sources as needed
            if (springResolver != null)
            {
                //springResolver.AddChildApplicationContextConfigurationLocation("assembly://ExtApp.AppConfig/ExtApp.AppConfig/Controller.xml");
            }

            //return the fully-configured resolver
            return resolver;
        }
    }
}
