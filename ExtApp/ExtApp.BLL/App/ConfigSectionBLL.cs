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
        /// <param name="p"></param>
        /// <returns></returns>
        public Result Add(ConfigSectionParam p)
        {
            var model = new ConfigSection
            {
                Comment = p.Comment,
                ID = 0,
                Name = p.Name,
                Sort = p.Sort,
                Status = p.Status
            };
            var result = dal.Add(model);
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
        public Result Edit(ConfigSectionParam p)
        {
            var model = dal.Get(p.ID);
            if (model == null)
            {
                return new Result(300, "数据不存在！");
            }
            model.Comment = p.Comment;
            model.Name = p.Name;
            model.Sort = p.Sort;
            model.Status = p.Status;
            var result = dal.Edit(model);
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
