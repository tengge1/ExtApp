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
        /// 获取列表
        /// </summary>
        /// <param name="p"></param>
        /// <param name="total"></param>
        /// <returns></returns>
        public IList<Log> List(LogListParam p, out int total)
        {
            ICriterion query = Restrictions.Eq("Status", 0);

            // 名称
            if (p.Name != null)
            {
                var query1 = Restrictions.Like("Title", p.Name, MatchMode.Anywhere);
                var query2 = Restrictions.Like("Content", p.Name, MatchMode.Anywhere);
                var query3 = Restrictions.Or(query1, query2);
                query = Restrictions.And(query, query3);
            }

            // 类型
            if (p.TypeID != null)
            {
                var query1 = Restrictions.Eq("Type", new DicItem { ID = p.TypeID.Value });
                query = Restrictions.And(query, query1);
            }

            // 来源
            if (p.SourceID != null)
            {
                var query1 = Restrictions.Eq("Source", new DicItem { ID = p.SourceID.Value });
                query = Restrictions.And(query, query1);
            }

            // 等级
            if (p.LevelID != null)
            {
                var query1 = Restrictions.Eq("Level", new DicItem { ID = p.LevelID.Value });
                query = Restrictions.And(query, query1);
            }

            var list = dal.List(p.firstResult, p.maxResults, out total, query);
            return list;
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
