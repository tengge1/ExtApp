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
    /// 配置节点BLL
    /// </summary>
    public class ConfigSectionBLL : BaseBLL<ConfigSection>
    {
        /// <summary>
        /// 获取子节点
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public ListResult<ConfigSectionNode> GetChildNodes(string name = "")
        {
            var query = Restrictions.Gt("Status", -1);
            var list = dal.List(query, "ID", Sort.Asc);

            var nodes = new List<ConfigSectionNode>();
            foreach (var i in list)
            {
                if (!i.Name.Contains(name))
                {
                    continue;
                }
                var node = new ConfigSectionNode
                {
                    Comment = i.Comment,
                    expandable = false,
                    expanded = false,
                    ID = i.ID,
                    id = i.ID,
                    leaf = true,
                    Name = i.Name,
                    Sort = i.Sort,
                    text = i.Name
                };
                nodes.Add(node);
            }
            return new ListResult<ConfigSectionNode>(200, "获取成功", nodes.Count(), nodes);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override Result Add(ConfigSection model)
        {
            model.ID = 0;
            return base.Add(model);
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override Result Edit(ConfigSection model)
        {
            var section = dal.Get(model.ID);
            if (model == null)
            {
                return new Result(300, "数据不存在！");
            }
            section.Comment = model.Comment;
            section.Name = model.Name;
            section.Sort = model.Sort;
            section.Status = model.Status;
            return base.Edit(model);
        }
    }
}
