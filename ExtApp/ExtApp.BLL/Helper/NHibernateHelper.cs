using NHibernate;
using NHibernate.Cfg;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

using NHibernate.Mapping.Attributes;
using System.IO;

namespace ExtApp
{
    /// <summary>
    /// NHibernate帮助类
    /// </summary>
    public sealed class NHibernateHelper
    {
        /// <summary>
        /// Session中储存NHibernate对象的键
        /// </summary>
        private const string CurrentSessionKey = "nhibernate.current_session";

        /// <summary>
        /// NHibernate Session工厂类
        /// </summary>
        private static readonly ISessionFactory sessionFactory;

        /// <summary>
        /// 构造函数
        /// </summary>
        static NHibernateHelper()
        {
            Configuration cfg = new Configuration();
            cfg.Configure();
            HbmSerializer.Default.Validate = true;
            cfg.AddInputStream(HbmSerializer.Default.Serialize(typeof(Model.User).Assembly));
            sessionFactory = cfg.BuildSessionFactory();
        }

        /// <summary>
        /// 获取当前Session
        /// </summary>
        /// <returns></returns>
        public static ISession GetCurrentSession()
        {
            HttpContext context = HttpContext.Current;
            ISession currentSession = context.Items[CurrentSessionKey] as ISession;

            if (currentSession == null)
            {
                currentSession = sessionFactory.OpenSession();
                context.Items[CurrentSessionKey] = currentSession;
            }

            return currentSession;
        }

        /// <summary>
        /// 关闭当前Session
        /// </summary>
        public static void CloseSession()
        {
            HttpContext context = HttpContext.Current;
            ISession currentSession = context.Items[CurrentSessionKey] as ISession;

            if (currentSession == null)
            {
                // No current session
                return;
            }

            currentSession.Close();
            context.Items.Remove(CurrentSessionKey);
        }

        /// <summary>
        /// 关闭SessionFactory
        /// </summary>
        public static void CloseSessionFactory()
        {
            if (sessionFactory != null)
            {
                sessionFactory.Close();
            }
        }
    }
}
