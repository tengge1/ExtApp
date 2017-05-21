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
    /// 字典项BLL
    /// </summary>
    public class DicItemBLL : BaseBLL<DicItem>
    {
        /// <summary>
        /// 列表
        /// </summary>
        /// <param name="PID"></param>
        /// <returns></returns>
        public ListResult<DicItem> List(int PID)
        {
            var query = Restrictions.Eq("Dic", new Dic { ID = PID });
            return base.List(query, "Sort", Sort.Asc);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override Result Add(DicItem model)
        {
            model.ID = 0;
            return base.Add(model);
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public override Result Edit(DicItem model)
        {
            var dicItem = dal.Get(model.ID);
            if (dicItem == null)
            {
                return new Result(300, "数据获取失败！");
            }
            dicItem.Code = model.Code;
            dicItem.Comment = model.Comment;
            dicItem.Dic = model.Dic;
            dicItem.Name = model.Name;
            dicItem.Sort = model.Sort;
            dicItem.Status = model.Status;
            return base.Edit(dicItem);
        }
    }
}
