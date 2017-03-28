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
    /// 菜单BLL
    /// </summary>
    public class MenuBLL : BaseBLL<Menu>
    {
        /// <summary>
        /// 获取子节点
        /// </summary>
        /// <param name="PID"></param>
        /// <returns></returns>
        public IList<MenuNode> GetChildNodes(int PID)
        {
            var query = Restrictions.Gt("Status", -1);
            var list = dal.List(query, "Sort", Sort.Asc);
            var nodes = new List<MenuNode>();

            List<Menu> list1 = list.Where(o => o.PID == PID).ToList();

            foreach (var i in list1)
            {
                var node = new MenuNode
                {
                    id = i.ID,
                    text = i.Name,
                    leaf = true,
                    expandable = false,
                    expanded = false,
                    iconCls = i.Icon,
                    ID = i.ID,
                    Name = i.Name,
                    Url = i.Url
                };

                // 判断是否有下级节点
                if (list.Where(o => o.PID == i.ID).Count() > 0)
                {
                    node.leaf = false;
                    node.expandable = true;
                    node.expanded = i.PID == 0 ? true : false;
                }

                nodes.Add(node);
            }

            return nodes;
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public Result Add(MenuEditParam p)
        {
            // 查找父节点的Code
            string PCode = "";
            if (p.PID > 0) // 不是顶级菜单
            {
                var query1 = Restrictions.Eq("PID", p.PID);
                var appMenu1 = dal.Get(query1);
                if (appMenu1 != null)
                {
                    PCode = appMenu1.Code;
                }
            }

            // 为当前结点生成Code
            string Code = "";
            var query = Restrictions.Eq("PID", p.PID);
            var list = dal.List(query);
            for (var i = 1; i <= 999; i++)
            {
                if (i < 10) // 1-9
                {
                    Code = PCode + "00" + i;
                }
                else if (i < 100) // 10-99
                {
                    Code = PCode + "0" + i;
                }
                else // 100-999
                {
                    Code = PCode + i;
                }
                if (list.Where(o => o.Code == Code).Count() == 0)
                {
                    break;
                }
            }

            // 添加菜单
            var menu = new Menu
            {
                Code = Code,
                Comment = p.Comment,
                Icon = p.Icon,
                IconType = p.IconType,
                ID = 0,
                Name = p.Name,
                PID = p.PID,
                Sort = p.Sort,
                Status = p.Status,
                Url = p.Url,
                UrlType = p.UrlType
            };
            var result = dal.Add(menu);
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
        public Result Edit(MenuEditParam p)
        {
            var model = dal.Get(p.ID);
            if (model == null)
            {
                return new Result(300, "数据不存在！");
            }
            model.Code = p.Code;
            model.Comment = p.Comment;
            model.Icon = p.Icon;
            model.IconType = p.IconType;
            model.Name = p.Name;
            model.PID = p.PID;
            model.Sort = p.Sort;
            model.Status = p.Status;
            model.Url = p.Url;
            model.UrlType = p.UrlType;

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
