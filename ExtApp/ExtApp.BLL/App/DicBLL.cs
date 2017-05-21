using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ExtApp.Model;
using ExtApp.DAL;
using NHibernate.Criterion;

namespace ExtApp.BLL
{
    /// <summary>
    /// 字典BLL
    /// </summary>
    public class DicBLL : BaseBLL<Dic>
    {
        /// <summary>
        /// 字典项DAL
        /// </summary>
        private DicItemDAL dicItemDAL;

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
        /// 获取字典子项
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        public ListResult<DicItem> GetItems(string code)
        {
            // 获取字典
            var query = Restrictions.Eq("Code", code);
            var dic = dal.Get(query);
            if (dic == null)
            {
                return new ListResult<DicItem>(300, "该字典不存在！");
            }

            // 获取字典项
            query = Restrictions.Eq("Dic", dic);
            var list = dicItemDAL.List(query, "Sort", Sort.Asc);
            return new ListResult<DicItem>(200, "获取成功！", list.Count(), list);
        }

        /// <summary>
        /// 获取子节点
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public ListResult<DicNode> GetChildNodes(string name = "")
        {
            var list = dal.List();
            var nodes = new List<DicNode>();
            foreach (var i in list)
            {
                if (!string.IsNullOrEmpty(name) && !i.Name.Contains(name))
                {
                    continue;
                }
                var node = new DicNode
                {
                    Code = i.Code,
                    Comment = i.Comment,
                    expandable = false,
                    expanded = false,
                    ID = i.ID,
                    id = i.ID,
                    leaf = true,
                    Name = i.Name,
                    Sort = i.Sort,
                    Status = i.Status,
                    text = i.Name + "[" + i.Code + "]",
                    Type = i.Type
                };
                nodes.Add(node);
            }
            return new ListResult<DicNode>(200, "获取数据成功！", nodes.Count(), nodes);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override Result Add(Dic model)
        {
            model.ID = 0;
            return base.Add(model);
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override Result Edit(Dic model)
        {
            var dic = dal.Get(model.ID);
            if (dic == null)
            {
                return new Result(300, "数据获取失败！");
            }
            dic.Code = model.Code;
            dic.Comment = model.Comment;
            dic.Name = model.Name;
            dic.Sort = model.Sort;
            dic.Status = model.Status;
            dic.Type = model.Type;
            return base.Edit(dic);
        }
    }
}
