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
        public IList<Menu> List()
        {
            // 权限
            if (AdminHelper.Admin == null || AdminHelper.Admin.Role == null) // 尚未登录或者未设置角色
            {
                return new List<Menu>();
            }
            var roleID = AdminHelper.Admin.Role.ID;
            var query = Restrictions.Eq("Role", new Role { ID = roleID });
            var auth = roleMenuDAL.List(query).Select(o => o.Menu).ToList();

            // 菜单
            var list = auth.Where(o => o.Status > -1).OrderBy(o => o.Sort).ToList();
            return list;
        }

        /// <summary>
        /// 获取子节点
        /// </summary>
        /// <param name="PID"></param>
        /// <param name="authorize"></param>
        /// <returns></returns>
        public IList<MenuNode> GetChildNodes(int PID, bool? authorize = false)
        {
            // 节点
            var nodes = new List<MenuNode>();

            IList<Menu> auth;
            if (authorize == true)
            {
                // 权限
                if (AdminHelper.Admin == null || AdminHelper.Admin.Role == null) // 尚未登录或者未设置角色
                {
                    return nodes;
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
                    PID = i.PMenu == null ? 0 : i.PMenu.ID,
                    PName = i.PMenu == null ? "顶级菜单" : i.PMenu.Name,
                    Code = i.Code,
                    Name = i.Name,
                    UrlTypeID = i.UrlType == null ? 0 : i.UrlType.ID,
                    UrlTypeCode = i.UrlType == null ? "" : i.UrlType.Code,
                    UrlTypeName = i.UrlType == null ? "" : i.UrlType.Name,
                    Url = i.Url,
                    OpenTypeID = i.OpenType == null ? 0 : i.OpenType.ID,
                    OpenTypeCode = i.OpenType == null ? "" : i.OpenType.Code,
                    OpenTypeName = i.OpenType == null ? "" : i.OpenType.Name,
                    IconTypeID = i.IconType == null ? 0 : i.IconType.ID,
                    IconTypeCode = i.IconType == null ? "" : i.IconType.Code,
                    IconTypeName = i.IconType == null ? "" : i.IconType.Name,
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
                var query1 = Restrictions.Eq("ID", p.PID);
                var appMenu1 = dal.Get(query1);
                if (appMenu1 != null)
                {
                    PCode = appMenu1.Code;
                }
            }

            // 为当前结点生成Code
            string Code = "";
            ICriterion query;
            if (p.PID == 0)
            {
                query = Restrictions.Eq("PMenu", null);
            }
            else
            {
                query = Restrictions.Eq("PMenu", new Menu { ID = p.PID });
            }
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
                ID = 0,
                Name = p.Name,
                PMenu = p.PID == 0 ? null : new Menu { ID = p.PID },
                Sort = p.Sort,
                Status = p.Status,
                Url = p.Url,
                UrlType = p.UrlTypeID == null ? null : new DicItem { ID = p.UrlTypeID.Value },
                OpenType = p.OpenTypeID == null ? null : new DicItem { ID = p.OpenTypeID.Value },
                IconType = p.IconTypeID == null ? null : new DicItem { ID = p.IconTypeID.Value }
            };
            var result = dal.Save(menu);
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
            model.Comment = p.Comment;
            model.Icon = p.Icon;
            model.Name = p.Name;
            model.PMenu = p.PID == 0 ? null : new Menu { ID = p.PID };
            model.Sort = p.Sort;
            model.Status = p.Status;
            model.Url = p.Url;
            model.OpenType = p.OpenTypeID == null ? null : new DicItem { ID = p.OpenTypeID.Value };
            model.UrlType = p.UrlTypeID == null ? null : new DicItem { ID = p.UrlTypeID.Value };
            model.IconType = p.IconTypeID == null ? null : new DicItem { ID = p.IconTypeID.Value };

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
