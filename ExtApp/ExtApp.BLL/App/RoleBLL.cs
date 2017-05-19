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
    /// 角色BLL
    /// </summary>
    public class RoleBLL : BaseBLL<Role>
    {
        /// <summary>
        /// 列表
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="maxResults"></param>
        /// <param name="name"></param>
        /// <param name="status"></param>
        /// <returns></returns>
        public ListResult<Role> List(int firstResult, int maxResults, string name = "", int? status = null)
        {
            ICriterion query = Restrictions.Gt("Status", -1);

            // 编码、名称
            if (!string.IsNullOrEmpty(name))
            {
                var query1 = Restrictions.Like("Code", name, MatchMode.Anywhere);
                var query2 = Restrictions.Like("Name", name, MatchMode.Anywhere);
                var query3 = Restrictions.Or(query1, query2);
                query = Restrictions.And(query, query3);
            }

            // 状态
            if (status != null)
            {
                var query1 = Restrictions.Eq("Status", status);
                query = Restrictions.And(query, query1);
            }
            var total = 0;
            return base.List(firstResult, maxResults, out total, query);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override Result Add(Role model)
        {
            // 判断Code是否重复
            var query = Restrictions.Eq("Code", model.Code);
            var role = dal.Get(query);
            if (role != null)
            {
                return new Result(300, "编码重复！");
            }

            model.ID = 0;
            model.Status = 1;

            return base.Add(model);
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override Result Edit(Role model)
        {
            var role = dal.Get(model.ID);
            if (role == null)
            {
                return new Result(300, "角色不存在！");
            }

            // 判断Code是否重复
            var query1 = Restrictions.Eq("Code", model.Code);
            var query2 = Restrictions.Eq("ID", model.ID);
            var query3 = Restrictions.Not(query2);
            var query = Restrictions.And(query1, query3);
            var role1 = dal.Get(query);
            if (role1 != null)
            {
                return new Result(300, "编码重复！");
            }

            role.Code = model.Code;
            role.Comment = model.Comment;
            role.Name = model.Name;
            role.Sort = model.Sort;
            role.Status = model.Status;
            return base.Edit(role);
        }
    }
}
