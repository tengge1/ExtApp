using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 角色菜单表
    /// </summary>
    [Class(Table = "AppRoleMenu")]
    public class RoleMenu
    {
        /// <summary>
        /// ID
        /// </summary>
        [Id(Name = "ID")]
        [Generator(Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 角色
        /// </summary>
        [ManyToOne(ClassType = typeof(Role), Column = "RoleID", Lazy = Laziness.False)]
        public virtual Role Role { get; set; }

        /// <summary>
        /// 菜单
        /// </summary>
        [ManyToOne(ClassType = typeof(Menu), Column = "MenuID", Lazy = Laziness.False)]
        public virtual Menu Menu { get; set; }
    }
}
