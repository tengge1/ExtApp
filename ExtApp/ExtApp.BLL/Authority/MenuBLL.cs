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
        /// 获取菜单树子节点
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
    }
}
