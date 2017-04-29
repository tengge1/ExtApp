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
    /// 消息BLL
    /// </summary>
    public class MessageBLL : BaseBLL<Message>
    {
        /// <summary>
        /// 列表
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="maxResults"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        public ListResult<Message> List(int firstResult, int maxResults, string name = "")
        {
            var query1 = Restrictions.Like("Title", name, MatchMode.Anywhere);
            var query2 = Restrictions.Like("Content", name, MatchMode.Anywhere);
            var query = Restrictions.Or(query1, query2);
            var total = 0;
            return base.List(firstResult, maxResults, out total, query);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override Result Add(Message model)
        {
            model.AddTime = DateTime.Now;
            model.AddUser = AdminHelper.Admin;
            model.ID = 0;
            model.Status = DicHelper.Get("MessageSendType", "Draft");
            model.Type = DicHelper.Get("MessageType", "UserMessage");
            return base.Add(model);
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override Result Edit(Message model)
        {
            var model1 = dal.Get(model.ID);
            if (model1 == null)
            {
                return new Result(300, "数据不存在！");
            }
            var sendStatus = DicHelper.Get("MessageSendType", "Send");
            if (model1.Status != null && sendStatus != null && model1.Status.ID == sendStatus.ID)
            {
                return new Result(300, "无法编辑发送状态的消息！");
            }
            model1.Comment = model.Comment;
            model1.Content = model.Content;
            model1.MessageReceives = model.MessageReceives;
            model1.Title = model.Title;
            return base.Edit(model1);
        }

        /// <summary>
        /// 发送
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        public Result Send(int ID)
        {
            var model = dal.Get(ID);
            if (model == null)
            {
                return new Result(300, "数据不存在！");
            }
            model.Status = DicHelper.Get("MessageSendType", "Send");
            model.SendTime = DateTime.Now;
            return base.Edit(model);
        }
    }
}
