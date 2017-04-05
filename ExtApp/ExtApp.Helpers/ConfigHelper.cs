using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Criterion;

using ExtApp.Model;

namespace ExtApp
{
    /// <summary>
    /// 配置帮助类
    /// </summary>
    public class ConfigHelper
    {
        /// <summary>
        /// 获取配置
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public static string Get(string key)
        {
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<Config>();
            var query = Restrictions.Eq("Key", key);
            criteria.Add(query);
            var config = criteria.UniqueResult<Config>();
            if (config == null)
            {
                return null;
            }
            else
            {
                return config.Value;
            }
        }
    }
}
