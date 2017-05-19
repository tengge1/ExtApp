using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ExtApp.Model;
using ExtApp.DAL;
using NHibernate.Criterion;

namespace ExtApp.BLL
{
    /// <summary>
    /// 日志BLL
    /// </summary>
    public class LogBLL : BaseBLL<Log>
    {
        /// <summary>
        /// 列表
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="maxResults"></param>
        /// <param name="name"></param>
        /// <param name="typeID"></param>
        /// <param name="sourceID"></param>
        /// <param name="levelID"></param>
        /// <returns></returns>
        public ListResult<Log> List(int firstResult, int maxResults, string name = null, int? typeID = null, int? sourceID = null, int? levelID = null)
        {
            ICriterion query = Restrictions.Eq("Status", 0);

            // 名称
            if (name != null)
            {
                var query1 = Restrictions.Like("Title", name, MatchMode.Anywhere);
                var query2 = Restrictions.Like("Content", name, MatchMode.Anywhere);
                var query3 = Restrictions.Or(query1, query2);
                query = Restrictions.And(query, query3);
            }

            // 类型
            if (typeID != null)
            {
                var query1 = Restrictions.Eq("Type", new DicItem { ID = typeID.Value });
                query = Restrictions.And(query, query1);
            }

            // 来源
            if (sourceID != null)
            {
                var query1 = Restrictions.Eq("Source", new DicItem { ID = sourceID.Value });
                query = Restrictions.And(query, query1);
            }

            // 等级
            if (levelID != null)
            {
                var query1 = Restrictions.Eq("Level", new DicItem { ID = levelID.Value });
                query = Restrictions.And(query, query1);
            }

            var total = 0;
            return base.List(firstResult, maxResults, out total, query);
        }

        /// <summary>
        /// 清空所有日志
        /// </summary>
        /// <returns></returns>
        public Result ClearAll()
        {
            var result = dal.Delete();
            if (result)
            {
                return new Result(200, "清空成功！");
            }
            else
            {
                return new Result(300, "清空失败！");
            }
        }
    }
}
