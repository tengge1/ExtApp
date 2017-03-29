using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ExtApp.Model;

namespace ExtApp.BLL
{
    /// <summary>
    /// 字典BLL
    /// </summary>
    public class DicBLL : BaseBLL<Dic>
    {
        /// <summary>
        /// 列表
        /// </summary>
        /// <returns></returns>
        public ListResult<Dic> List()
        {
            var list = dal.List(null, "ID", Sort.Desc);
            return new ListResult<Dic>(200, "获取数据成功！", list.Count(), list);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public Result Add(DicEditParam p)
        {
            var model = new Dic
            {
                Code = p.Code,
                Comment = p.Comment,
                ID = 0,
                Name = p.Name,
                Sort = p.Sort,
                Status = p.Status,
                Type = (DicType)p.TypeID
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
        public Result Edit(DicEditParam p)
        {
            var model = dal.Get(p.ID);
            if (model == null)
            {
                return new Result(300, "数据获取失败！");
            }
            model.Code = p.Code;
            model.Comment = p.Comment;
            model.Name = p.Name;
            model.Sort = p.Sort;
            model.Status = p.Status;
            model.Type = (DicType)p.TypeID;
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
