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
        /// 列表
        /// </summary>
        /// <param name="PID"></param>
        /// <returns></returns>
        public ListResult<Config> List(int PID)
        {
            var query = Restrictions.Eq("Section", new ConfigSection { ID = PID });
            return base.List(query, "Sort", Sort.Asc);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override Result Add(Config model)
        {
            model.ID = 0;
            return base.Add(model);
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override Result Edit(Config model)
        {
            var config = dal.Get(model.ID);
            if (model == null)
            {
                return new Result(300, "数据不存在！");
            }
            config.Comment = model.Comment;
            config.Key = model.Key;
            config.Name = model.Name;
            config.Section = model.Section;
            config.Sort = model.Sort;
            config.Status = model.Status;
            config.Value = model.Value;
            return base.Edit(config);
        }
    }
}
