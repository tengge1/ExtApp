using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Criterion;

using ExtApp.Model;
using ExtApp.DAL;

namespace ExtApp.BLL
{
    /// <summary>
    /// 角色菜单BLL
    /// </summary>
    public class RoleMenuBLL : BaseBLL<RoleMenu>
    {
        /// <summary>
        /// 菜单dal
        /// </summary>
        private MenuDAL menuDAL;

        /// <summary>
        /// 获取带有权限信息的菜单树
        /// </summary>
        /// <param name="PID"></param>
        /// <param name="roleID"></param>
        /// <returns></returns>
        public IList<MenuNode> GetChildNodes(int PID, int roleID = 0)
        {
            var query = Restrictions.Gt("Status", -1);
            var list = menuDAL.List(query, "Sort", Sort.Asc);
            var auth = dal.List(null, "ID", Sort.Asc);

            var nodes = new List<MenuNode>();

            List<Menu> list1;
            if (PID == 0)
            {
                list1 = list.Where(o => o.PMenu == null).ToList();
            }
            else
            {
                list1 = list.Where(o => o.PMenu != null && o.PMenu.ID == PID).ToList();
            }

            foreach (var i in list1)
            {
                var node = new MenuNode
                {
                    id = i.ID,
                    text = i.Name,
                    leaf = true,
                    expandable = false,
                    expanded = false,
                    @checked = false,
                    iconCls = i.Icon,
                    ID = i.ID,
                    PID = i.PMenu == null ? 0 : i.PMenu.ID,
                    PName = i.PMenu == null ? "顶级菜单" : i.PMenu.Name,
                    Code = i.Code,
                    Name = i.Name,
                    UrlTypeID = i.UrlType == null ? 0 : i.UrlType.ID,
                    UrlTypeCode = i.UrlType == null ? "" : i.UrlType.Code,
                    UrlTypeName = i.UrlType == null ? "" : i.UrlType.Name,
                    Url = i.Url,
                    IconTypeID = i.IconType == null ? 0 : i.IconType.ID,
                    IconTypeCode = i.IconType == null ? "" : i.IconType.Code,
                    IconTypeName = i.IconType == null ? "" : i.IconType.Name,
                    Icon = i.Icon,
                    Sort = i.Sort,
                    Status = i.Status,
                    Comment = i.Comment
                };


                if (auth.Where(o => o.Role != null && o.Role.ID == roleID
                && o.Menu != null && o.Menu.ID == i.ID).Count() > 0) // 该角色具有该权限
                {
                    node.@checked = true;
                }

                // 判断是否有下级节点
                if (list.Where(o => o.PMenu != null && o.PMenu.ID == i.ID).Count() > 0)
                {
                    node.leaf = false;
                    node.expandable = true;
                    node.expanded = true;
                }

                nodes.Add(node);
            }

            return nodes;
        }

        /// <summary>
        /// 保存权限信息
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public Result Save(RoleMenuModel p)
        {
            // 先获取该角色所有权限
            var query = Restrictions.Eq("Role.ID", p.RoleID);
            var list = dal.List(query);

            // 原来没有、现在有，则添加该权限
            foreach (var i in p.MenuIDs)
            {
                if (list.Where(o => o.Menu != null && o.Menu.ID == i).Count() == 0)
                {
                    var model = new RoleMenu
                    {
                        ID = 0,
                        Role = new Role { ID = p.RoleID },
                        Menu = new Menu { ID = i }
                    };
                    dal.Save(model);
                };
            }

            // 原来有，现在没有，则删除该权限
            foreach (var i in list)
            {
                if (p.MenuIDs.Where(o => o == i.Menu.ID).Count() == 0)
                {
                    dal.Delete(i.ID);
                }
            }

            return new Result(200, "保存成功！");
        }
    }
}
