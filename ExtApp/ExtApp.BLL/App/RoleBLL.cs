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
        /// <param name="p"></param>
        /// <param name="total"></param>
        /// <returns></returns>
        public IList<Role> List(RoleListParam p, out int total)
        {
            ICriterion query = Restrictions.Gt("Status", -1);

            // 编码、名称
            if (!string.IsNullOrEmpty(p.Name))
            {
                var query1 = Restrictions.Like("Code", p.Name, MatchMode.Anywhere);
                var query2 = Restrictions.Like("Name", p.Name, MatchMode.Anywhere);
                var query3 = Restrictions.Or(query1, query2);
                query = Restrictions.And(query, query3);
            }

            // 状态
            if (p.Status != null)
            {
                var query1 = Restrictions.Eq("Status", p.Status);
                query = Restrictions.And(query, query1);
            }

            var list = dal.List(p.firstResult, p.maxResults, out total);
            return list;
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public Result Add(RoleEditParam p)
        {
            var role = new Role
            {
                ID = 0,
                Code = p.Code,
                Name = p.Name,
                Sort = p.Sort,
                Status = p.Status,
                Comment = p.Comment
            };
            var result = dal.Save(role);
            if (result)
            {
                return new Result(200, "添加成功！");
            }
            else
            {
                return new Result(300, "添加失败！");
            }
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public Result Edit(RoleEditParam p)
        {
            var role = dal.Get(p.ID);
            if (role == null)
            {
                return new Result(300, "角色不存在！");
            }
            role.Code = p.Code;
            role.Comment = p.Comment;
            role.Name = p.Name;
            role.Sort = p.Sort;
            role.Status = p.Status;
            var result = dal.Update(role);
            if (result)
            {
                return new Result(200, "编辑成功！");
            }
            else
            {
                return new Result(300, "编辑失败！");
            }
        }
    }
}
