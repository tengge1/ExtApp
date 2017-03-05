using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using NHibernate;

namespace ExtApp
{
    /// <summary>
    /// 输出sql语句到控制台
    /// </summary>
    public class SQLWatcher : EmptyInterceptor
    {
        /// <summary>
        /// 预处理sql语句
        /// </summary>
        /// <param name="sql"></param>
        /// <returns></returns>
        public override NHibernate.SqlCommand.SqlString OnPrepareStatement(NHibernate.SqlCommand.SqlString sql)
        {
            System.Diagnostics.Debug.WriteLine("sql语句:" + sql);
            return base.OnPrepareStatement(sql);
        }
    }
}
