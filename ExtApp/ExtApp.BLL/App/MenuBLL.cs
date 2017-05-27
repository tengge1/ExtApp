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
    /// 菜单BLL
    /// </summary>
    public class MenuBLL : BaseBLL<Menu>
    {
        /// <summary>
        /// 角色菜单DAL
        /// </summary>
        private RoleMenuDAL roleMenuDAL;

        /// <summary>
        /// 获取所有菜单
        /// </summary>
        /// <returns></returns>
        public ListResult<Menu> List()
        {
            // 权限
            if (AdminHelper.Admin == null || AdminHelper.Admin.Role == null) // 尚未登录或者未设置角色
            {
                return new ListResult<Menu>(301, "无权限！");
            }
            var roleID = AdminHelper.Admin.Role.ID;
            var query = Restrictions.Eq("Role", new Role { ID = roleID });
            var auth = roleMenuDAL.List(query).Select(o => o.Menu).ToList();

            // 菜单
            var list = auth.Where(o => o.Status > -1).OrderBy(o => o.Sort).ToList();
            return new ListResult<Menu>(200, "获取成功！", list.Count(), list);
        }

        /// <summary>
        /// 获取子节点
        /// </summary>
        /// <param name="PID"></param>
        /// <param name="authorize"></param>
        /// <returns></returns>
        public ListResult<MenuNode> GetChildNodes(int PID, bool? authorize = false)
        {
            // 节点
            var nodes = new List<MenuNode>();

            IList<Menu> auth;
            if (authorize == true)
            {
                // 权限
                if (AdminHelper.Admin == null || AdminHelper.Admin.Role == null) // 尚未登录或者未设置角色
                {
                    return new ListResult<MenuNode>(200, "无权限", 0, nodes);
                }
                var roleID = AdminHelper.Admin.Role.ID;
                var query = Restrictions.Eq("Role", new Role { ID = roleID });
                auth = roleMenuDAL.List(query).Select(o => o.Menu).ToList();
            }
            else
            {
                var query = Restrictions.Gt("Status", -1);
                auth = dal.List(query, "Sort", Sort.Asc);
            }

            // 菜单
            var list = auth.Where(o => o.Status > -1).OrderBy(o => o.Sort).ToList();

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
                    iconCls = i.Icon,
                    ID = i.ID,
                    PMenu = i.PMenu,
                    Code = i.Code,
                    Name = i.Name,
                    UrlType = i.UrlType,
                    Url = i.Url,
                    OpenType = i.OpenType,
                    IconType = i.IconType,
                    Icon = i.Icon,
                    Sort = i.Sort,
                    Status = i.Status,
                    Comment = i.Comment
                };

                // 判断是否有下级节点
                if (list.Where(o => o.PMenu != null && o.PMenu.ID == i.ID).Count() > 0)
                {
                    node.leaf = false;
                    node.expandable = true;
                    node.expanded = i.PMenu == null ? true : false;
                }

                nodes.Add(node);
            }

            return new ListResult<MenuNode>(200, "数据获取成功！", nodes.Count, nodes);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override Result Add(Menu model)
        {
            // 查找父节点的Code
            string PCode = "";
            if (model.PMenu != null) // 不是顶级菜单
            {
                var query1 = Restrictions.Eq("ID", model.PMenu.ID);
                var appMenu1 = dal.Get(query1);
                if (appMenu1 != null)
                {
                    PCode = appMenu1.Code;
                }
            }

            // 为当前结点生成Code
            string Code = "";
            ICriterion query = Restrictions.Eq("PMenu", null);
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
            model.Code = Code;
            model.ID = 0;
            return base.Add(model);
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override Result Edit(Menu model)
        {
            var menu = dal.Get(model.ID);
            if (menu == null)
            {
                return new Result(300, "数据不存在！");
            }
            menu.Comment = model.Comment;
            menu.Icon = model.Icon;
            menu.Name = model.Name;
            menu.PMenu = model.PMenu;
            menu.Sort = model.Sort;
            menu.Status = model.Status;
            menu.Url = model.Url;
            menu.OpenType = model.OpenType;
            menu.UrlType = model.UrlType;
            menu.IconType = model.IconType;
            return base.Edit(menu);
        }
    }
}
