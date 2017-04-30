using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Criterion;

using ExtApp.Model;

namespace ExtApp.BLL
{
    /// <summary>
    /// 消息接收BLL
    /// </summary>
    public class MessageReceiveBLL : BaseBLL<MessageReceive>
    {
        /// <summary>
        /// 列表
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="maxResults"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        public ListResult<MessageReceive> List(int firstResult, int maxResults, string name = "")
        {
            // MessageReceive查询条件
            var query1 = Restrictions.Eq("User", AdminHelper.Admin);
            var query2 = Restrictions.Eq("Status", DicHelper.Get("MessageReceiveType", "Delete"));
            var query3 = Restrictions.Not(query2);
            var query4 = Restrictions.And(query1, query3);

            // Message查询条件
            var query5 = Restrictions.IsNotNull("SendTime");
            if (!string.IsNullOrEmpty(name))
            {
                var query6 = Restrictions.Like("Title", name, MatchMode.Anywhere);
                var query7 = Restrictions.Like("Content", name, MatchMode.Anywhere);
                var query8 = Restrictions.Or(query6, query7);
                query5 = Restrictions.And(query5, query8);
            }

            var total = dal.CreateCriterion().Add(query4).CreateCriteria("Message").Add(query5).SetProjection(Projections.RowCount()).UniqueResult<int>();
            var list = dal.CreateCriterion().Add(query4).CreateCriteria("Message").Add(query5).AddOrder(Order.Desc("ID")).SetFirstResult(firstResult).SetMaxResults(maxResults).List<MessageReceive>();
            return new ListResult<MessageReceive>(200, "数据获取成功！", total, list);
        }

        /// <summary>
        /// 阅读
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        public DataResult Read(int ID)
        {
            var model = dal.Get(ID);
            if (model == null)
            {
                return new DataResult(300, "数据获取失败！", null);
            }
            if (model.ReadTime == null)
            {
                model.ReadTime = DateTime.Now;
                model.Status = DicHelper.Get("MessageReceiveType", "Read");
                base.Edit(model);
            }
            return new DataResult(200, "数据获取成功！", model);
        }

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        public override Result Delete(int ID)
        {
            var model = dal.Get(ID);
            if (model == null)
            {
                return new Result(300, "数据获取失败！");
            }
            model.Status = DicHelper.Get("MessageReceiveType", "Delete");
            var result = dal.Edit(model);
            if (result)
            {
                return new Result(200, "删除成功！");
            }
            else
            {
                return new Result(300, "删除失败！");
            }
        }
    }
}
