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
    /// 字典帮助类
    /// </summary>
    public class DicHelper
    {
        /// <summary>
        /// 获取字典项
        /// </summary>
        /// <param name="dicCode">字典Code</param>
        /// <param name="dicItemCode">字典项Code</param>
        /// <returns></returns>
        public static DicItem Get(string dicCode, string dicItemCode)
        {
            var query1 = Restrictions.Eq("Code", dicCode);
            var query2 = Restrictions.Eq("Code", dicItemCode);

            var session = NHibernateHelper.GetCurrentSession();
            var result = session.CreateCriteria<DicItem>().Add(query2).CreateCriteria("Dic").Add(query1).UniqueResult<DicItem>();
            if (result == null)
            {
                return null;
            }
            else
            {
                return result;
            }
        }
    }
}
