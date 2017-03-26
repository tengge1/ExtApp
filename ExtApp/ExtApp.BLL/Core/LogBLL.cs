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

            // 关键词
            if (p.name != null)
            {
                var query1 = Restrictions.Like("Title", p.name, MatchMode.Anywhere);
                var query2 = Restrictions.Like("Content", p.name, MatchMode.Anywhere);
                var query3 = Restrictions.Or(query1, query2);
                query = Restrictions.And(query, query3);
            }

            // 类型
            if (p.type == 0) // 系统事件
            {
                var query1 = Restrictions.Eq("Type", LogType.System);
                query = Restrictions.And(query, query1);
            }
            else if (p.type == 1) // 用户事件
            {
                var query1 = Restrictions.Eq("Type", LogType.User);
                query = Restrictions.And(query, query1);
            }

            // 来源
            if (p.source == 0) // Web系统
            {
                var query1 = Restrictions.Eq("Source", LogSource.WebApp);
                query = Restrictions.And(query, query1);
            }
            else if (p.source == 1) // 移动应用
            {
                var query1 = Restrictions.Eq("Source", LogSource.MobileApp);
                query = Restrictions.And(query, query1);
            }
            else if (p.source == 2) // 桌面客户端
            {
                var query1 = Restrictions.Eq("Source", LogSource.DesktopApp);
                query = Restrictions.And(query, query1);
            }

            // 等级
            if (p.level == 0) // 崩溃
            {
                var query1 = Restrictions.Eq("Level", LogLevel.Fatal);
                query = Restrictions.And(query, query1);
            }
            else if (p.level == 1) // 错误
            {
                var query1 = Restrictions.Eq("Level", LogLevel.Error);
                query = Restrictions.And(query, query1);
            }
            else if (p.level == 2) // 警告
            {
                var query1 = Restrictions.Eq("Level", LogLevel.Warn);
                query = Restrictions.And(query, query1);
            }
            else if (p.level == 3) // 消息
            {
                var query1 = Restrictions.Eq("Level", LogLevel.Info);
                query = Restrictions.And(query, query1);
            }
            else if (p.level == 4) // 调试
            {
                var query1 = Restrictions.Eq("Level", LogLevel.Debug);
                query = Restrictions.And(query, query1);
            }

            var list = dal.List(p.firstResult, p.maxResults, out total, query);
            return list;
        }
    }
}
