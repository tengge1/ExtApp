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
    /// 配置BLL
    /// </summary>
    public class ConfigBLL : BaseBLL<Config>
    {
        /// <summary>
        /// 获取列表
        /// </summary>
        /// <param name="PID"></param>
        /// <returns></returns>
        public IList<Config> List(int PID)
        {
            var query = Restrictions.Eq("Section", new ConfigSection { ID = PID });
            var list = dal.List(query, "Sort", Sort.Asc);
            return list;
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public Result Add(ConfigEditParam p)
        {
            var config = new Config
            {
                Comment = p.Comment,
                ID = 0,
                Key = p.Key,
                Name = p.Name,
                Section = p.PID == 0 ? null : new ConfigSection { ID = p.PID },
                Sort = p.Sort,
                Status = p.Status,
                Value = p.Value
            };
            var result = dal.Add(config);
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
        public Result Edit(ConfigEditParam p)
        {
            var model = dal.Get(p.ID);
            if (model == null)
            {
                return new Result(300, "数据不存在！");
            }
            model.Comment = p.Comment;
            model.Key = p.Key;
            model.Name = p.Name;
            model.Section = p.PID == 0 ? null : new ConfigSection { ID = p.PID };
            model.Sort = p.Sort;
            model.Status = p.Status;
            model.Value = p.Value;
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
