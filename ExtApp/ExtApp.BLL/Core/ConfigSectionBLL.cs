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
        /// 列表
        /// </summary>
        /// <returns></returns>
        public ListResult<ConfigSection> List()
        {
            var query = Restrictions.Gt("Status", -1);
            var list = dal.List(query, "ID", Sort.Asc);
            return new ListResult<ConfigSection>(200, "获取成功！", list.Count(), list);
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
                PSection = p.PID == 0 ? null : new ConfigSection { ID = p.PID },
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
            model.PSection = p.PID == 0 ? null : new ConfigSection { ID = p.PID };
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
