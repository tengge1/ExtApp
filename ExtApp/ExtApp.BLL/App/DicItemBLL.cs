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
            var list = dal.List(query, "Sort", Sort.Asc);
            return new ListResult<DicItem>(200, "获取成功！", list.Count(), list);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public Result Add(DicItemEditParam p)
        {
            var model = new DicItem
            {
                Code = p.Code,
                Comment = p.Comment,
                Dic = new Dic { ID = p.PID },
                ID = 0,
                Name = p.Name,
                Sort = p.Sort,
                Status = p.Status
            };
            var result = dal.Save(model);
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
        public Result Edit(DicItemEditParam p)
        {
            var model = dal.Get(p.ID);
            if (model == null)
            {
                return new Result(300, "数据获取失败！");
            }
            model.Code = p.Code;
            model.Comment = p.Comment;
            model.Dic = new Dic { ID = p.PID };
            model.Name = p.Name;
            model.Sort = p.Sort;
            model.Status = p.Status;
            var result = dal.Update(model);
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
